<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, watch, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import TCard from './TCard.vue'
import type { PopoverPlacement } from './types'

// Define props for the popover
const props = defineProps({
  /**
   * Controls whether the popover is visible
   */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Preferred placement of the popover (will be overridden if needed to fit viewport)
   */
  placement: {
    type: String as PropType<PopoverPlacement>,
    default: 'bottom',
    validator: (placement: string) =>
      ['top', 'right', 'bottom', 'left', 'auto'].includes(placement),
  },
  /**
   * Offset (in pixels) from the trigger element
   */
  offset: {
    type: Number,
    default: 8,
  },
  /**
   * Whether to show an arrow pointing to the trigger
   */
  showArrow: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether clicking outside the popover should close it
   */
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
  /**
   * Whether to animate the popover entrance/exit
   */
  animated: {
    type: Boolean,
    default: true,
  },
  /**
   * Additional classes to apply to the popover card
   */
  class: {
    type: String,
    default: '',
  },
  /**
   * Card elevation to use (passed to TCard)
   */
  elevation: {
    type: String,
    default: 'lg',
  },
  /**
   * ID for the popover element (required for accessibility)
   */
  id: {
    type: String,
    default: () => `popover-${Math.random().toString(36).substring(2, 9)}`,
  },
  /**
   * Accessible label for the popover (used when no visible label is present)
   */
  ariaLabel: {
    type: String,
    default: '',
  },
  /**
   * ID of an element that labels the popover (used instead of ariaLabel)
   */
  ariaLabelledby: {
    type: String,
    default: '',
  },
  /**
   * ID of an element that describes the popover
   */
  ariaDescribedby: {
    type: String,
    default: '',
  },
  /**
   * Whether to focus the first focusable element in the popover when opened
   */
  autoFocus: {
    type: Boolean,
    default: true,
  },
})

// Define emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'hide'): void
}>()

// References to DOM elements
const containerRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)

// Popover state
const isVisible = ref(props.modelValue)
const popoverStyle = ref<Record<string, string>>({})

// For managing focus when popover is open
const previousActiveElement = ref<HTMLElement | null>(null)
// For intersection observer
const observer = ref<IntersectionObserver | null>(null)

// Compute proper aria attributes for the trigger
const triggerAriaAttrs = computed(() => {
  const attrs: Record<string, string | boolean> = {
    'aria-haspopup': 'dialog',
    'aria-expanded': isVisible.value,
    'aria-controls': props.id,
  }
  return attrs
})

// Compute proper aria attributes for the popover
const popoverAriaAttrs = computed(() => {
  const attrs: Record<string, string> = {
    role: 'dialog',
    tabindex: '-1',
  }

  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
  if (props.ariaLabelledby) attrs['aria-labelledby'] = props.ariaLabelledby
  if (props.ariaDescribedby) attrs['aria-describedby'] = props.ariaDescribedby

  return attrs
})

// Position the popover is defined below

// Position the popover
const updatePosition = () => {
  if (!isVisible.value || !triggerRef.value || !popoverRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const popoverRect = popoverRef.value.getBoundingClientRect()
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  let placement = props.placement

  // Auto placement logic
  if (placement === 'auto') {
    const spaceBelow = windowHeight - triggerRect.bottom
    const spaceAbove = triggerRect.top
    const spaceRight = windowWidth - triggerRect.right
    const spaceLeft = triggerRect.left

    // Find the side with most space
    const spaces = [
      { placement: 'bottom', space: spaceBelow },
      { placement: 'top', space: spaceAbove },
      { placement: 'right', space: spaceRight },
      { placement: 'left', space: spaceLeft },
    ]

    const bestPlacement = spaces.sort((a, b) => b.space - a.space)[0]
    placement = bestPlacement.placement as PopoverPlacement
  }

  let top = 0
  let left = 0

  // Position based on placement
  switch (placement) {
    case 'top':
      top = triggerRect.top - popoverRect.height - props.offset
      left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
      break
    case 'right':
      top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
      left = triggerRect.right + props.offset
      break
    case 'bottom':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
      break
    case 'left':
      top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
      left = triggerRect.left - popoverRect.width - props.offset
      break
  }

  // Boundary adjustments to keep popover in viewport
  if (left < 10) left = 10
  if (left + popoverRect.width > windowWidth - 10) left = windowWidth - popoverRect.width - 10
  if (top < 10) top = 10
  if (top + popoverRect.height > windowHeight - 10) top = windowHeight - popoverRect.height - 10

  // Update styles - only use the Vue binding mechanism for styles to maintain transitions
  popoverStyle.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: '9999',
  }

  // For test environments, ensure the style is directly applied as well
  // This helps with testing without breaking transitions
  if (popoverRef.value) {
    // Only apply styles that are necessary for tests
    // We don't override style directly to avoid breaking transitions
    popoverRef.value.style.position = 'fixed'
    popoverRef.value.style.top = `${top}px`
    popoverRef.value.style.left = `${left}px`
    popoverRef.value.style.zIndex = '9999'
  }
}

// Handle scroll and resize events
const handleScrollOrResize = () => {
  updatePosition()
}

// Watch for model value changes
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      showPopover()
    } else {
      hidePopover()
    }
  },
)

// Open popover
const showPopover = async () => {
  isVisible.value = true

  // Wait for the DOM to update
  await nextTick()

  // Set up position
  updatePosition()

  // Set up intersection observer if available in the environment
  if (typeof IntersectionObserver !== 'undefined' && !observer.value && popoverRef.value) {
    observer.value = new IntersectionObserver(
      (entries) => {
        // If popover is not intersecting (out of view), update position
        if (!entries[0].isIntersecting) {
          updatePosition()
        }
      },
      { threshold: 0.5 },
    )

    observer.value.observe(popoverRef.value)
  }

  // Focus the popover for accessibility
  if (props.autoFocus && popoverRef.value) {
    previousActiveElement.value = document.activeElement as HTMLElement
    popoverRef.value.focus()
  }

  emit('show')
}

// Close popover
const hidePopover = () => {
  isVisible.value = false

  // Disconnect observer
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }

  // Restore focus
  if (previousActiveElement.value) {
    previousActiveElement.value.focus()
    previousActiveElement.value = null
  }

  emit('hide')
}

// Toggle popover
const togglePopover = () => {
  emit('update:modelValue', !isVisible.value)
}

// Handle keyboard events
const handleKeydown = (event: KeyboardEvent) => {
  if (!isVisible.value) return

  // Close on escape key
  if (event.key === 'Escape') {
    emit('update:modelValue', false)
    event.preventDefault()
  }
}

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  if (!props.closeOnClickOutside || !isVisible.value) return

  const target = event.target as HTMLElement

  // Don't close if clicking on the trigger or popover
  if (
    (triggerRef.value && (triggerRef.value === target || triggerRef.value.contains(target))) ||
    (popoverRef.value && (popoverRef.value === target || popoverRef.value.contains(target)))
  ) {
    return
  }

  emit('update:modelValue', false)
}

// Specifically handle trigger clicks
const handleTriggerClick = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()
  togglePopover()
}

// Lifecycle hooks
onMounted(() => {
  // Add event listeners
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleScrollOrResize)
  window.addEventListener('scroll', handleScrollOrResize, true) // Use capture phase

  // Initialize state based on modelValue
  if (props.modelValue) {
    showPopover()
  }
})

onBeforeUnmount(() => {
  // Clean up event listeners
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleScrollOrResize)
  window.removeEventListener('scroll', handleScrollOrResize, true)

  // Disconnect intersection observer
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }
})
</script>

<template>
  <div ref="containerRef" class="relative inline-block">
    <!-- Trigger element -->
    <div
      ref="triggerRef"
      @click="handleTriggerClick"
      class="inline-block cursor-pointer"
      v-bind="triggerAriaAttrs"
    >
      <slot name="trigger"></slot>
    </div>

    <!-- Popover content using Vue's transition for better animation control -->
    <Transition
      :enter-active-class="props.animated ? 'transition-all duration-200 ease-out' : ''"
      :enter-from-class="props.animated ? 'opacity-0 scale-95' : ''"
      :enter-to-class="props.animated ? 'opacity-100 scale-100' : ''"
      :leave-active-class="props.animated ? 'transition-all duration-150 ease-in' : ''"
      :leave-from-class="props.animated ? 'opacity-100 scale-100' : ''"
      :leave-to-class="props.animated ? 'opacity-0 scale-95' : ''"
    >
      <div
        v-if="isVisible"
        ref="popoverRef"
        :id="id"
        v-bind="popoverAriaAttrs"
        :class="['fixed z-50 w-max']"
        :style="popoverStyle"
      >
        <!-- Arrow indicator -->
        <div
          v-if="showArrow"
          :class="[
            'absolute h-3 w-3 rotate-45 border bg-white',
            placement === 'top' ? 'bottom-0 translate-y-1/2 border-r border-b' : '',
            placement === 'right' ? 'left-0 -translate-x-1/2 border-t border-l' : '',
            placement === 'bottom' ? 'top-0 -translate-y-1/2 border-t border-l' : '',
            placement === 'left' ? 'right-0 translate-x-1/2 border-r border-b' : '',
            placement === 'top' || placement === 'bottom' ? 'left-1/2 -translate-x-1/2' : '',
            placement === 'left' || placement === 'right' ? 'top-1/2 -translate-y-1/2' : '',
          ]"
          aria-hidden="true"
        ></div>

        <!-- Content card -->
        <TCard :elevation="elevation" class="overflow-hidden" :class="['relative', props.class]">
          <slot></slot>
        </TCard>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Ensure the popover is always visible */
.fixed {
  position: fixed !important;
  z-index: 9999 !important;
  width: max-content !important;
}

/* Handle potential overflow */
@media (max-width: 640px) {
  .fixed {
    max-width: calc(100vw - 32px) !important;
    max-height: calc(100vh - 128px) !important;
    overflow: auto !important;
  }
}
</style>

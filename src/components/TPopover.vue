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
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

// Popover state
const isVisible = ref(props.modelValue)
const isClosing = ref(false)
const isOpening = ref(false)
const actualPlacement = ref<PopoverPlacement>(props.placement)

// Animation timing
const ANIMATION_DURATION = 200

// For managing focus when popover is open
const previousActiveElement = ref<HTMLElement | null>(null)

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

// Computed styles for positioning
const popoverStyles = computed(() => {
  if (!isVisible.value) return {}

  return {
    position: 'absolute',
    zIndex: '50',
  }
})

// Animation classes
const animationClasses = computed(() => {
  if (!props.animated) return {}

  const baseClasses = 'transition-all duration-200 ease-out'
  const enterFromClasses = {
    top: 'opacity-0 translate-y-2',
    right: 'opacity-0 -translate-x-2',
    bottom: 'opacity-0 -translate-y-2',
    left: 'opacity-0 translate-x-2',
    auto: 'opacity-0 scale-95',
  }

  return {
    base: baseClasses,
    show: 'opacity-100 translate-x-0 translate-y-0 scale-100',
    hide: enterFromClasses[actualPlacement.value] || enterFromClasses.auto,
  }
})

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

// Find focusable elements within a container
const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const selector =
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  const elements = Array.from(container.querySelectorAll(selector)) as HTMLElement[]
  return elements.filter(
    (el) => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1',
  )
}

// Focus the first interactive element in the popover
const focusFirstElement = () => {
  if (!popoverRef.value || !props.autoFocus) return

  // Remember the previously focused element to restore focus later
  previousActiveElement.value = document.activeElement as HTMLElement

  // Get all focusable elements in the popover
  const focusableElements = getFocusableElements(popoverRef.value)

  if (focusableElements.length > 0) {
    // Focus the first focusable element
    focusableElements[0].focus()
  } else {
    // If no focusable elements, focus the popover itself
    popoverRef.value.focus()
  }
}

// Restore focus to the previously focused element when closing
const restoreFocus = () => {
  if (previousActiveElement.value) {
    previousActiveElement.value.focus()
    previousActiveElement.value = null
  }
}

// Open popover
const showPopover = async () => {
  isClosing.value = false
  isOpening.value = true
  isVisible.value = true

  // Wait for the DOM to update
  await nextTick()

  // Position the popover
  updatePosition()

  // Focus the first focusable element
  focusFirstElement()

  // Trigger animation
  setTimeout(() => {
    isOpening.value = false
  }, 50)

  emit('show')

  // Start observing for viewport changes
  startObserver()
}

// Close popover
const hidePopover = () => {
  if (!isVisible.value) return

  if (props.animated) {
    isClosing.value = true
    setTimeout(() => {
      isVisible.value = false
      isClosing.value = false
      restoreFocus()
      emit('hide')
    }, ANIMATION_DURATION)
  } else {
    isVisible.value = false
    restoreFocus()
    emit('hide')
  }

  // Stop observing when closed
  stopObserver()
}

// Toggle popover
const togglePopover = () => {
  emit('update:modelValue', !isVisible.value)
}

// Determine best placement for the popover to stay in viewport
const getOptimalPlacement = () => {
  if (!triggerRef.value || !popoverRef.value) return 'bottom'

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const popoverRect = popoverRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // If user specified a placement other than auto, try to use it
  if (props.placement !== 'auto') {
    const preferred = props.placement

    // Check if the preferred placement will fit
    const spaceAvailable = {
      top: triggerRect.top > popoverRect.height + props.offset,
      right: viewportWidth - triggerRect.right > popoverRect.width + props.offset,
      bottom: viewportHeight - triggerRect.bottom > popoverRect.height + props.offset,
      left: triggerRect.left > popoverRect.width + props.offset,
    }

    // Use preferred placement if it fits
    if (spaceAvailable[preferred]) {
      return preferred
    }
  }

  // Auto placement logic
  const spaceTop = triggerRect.top
  const spaceRight = viewportWidth - triggerRect.right
  const spaceBottom = viewportHeight - triggerRect.bottom
  const spaceLeft = triggerRect.left

  // Get the direction with the most space
  const maxSpace = Math.max(spaceTop, spaceRight, spaceBottom, spaceLeft)

  if (maxSpace === spaceBottom && spaceBottom >= popoverRect.height + props.offset) {
    return 'bottom'
  } else if (maxSpace === spaceTop && spaceTop >= popoverRect.height + props.offset) {
    return 'top'
  } else if (maxSpace === spaceRight && spaceRight >= popoverRect.width + props.offset) {
    return 'right'
  } else if (maxSpace === spaceLeft && spaceLeft >= popoverRect.width + props.offset) {
    return 'left'
  }

  // Default to bottom if all else fails
  return 'bottom'
}

// Update the position of the popover
const updatePosition = () => {
  if (!triggerRef.value || !popoverRef.value) return

  // Get the optimal placement
  actualPlacement.value = getOptimalPlacement()

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const popoverRect = popoverRef.value.getBoundingClientRect()

  // Calculate position based on placement
  let top = 0
  let left = 0

  switch (actualPlacement.value) {
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

  // Constrain to viewport
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Don't let it go off the right
  if (left + popoverRect.width > viewportWidth) {
    left = viewportWidth - popoverRect.width - 8
  }

  // Don't let it go off the left
  if (left < 8) {
    left = 8
  }

  // Don't let it go off the bottom
  if (top + popoverRect.height > viewportHeight) {
    top = viewportHeight - popoverRect.height - 8
  }

  // Don't let it go off the top
  if (top < 8) {
    top = 8
  }

  // Apply position
  if (popoverRef.value) {
    popoverRef.value.style.top = `${top}px`
    popoverRef.value.style.left = `${left}px`
  }
}

// IntersectionObserver setup
let intersectionObserver: IntersectionObserver | null = null

const startObserver = () => {
  if (!popoverRef.value) return

  // Create observer to detect when popover goes out of viewport
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.intersectionRatio < 1) {
        // Reposition when not fully visible
        updatePosition()
      }
    },
    { threshold: [0.5, 1] },
  )

  intersectionObserver.observe(popoverRef.value)
}

const stopObserver = () => {
  if (intersectionObserver) {
    intersectionObserver.disconnect()
    intersectionObserver = null
  }
}

// Handle keyboard events
const handleKeydown = (event: KeyboardEvent) => {
  if (!isVisible.value) return

  // Close on escape key
  if (event.key === 'Escape') {
    emit('update:modelValue', false)
    event.preventDefault()
  }

  // Handle tab key for focus trap
  if (event.key === 'Tab' && popoverRef.value) {
    const focusableElements = getFocusableElements(popoverRef.value)
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Shift+Tab on first element should loop to last element
    if (event.shiftKey && document.activeElement === firstElement) {
      lastElement.focus()
      event.preventDefault()
    }
    // Tab on last element should loop to first element
    else if (!event.shiftKey && document.activeElement === lastElement) {
      firstElement.focus()
      event.preventDefault()
    }
  }
}

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  if (!props.closeOnClickOutside || !isVisible.value) return

  const target = event.target as HTMLElement

  // Don't close if clicking on the trigger or popover
  if (
    (triggerRef.value && triggerRef.value.contains(target)) ||
    (popoverRef.value && popoverRef.value.contains(target))
  ) {
    return
  }

  emit('update:modelValue', false)
}

// Resize and scroll handlers for repositioning
const handleResize = () => {
  if (isVisible.value) {
    updatePosition()
  }
}

const handleScroll = () => {
  if (isVisible.value) {
    updatePosition()
  }
}

// Lifecycle hooks
onMounted(() => {
  // Add event listeners
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, true)

  // Initialize state based on modelValue
  if (props.modelValue) {
    showPopover()
  }
})

onBeforeUnmount(() => {
  // Clean up event listeners
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll, true)
  stopObserver()
})
</script>

<template>
  <div ref="containerRef" class="inline-block">
    <!-- Trigger slot wrapped in a div for positioning reference -->
    <div
      ref="triggerRef"
      @click="togglePopover"
      class="inline-block cursor-pointer"
      v-bind="triggerAriaAttrs"
    >
      <slot name="trigger"></slot>
    </div>

    <!-- Teleport the popover to the body to avoid layout issues -->
    <Teleport to="body">
      <!-- Popover container -->
      <div
        v-if="isVisible"
        ref="popoverRef"
        :id="id"
        :style="popoverStyles"
        v-bind="popoverAriaAttrs"
        :class="[
          'fixed',
          animationClasses.base,
          isOpening || isClosing ? animationClasses.hide : animationClasses.show,
        ]"
      >
        <!-- Arrow indicator pointing to trigger -->
        <div
          v-if="showArrow"
          :class="[
            'absolute h-3 w-3 rotate-45 border bg-white',
            // Position arrow based on placement
            actualPlacement === 'top' ? 'bottom-0 translate-y-1/2 border-b border-r' : '',
            actualPlacement === 'right' ? 'left-0 -translate-x-1/2 border-l border-t' : '',
            actualPlacement === 'bottom' ? 'top-0 -translate-y-1/2 border-l border-t' : '',
            actualPlacement === 'left' ? 'right-0 translate-x-1/2 border-b border-r' : '',
            // Horizontal centering for top/bottom placements
            actualPlacement === 'top' || actualPlacement === 'bottom'
              ? 'left-1/2 -translate-x-1/2'
              : '',
            // Vertical centering for left/right placements
            actualPlacement === 'left' || actualPlacement === 'right'
              ? 'top-1/2 -translate-y-1/2'
              : '',
          ]"
          aria-hidden="true"
        ></div>

        <!-- Content card -->
        <TCard
          :elevation="elevation"
          class="overflow-hidden"
          :class="['relative z-50', props.class]"
        >
          <slot></slot>
        </TCard>
      </div>
    </Teleport>
  </div>
</template>

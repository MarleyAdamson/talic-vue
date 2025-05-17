<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, watch, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import TButton from './TButton.vue'

// Define modal size options
type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

// Define props with validation
const props = defineProps({
  /**
   * Controls whether the modal is visible
   */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Title of the modal - can also use title slot
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * Subtitle of the modal - can also use subtitle slot
   */
  subtitle: {
    type: String,
    default: '',
  },
  /**
   * Size of the modal
   */
  size: {
    type: String as PropType<ModalSize>,
    default: 'md',
    validator: (size: string) => ['sm', 'md', 'lg', 'xl', 'full'].includes(size),
  },
  /**
   * Whether clicking the backdrop should close the modal
   */
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  /**
   * Whether the modal should have a close button in the header
   */
  showCloseButton: {
    type: Boolean,
    default: true,
  },
  /**
   * Whether to perform animations when showing/hiding
   */
  animated: {
    type: Boolean,
    default: true,
  },
  /**
   * Whether the modal should persist in the DOM when closed
   */
  persistent: {
    type: Boolean,
    default: false,
  },
  /**
   * Additional classes to apply to the modal
   */
  class: {
    type: String,
    default: '',
  },
  /**
   * ID for the modal (required for accessibility)
   */
  id: {
    type: String,
    default: () => `modal-${Math.random().toString(36).substring(2, 9)}`,
  },
  /**
   * ID for the modal title element (required for accessibility)
   */
  titleId: {
    type: String,
    default: () => `modal-title-${Math.random().toString(36).substring(2, 9)}`,
  },
  /**
   * ID for the modal description element (required for accessibility)
   */
  descriptionId: {
    type: String,
    default: () => `modal-description-${Math.random().toString(36).substring(2, 9)}`,
  },
})

// Define emits with types
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
}>()

// Internal state
const isVisible = ref(props.modelValue)
const isClosing = ref(false)
const isOpening = ref(false)
const modalRef = ref<HTMLDivElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)
const backdropRef = ref<HTMLDivElement | null>(null)

// Flag to prevent immediate backdrop clicks after opening
const backdropClickable = ref(false)

// Transition timing in milliseconds (for animations)
const ANIMATION_DURATION = 300

// Add a computed property to determine if modal is fullscreen
const isFullscreen = computed(() => props.size === 'full')

// Size classes
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-sm'
    case 'lg':
      return 'max-w-2xl'
    case 'xl':
      return 'max-w-4xl'
    case 'full':
      return 'w-full h-full mx-0 my-0 sm:max-w-full sm:mx-6 sm:my-6 sm:h-auto'
    case 'md':
    default:
      return 'max-w-lg'
  }
})

// Animation classes based on props
const animationClasses = computed(() => {
  return props.animated
    ? {
        backdrop: 'transition-opacity duration-300 ease-out',
        modal: 'transition-all duration-300 ease-out',
      }
    : {
        backdrop: '',
        modal: '',
      }
})

// Watch for changes in modelValue prop
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      openModal()
    } else {
      closeModal()
    }
  },
)

// Open modal function
const openModal = async () => {
  isClosing.value = false
  isOpening.value = true
  isVisible.value = true

  // Reset backdrop click prevention
  backdropClickable.value = false

  // Ensure DOM is updated before focusing and animating
  await nextTick()

  // Trigger animation by removing the isOpening flag after a tiny delay
  // This delay ensures the browser has a chance to apply the initial state first
  setTimeout(() => {
    isOpening.value = false
  }, 50)

  trapFocus()
  emit('open')

  // Prevent body scrolling when modal is open
  document.body.classList.add('overflow-hidden')

  // Allow backdrop clicks after a delay to prevent accidental closes on mobile
  setTimeout(() => {
    backdropClickable.value = true
  }, 500)
}

// Close modal function
const closeModal = () => {
  if (!isVisible.value) return

  if (props.animated) {
    isClosing.value = true
    setTimeout(() => {
      isVisible.value = false
      isClosing.value = false
      emit('close')
      // Restore body scrolling
      document.body.classList.remove('overflow-hidden')
    }, ANIMATION_DURATION)
  } else {
    isVisible.value = false
    emit('close')
    // Restore body scrolling
    document.body.classList.remove('overflow-hidden')
  }
}

// Emit model update
const updateModel = (value: boolean) => {
  emit('update:modelValue', value)
}

// Handle backdrop click
const handleBackdropClick = () => {
  // If backdrop clicks are disabled or we haven't passed initial delay, do nothing
  if (!props.closeOnBackdrop || !backdropClickable.value) return

  // Simply close when clicking on backdrop, since we're using pointer-events-none
  // on the modal container to ensure this only triggers when clicking the backdrop

  // Emit a custom event for easier detection in Storybook
  document.dispatchEvent(new CustomEvent('modal-backdrop-click'))
  updateModel(false)
}

// Handle escape key press
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isVisible.value) {
    updateModel(false)
  }
}

// Trap focus inside modal for accessibility
const trapFocus = () => {
  if (!modalRef.value) return

  // Get all focusable elements
  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )

  if (focusableElements.length > 0) {
    // Focus the first element
    const firstElement = focusableElements[0] as HTMLElement
    firstElement.focus()
  }
}

// Set up event listeners
onMounted(() => {
  // Add keyboard and click handlers
  document.addEventListener('keydown', handleKeydown)

  // Initialize state based on initial modelValue
  if (props.modelValue) {
    openModal()
  }
})

// Clean up event listeners
onBeforeUnmount(() => {
  // Remove all event listeners
  document.removeEventListener('keydown', handleKeydown)

  // Ensure body scrolling is restored
  document.body.classList.remove('overflow-hidden')
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible || persistent">
      <!-- Backdrop/overlay with click handler -->
      <div
        ref="backdropRef"
        @click="handleBackdropClick"
        data-testid="modal-backdrop"
        :class="[
          'fixed inset-0 z-40 bg-black/40',
          animationClasses.backdrop,
          {
            'opacity-0': isClosing || isOpening || !isVisible,
            'opacity-100': isVisible && !isClosing && !isOpening,
            'pointer-events-none': !isVisible,
          },
        ]"
        aria-hidden="true"
      ></div>

      <!-- Modal dialog - make it pointer-events-none so clicks pass through to backdrop -->
      <div
        ref="modalRef"
        :id="id"
        role="dialog"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId"
        :aria-modal="isVisible ? 'true' : 'false'"
        :class="[
          'pointer-events-none fixed inset-0 z-50 flex items-end justify-center sm:items-center',
          { hidden: !isVisible },
        ]"
      >
        <!-- Modal content - restore pointer-events so content is interactive -->
        <div
          ref="contentRef"
          :class="[
            'pointer-events-auto relative flex flex-col overflow-hidden bg-white shadow-xl dark:bg-gray-50',
            // Different styling for fullscreen vs regular modals
            isFullscreen
              ? 'h-full w-full rounded-none sm:max-h-[calc(100vh-2rem)] sm:rounded-lg'
              : 'max-h-[calc(100vh-2rem)] w-full rounded-t-lg sm:rounded-lg',
            sizeClasses,
            animationClasses.modal,
            {
              'translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95':
                isClosing || isOpening || !isVisible,
              'translate-y-0 opacity-100 sm:scale-100': isVisible && !isClosing && !isOpening,
            },
            props.class,
          ]"
        >
          <!-- Header slot if provided, otherwise default header -->
          <div v-if="$slots.header" class="border-b border-gray-100 px-6 py-4 dark:border-gray-200">
            <slot name="header"></slot>
          </div>
          <div
            v-else-if="title || $slots.title || subtitle || $slots.subtitle || showCloseButton"
            class="flex items-start justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-200"
          >
            <div>
              <!-- Title slot or prop -->
              <h3
                v-if="$slots.title || title"
                :id="titleId"
                class="text-lg font-medium text-gray-800 sm:text-xl dark:text-gray-800"
              >
                <slot name="title">{{ title }}</slot>
              </h3>

              <!-- Subtitle slot or prop -->
              <p
                v-if="$slots.subtitle || subtitle"
                :id="descriptionId"
                class="mt-1 text-sm text-gray-600 dark:text-gray-600"
              >
                <slot name="subtitle">{{ subtitle }}</slot>
              </p>
            </div>

            <!-- Close button -->
            <TButton
              v-if="showCloseButton"
              variant="ghost"
              size="sm"
              aria-label="Close modal"
              class="-mt-2 -mr-2"
              @click="updateModel(false)"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </TButton>
          </div>

          <!-- Body content -->
          <div class="flex-1 overflow-y-auto px-6 py-4">
            <slot></slot>
          </div>

          <!-- Footer if provided -->
          <div v-if="$slots.footer" class="border-t border-gray-100 px-6 py-4 dark:border-gray-200">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

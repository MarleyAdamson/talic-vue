<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'primary' | 'success' | 'secondary'>,
    default: 'primary',
    validator: (variant: string) => ['primary', 'success', 'secondary'].includes(variant),
  },
  /**
   * Visual style for the button (solid has better contrast)
   */
  style: {
    type: String as PropType<'solid' | 'light'>,
    default: 'solid',
    validator: (style: string) => ['solid', 'light'].includes(style),
  },
  /**
   * Accessible label for the button
   * Required for accessibility if no text content is provided
   */
  ariaLabel: {
    type: String as PropType<string>,
    default: '',
  },
  /**
   * Whether the button is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Button type attribute
   */
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  /**
   * The ARIA role of the button
   */
  role: {
    type: String as PropType<string>,
    default: 'button',
  },
  /**
   * Sets the button as busy/loading
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * Makes the button take up the full width of its container
   */
  fullWidth: {
    type: Boolean,
    default: false,
  },
  /**
   * Additional classes to apply to the button
   */
  class: {
    type: String,
    default: '',
  },
})

// Define emits
const emit = defineEmits(['click'])

const buttonClasses = computed<string[]>(() => {
  const base: string[] = [
    'px-4',
    'py-2',
    'rounded',
    'font-medium',
    'transition-all',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
  ]

  const variants: string[] = []

  // Determine variant and style classes
  if (props.style === 'light') {
    // Light style (for tests)
    switch (props.variant) {
      case 'success':
        variants.push(
          'bg-green-200',
          'text-green-800',
          'hover:bg-green-300',
          'focus:ring-green-400',
          'focus-visible:ring-green-400',
          'active:bg-green-400',
        )
        break
      case 'secondary':
        variants.push(
          'bg-gray-100',
          'text-gray-800',
          'hover:bg-gray-200',
          'focus:ring-gray-300',
          'focus-visible:ring-gray-300',
          'active:bg-gray-300',
        )
        break
      case 'primary':
      default:
        variants.push(
          'bg-blue-200',
          'text-blue-800',
          'hover:bg-blue-300',
          'focus:ring-blue-400',
          'focus-visible:ring-blue-400',
          'active:bg-blue-400',
        )
        break
    }
  } else {
    // Solid style (for better accessibility)
    switch (props.variant) {
      case 'success':
        variants.push(
          'bg-green-600',
          'text-white',
          'hover:bg-green-700',
          'focus:ring-green-500',
          'focus-visible:ring-green-500',
          'active:bg-green-800',
        )
        break
      case 'secondary':
        variants.push(
          'bg-gray-200',
          'text-gray-800',
          'hover:bg-gray-300',
          'focus:ring-gray-400',
          'focus-visible:ring-gray-400',
          'active:bg-gray-400',
        )
        break
      case 'primary':
      default:
        variants.push(
          'bg-blue-600',
          'text-white',
          'hover:bg-blue-700',
          'focus:ring-blue-500',
          'focus-visible:ring-blue-500',
          'active:bg-blue-800',
        )
        break
    }
  }

  if (props.disabled) {
    // Override hover and active states for disabled buttons
    variants.push('opacity-50', 'cursor-not-allowed', 'hover:bg-none', 'active:bg-none')
  }

  if (props.fullWidth) {
    variants.push('w-full')
  }

  if (props.loading) {
    variants.push('cursor-wait')
  }

  if (props.class) {
    return [...base, ...variants, props.class]
  }

  return [...base, ...variants]
})

// Handle click event
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="buttonClasses"
    @click="handleClick"
    :disabled="disabled || loading"
    :type="type"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
    :aria-busy="loading"
    :role="role"
  >
    <span class="flex items-center justify-center gap-2">
      <span
        v-if="loading"
        class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        aria-hidden="true"
      ></span>
      <slot />
    </span>
  </button>
</template>

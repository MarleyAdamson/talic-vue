<script lang="ts" setup>
import type { PropType, Slots, ComputedRef } from 'vue'
import { computed, useSlots } from 'vue'

// Button variant types
type ButtonVariant = 'primary' | 'success' | 'secondary' | 'warning' | 'error' | 'info' | 'ghost'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonType = 'button' | 'submit' | 'reset'

// Size classes interface
interface SizeConfig {
  button: string[]
  icon: string
}

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
    validator: (variant: string) =>
      ['primary', 'success', 'secondary', 'warning', 'error', 'info', 'ghost'].includes(variant),
  },
  /**
   * Whether to use the outline style for the button
   */
  outline: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether to use a tonal (reduced opacity) background
   */
  tonal: {
    type: Boolean,
    default: false,
  },
  /**
   * Size of the button
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
    validator: (size: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(size),
  },
  /**
   * Accessible label for the button
   * Required for accessibility if no text content is provided
   */
  ariaLabel: {
    type: String,
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
    type: String as PropType<ButtonType>,
    default: 'button',
  },
  /**
   * The ARIA role of the button
   */
  role: {
    type: String,
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

// Define emits with typed event
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

// Get slots to check if prefix/suffix are provided
const slots: Slots = useSlots()

// Get size-specific classes
const sizeClasses: ComputedRef<SizeConfig> = computed((): SizeConfig => {
  switch (props.size) {
    case 'xs':
      return {
        button: ['px-2', 'py-1', 'text-xs', 'rounded'],
        icon: 'h-3 w-3',
      }
    case 'sm':
      return {
        button: ['px-3', 'py-1.5', 'text-sm', 'rounded'],
        icon: 'h-3.5 w-3.5',
      }
    case 'lg':
      return {
        button: ['px-5', 'py-2.5', 'text-lg', 'rounded-md'],
        icon: 'h-5 w-5',
      }
    case 'xl':
      return {
        button: ['px-6', 'py-3', 'text-xl', 'rounded-md'],
        icon: 'h-6 w-6',
      }
    case 'md':
    default:
      return {
        button: ['px-4', 'py-2', 'text-base', 'rounded'],
        icon: 'h-4 w-4',
      }
  }
})

// Common base classes for all buttons
const baseClasses: string[] = [
  'font-medium',
  'transition-all',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
]

// Common state classes for disabled and full-width
const getStateClasses = (): string[] => {
  const classes: string[] = []

  if (props.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed', 'hover:bg-none', 'active:bg-none')
  }

  if (props.fullWidth) {
    classes.push('w-full')
  }

  if (props.loading) {
    classes.push('cursor-wait')
  }

  return classes
}

const buttonClasses: ComputedRef<string[]> = computed<string[]>((): string[] => {
  const base: string[] = [...sizeClasses.value.button, ...baseClasses]
  const variants: string[] = []

  // Ghost variant (transparent)
  if (props.variant === 'ghost') {
    variants.push(
      'bg-transparent',
      'text-gray-700',
      'hover:bg-gray-100',
      'focus:ring-gray-400',
      'focus-visible:ring-gray-400',
      'active:bg-gray-200',
    )
  }
  // Outline variants
  else if (props.outline) {
    // Common outline styles
    const outlineBase: string[] = ['bg-transparent', 'border']

    // Variant-specific outline styles
    switch (props.variant) {
      case 'success':
        variants.push(
          ...outlineBase,
          'text-green-600',
          'border-green-600',
          'hover:bg-green-50',
          'focus:ring-green-500',
          'focus-visible:ring-green-500',
          'active:bg-green-100',
        )
        break
      case 'warning':
        variants.push(
          ...outlineBase,
          'text-yellow-600',
          'border-yellow-600',
          'hover:bg-yellow-50',
          'focus:ring-yellow-500',
          'focus-visible:ring-yellow-500',
          'active:bg-yellow-100',
        )
        break
      case 'error':
        variants.push(
          ...outlineBase,
          'text-red-600',
          'border-red-600',
          'hover:bg-red-50',
          'focus:ring-red-500',
          'focus-visible:ring-red-500',
          'active:bg-red-100',
        )
        break
      case 'info':
        variants.push(
          ...outlineBase,
          'text-indigo-600',
          'border-indigo-600',
          'hover:bg-indigo-50',
          'focus:ring-indigo-500',
          'focus-visible:ring-indigo-500',
          'active:bg-indigo-100',
        )
        break
      case 'secondary':
        variants.push(
          ...outlineBase,
          'text-gray-600',
          'border-gray-600',
          'hover:bg-gray-50',
          'focus:ring-gray-400',
          'focus-visible:ring-gray-400',
          'active:bg-gray-100',
        )
        break
      case 'primary':
      default:
        variants.push(
          ...outlineBase,
          'text-blue-600',
          'border-blue-600',
          'hover:bg-blue-50',
          'focus:ring-blue-500',
          'focus-visible:ring-blue-500',
          'active:bg-blue-100',
        )
        break
    }
  }
  // Solid variants (default)
  else {
    switch (props.variant) {
      case 'success':
        variants.push(
          props.tonal ? 'bg-green-600/50' : 'bg-green-600',
          'text-white',
          props.tonal ? 'hover:bg-green-700/50' : 'hover:bg-green-700',
          'focus:ring-green-500',
          'focus-visible:ring-green-500',
          props.tonal ? 'active:bg-green-800/50' : 'active:bg-green-800',
        )
        break
      case 'warning':
        variants.push(
          props.tonal ? 'bg-yellow-600/50' : 'bg-yellow-600',
          'text-white',
          props.tonal ? 'hover:bg-yellow-700/50' : 'hover:bg-yellow-700',
          'focus:ring-yellow-500',
          'focus-visible:ring-yellow-500',
          props.tonal ? 'active:bg-yellow-800/50' : 'active:bg-yellow-800',
        )
        break
      case 'error':
        variants.push(
          props.tonal ? 'bg-red-600/50' : 'bg-red-600',
          'text-white',
          props.tonal ? 'hover:bg-red-700/50' : 'hover:bg-red-700',
          'focus:ring-red-500',
          'focus-visible:ring-red-500',
          props.tonal ? 'active:bg-red-800/50' : 'active:bg-red-800',
        )
        break
      case 'info':
        variants.push(
          props.tonal ? 'bg-indigo-600/50' : 'bg-indigo-600',
          'text-white',
          props.tonal ? 'hover:bg-indigo-700/50' : 'hover:bg-indigo-700',
          'focus:ring-indigo-500',
          'focus-visible:ring-indigo-500',
          props.tonal ? 'active:bg-indigo-800/50' : 'active:bg-indigo-800',
        )
        break
      case 'secondary':
        variants.push(
          props.tonal ? 'bg-gray-200/50' : 'bg-gray-200',
          'text-gray-800',
          props.tonal ? 'hover:bg-gray-300/50' : 'hover:bg-gray-300',
          'focus:ring-gray-400',
          'focus-visible:ring-gray-400',
          props.tonal ? 'active:bg-gray-400/50' : 'active:bg-gray-400',
        )
        break
      case 'primary':
      default:
        variants.push(
          props.tonal ? 'bg-blue-600/50' : 'bg-blue-600',
          'text-white',
          props.tonal ? 'hover:bg-blue-700/50' : 'hover:bg-blue-700',
          'focus:ring-blue-500',
          'focus-visible:ring-blue-500',
          props.tonal ? 'active:bg-blue-800/50' : 'active:bg-blue-800',
        )
        break
    }
  }

  // Add state classes (disabled, fullWidth, loading)
  variants.push(...getStateClasses())

  if (props.class) {
    return [...base, ...variants, props.class]
  }

  return [...base, ...variants]
})

// Handle click event
const handleClick = (event: MouseEvent): void => {
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
      <!-- Prefix slot (only shown when used) -->
      <slot v-if="!!slots.prefix" name="prefix" />

      <!-- Loading spinner -->
      <span
        v-if="loading"
        :class="[
          sizeClasses.icon,
          'inline-block animate-spin rounded-full border-2 border-current border-t-transparent',
        ]"
        aria-hidden="true"
      ></span>

      <!-- Default slot (main content) -->
      <slot />

      <!-- Suffix slot (only shown when used) -->
      <slot v-if="!!slots.suffix" name="suffix" />
    </span>
  </button>
</template>

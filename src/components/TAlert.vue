<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, ref } from 'vue'

// Alert variant types
type AlertVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
type AlertSize = 'sm' | 'md' | 'lg'
type AlertElevation = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = defineProps({
  /**
   * The variant/style of the alert
   */
  variant: {
    type: String as PropType<AlertVariant>,
    default: 'primary',
    validator: (variant: string) =>
      ['primary', 'secondary', 'success', 'warning', 'error', 'info'].includes(variant),
  },

  /**
   * The title of the alert
   */
  title: {
    type: String,
    default: '',
  },

  /**
   * Size of the alert
   */
  size: {
    type: String as PropType<AlertSize>,
    default: 'md',
    validator: (size: string) => ['sm', 'md', 'lg'].includes(size),
  },

  /**
   * Whether the alert has rounded corners
   */
  rounded: {
    type: Boolean,
    default: true,
  },

  /**
   * Whether the alert is dismissible
   */
  dismissible: {
    type: Boolean,
    default: false,
  },

  /**
   * Whether the alert has an icon
   * Default is true for all variants except 'secondary'
   */
  hasIcon: {
    type: Boolean,
    default: undefined,
  },

  /**
   * Additional classes to apply to the alert
   */
  class: {
    type: String,
    default: '',
  },

  /**
   * ARIA live setting for screen readers
   * - 'assertive': Announce immediately (for important alerts like errors)
   * - 'polite': Announce when user is idle (for non-critical alerts)
   * - 'off': Don't announce (if alert is presentational or redundant)
   */
  live: {
    type: String as PropType<'assertive' | 'polite' | 'off'>,
    default: 'polite',
    validator: (value: string) => ['assertive', 'polite', 'off'].includes(value),
  },

  /**
   * Accessible label for the alert (used when title is not provided)
   */
  ariaLabel: {
    type: String,
    default: '',
  },

  /**
   * ID to use for ARIA description
   */
  id: {
    type: String,
    default: '',
  },

  /**
   * Elevation level for the alert
   * Controls shadow depth, from none to xl
   */
  elevation: {
    type: String as PropType<AlertElevation>,
    default: 'none',
    validator: (elevation: string) => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(elevation),
  },
})

// Emit events for the alert
const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

// Generate unique ID for the component if not provided
const uniqueId = ref(`alert-${Math.random().toString(36).substring(2, 11)}`)
const alertId = computed(() => props.id || uniqueId.value)
const contentId = computed(() => `${alertId.value}-content`)
const titleId = computed(() => `${alertId.value}-title`)

// Track visibility of the alert
const isVisible = ref(true)

// Handle dismiss
const handleDismiss = () => {
  isVisible.value = false
  emit('dismiss')
}

// Determine if icon should be shown
const showIcon = computed(() => {
  if (props.hasIcon !== undefined) return props.hasIcon
  return props.variant !== 'secondary'
})

// Compute role based on variant
const alertRole = computed(() => {
  // Use 'alert' for error and warning variants, 'status' for others
  return ['error', 'warning'].includes(props.variant) ? 'alert' : 'status'
})

// Compute padding and size classes
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return {
        container: 'p-3',
        title: 'text-sm font-medium',
        content: 'text-sm',
        icon: 'h-5 w-5',
        dismissButton: 'h-4 w-4',
      }
    case 'lg':
      return {
        container: 'p-5',
        title: 'text-lg font-medium',
        content: 'text-base',
        icon: 'h-7 w-7',
        dismissButton: 'h-5 w-5',
      }
    case 'md':
    default:
      return {
        container: 'p-4',
        title: 'text-base font-medium',
        content: 'text-sm',
        icon: 'h-6 w-6',
        dismissButton: 'h-4.5 w-4.5',
      }
  }
})

// Compute elevation classes
const elevationClasses = computed(() => {
  switch (props.elevation) {
    case 'xs':
      return 'shadow-sm'
    case 'sm':
      return 'shadow'
    case 'md':
      return 'shadow-md'
    case 'lg':
      return 'shadow-lg'
    case 'xl':
      return 'shadow-xl'
    case 'none':
    default:
      return ''
  }
})

// Compute colors based on variant
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        title: 'text-blue-800',
        content: 'text-blue-700',
        icon: 'text-blue-500',
        iconName: 'InformationCircleIcon',
      }
    case 'secondary':
      return {
        bg: 'bg-gray-50',
        border: 'border-gray-300',
        title: 'text-gray-800',
        content: 'text-gray-700',
        icon: 'text-gray-500',
        iconName: 'InformationCircleIcon',
      }
    case 'success':
      return {
        bg: 'bg-green-50',
        border: 'border-green-300',
        title: 'text-green-800',
        content: 'text-green-700',
        icon: 'text-green-500',
        iconName: 'CheckCircleIcon',
      }
    case 'warning':
      return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-300',
        title: 'text-yellow-800',
        content: 'text-yellow-700',
        icon: 'text-yellow-500',
        iconName: 'ExclamationIcon',
      }
    case 'error':
      return {
        bg: 'bg-red-50',
        border: 'border-red-300',
        title: 'text-red-800',
        content: 'text-red-700',
        icon: 'text-red-500',
        iconName: 'XCircleIcon',
      }
    case 'info':
      return {
        bg: 'bg-indigo-50',
        border: 'border-indigo-300',
        title: 'text-indigo-800',
        content: 'text-indigo-700',
        icon: 'text-indigo-500',
        iconName: 'InformationCircleIcon',
      }
    default:
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        title: 'text-blue-800',
        content: 'text-blue-700',
        icon: 'text-blue-500',
        iconName: 'InformationCircleIcon',
      }
  }
})

// Compute rounded classes
const roundedClass = computed(() => {
  return props.rounded ? 'rounded-lg' : 'rounded-none'
})

// Determine icons' aria labels based on variant
const iconAriaLabel = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'Success:'
    case 'warning':
      return 'Warning:'
    case 'error':
      return 'Error:'
    case 'info':
      return 'Information:'
    default:
      return ''
  }
})
</script>

<template>
  <div
    v-if="isVisible"
    :id="alertId"
    :role="alertRole"
    :aria-live="live"
    :aria-labelledby="title ? titleId : undefined"
    :aria-label="!title && ariaLabel ? ariaLabel : undefined"
    :aria-describedby="contentId"
    class="flex w-full border"
    :class="[
      roundedClass,
      variantClasses.bg,
      variantClasses.border,
      sizeClasses.container,
      elevationClasses,
      props.class,
    ]"
  >
    <!-- Left Icon Section (with improved vertical alignment) -->
    <div
      v-if="showIcon"
      class="mr-3 flex flex-shrink-0 items-center"
      :class="[
        variantClasses.icon,
        { 'self-start pt-0.5': title }, // Align to top with slight padding when there's a title
      ]"
      aria-hidden="true"
    >
      <!-- Information Icon (Primary/Info) -->
      <svg
        v-if="variantClasses.iconName === 'InformationCircleIcon'"
        :class="sizeClasses.icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
      </svg>

      <!-- Success Icon -->
      <svg
        v-else-if="variantClasses.iconName === 'CheckCircleIcon'"
        :class="sizeClasses.icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clip-rule="evenodd"
        />
      </svg>

      <!-- Warning Icon -->
      <svg
        v-else-if="variantClasses.iconName === 'ExclamationIcon'"
        :class="sizeClasses.icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
      </svg>

      <!-- Error Icon -->
      <svg
        v-else-if="variantClasses.iconName === 'XCircleIcon'"
        :class="sizeClasses.icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Content Section (with improved vertical alignment) -->
    <div class="flex flex-1 flex-col justify-center">
      <!-- Title (if provided) -->
      <h3 v-if="title" :id="titleId" :class="[sizeClasses.title, variantClasses.title]">
        <span v-if="iconAriaLabel" class="sr-only">{{ iconAriaLabel }}</span>
        {{ title }}
      </h3>

      <!-- Main content -->
      <div :id="contentId" :class="[sizeClasses.content, variantClasses.content]">
        <slot></slot>
      </div>

      <!-- Footer (if provided) -->
      <div v-if="$slots.footer" class="mt-2" :class="[sizeClasses.content, variantClasses.content]">
        <slot name="footer"></slot>
      </div>
    </div>

    <!-- Dismiss Button (if dismissible) -->
    <div v-if="dismissible" class="ml-3 flex flex-shrink-0 items-center">
      <button
        type="button"
        class="inline-flex focus:ring-2 focus:ring-offset-2 focus:outline-none"
        :class="[
          variantClasses.icon,
          `focus:ring-${props.variant === 'secondary' ? 'gray' : props.variant}-500`,
        ]"
        @click="handleDismiss"
        aria-label="Dismiss alert"
      >
        <svg
          :class="sizeClasses.dismissButton"
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
      </button>
    </div>
  </div>
</template>

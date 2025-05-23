<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed, useSlots, watch } from 'vue'
import type { InputType, InputVariant, InputSize } from './types'

const props = defineProps({
  /**
   * Input type attribute
   */
  type: {
    type: String as PropType<InputType>,
    default: 'text',
    validator: (type: string) =>
      ['text', 'email', 'date', 'number', 'password', 'search', 'tel', 'time'].includes(type),
  },

  /**
   * The variant/style of the input
   */
  variant: {
    type: String as PropType<InputVariant>,
    default: 'primary',
    validator: (variant: string) =>
      ['primary', 'secondary', 'success', 'warning', 'error', 'info'].includes(variant),
  },

  /**
   * Size of the input
   */
  size: {
    type: String as PropType<InputSize>,
    default: 'md',
    validator: (size: string) => ['sm', 'md', 'lg'].includes(size),
  },

  /**
   * Input model value / v-model
   */
  modelValue: {
    type: [String, Number, Date],
    default: '',
  },

  /**
   * Placeholder text
   */
  placeholder: {
    type: String,
    default: '',
  },

  /**
   * Label text for the input
   */
  label: {
    type: String,
    default: '',
  },

  /**
   * Whether the label should be displayed
   */
  showLabel: {
    type: Boolean,
    default: true,
  },

  /**
   * Help text to display below the input
   */
  helpText: {
    type: String,
    default: '',
  },

  /**
   * Error message to display below the input
   */
  errorMessage: {
    type: String,
    default: '',
  },

  /**
   * Whether the input is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },

  /**
   * Whether the input is readonly
   */
  readonly: {
    type: Boolean,
    default: false,
  },

  /**
   * Whether the input is required
   */
  required: {
    type: Boolean,
    default: false,
  },

  /**
   * Accessible label for the input (used when label is not provided)
   */
  ariaLabel: {
    type: String,
    default: '',
  },

  /**
   * ID to use for the input and label
   */
  id: {
    type: String,
    default: '',
  },

  /**
   * Name attribute for the input
   */
  name: {
    type: String,
    default: '',
  },

  /**
   * Minimum value for number inputs
   */
  min: {
    type: [Number, String],
    default: undefined,
  },

  /**
   * Maximum value for number inputs
   */
  max: {
    type: [Number, String],
    default: undefined,
  },

  /**
   * Step value for number inputs
   */
  step: {
    type: [Number, String],
    default: undefined,
  },

  /**
   * Maximum length for text inputs
   */
  maxlength: {
    type: Number,
    default: undefined,
  },

  /**
   * Pattern for validation
   */
  pattern: {
    type: String,
    default: undefined,
  },

  /**
   * Autocomplete attribute
   */
  autocomplete: {
    type: String,
    default: undefined,
  },

  /**
   * Whether the input should have focus when mounted
   */
  autofocus: {
    type: Boolean,
    default: false,
  },

  /**
   * Whether the input is full width
   */
  fullWidth: {
    type: Boolean,
    default: true,
  },

  /**
   * Additional classes to apply to the input container
   */
  classes: {
    type: String,
    default: '',
  },
})

// Emit events
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | Date): void
  (e: 'input', event: Event): void
  (e: 'change', event: Event): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

// Generate unique ID for the component if not provided
const uniqueId = ref(`input-${Math.random().toString(36).substring(2, 11)}`)
const inputId = computed(() => props.id || uniqueId.value)
const helpId = computed(() => `${inputId.value}-help`)
const errorId = computed(() => `${inputId.value}-error`)
const descriptionId = computed(() => {
  const ids = []
  if (props.helpText) ids.push(helpId.value)
  if (props.errorMessage) ids.push(errorId.value)
  return ids.length ? ids.join(' ') : undefined
})

// Check if slots are being used
const slots = useSlots()
const hasPrefixSlot = computed(() => !!slots.prefix)
const hasSuffixSlot = computed(() => !!slots.suffix)

// Input ref for focusing
const inputElement = ref(null)

// Track focus state
const isFocused = ref(false)

// Focus the input if autofocus is true
watch(
  () => props.autofocus,
  (value) => {
    if (value && inputElement.value) {
      inputElement.value.focus()
    }
  },
  { immediate: true },
)

// Size classes
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return {
        input: 'text-xs',
        wrapper: '',
        label: 'text-xs',
        helpText: 'text-xs',
        icon: 'h-4 w-4',
      }
    case 'lg':
      return {
        input: 'text-base',
        wrapper: '',
        label: 'text-base',
        helpText: 'text-sm',
        icon: 'h-5 w-5',
      }
    case 'md':
    default:
      return {
        input: 'text-sm',
        wrapper: '',
        label: 'text-sm',
        helpText: 'text-xs',
        icon: 'h-4.5 w-4.5',
      }
  }
})

// Variant classes
const variantClasses = computed(() => {
  // Default state (includes focused state)
  const baseClasses = [
    'border',
    'rounded-md',
    'shadow-sm',
    'transition-colors',
    'focus-within:outline-none',
    'focus-within:ring-2',
  ]

  // No need to handle prefix/suffix padding here anymore as it's managed by the wrapper

  // Handle states based on variant
  switch (props.variant) {
    case 'success':
      return {
        wrapper: [
          ...baseClasses,
          'border-green-300',
          'focus-within:border-green-500',
          'focus-within:ring-green-200',
        ],
        label: 'text-green-800',
        helpText: 'text-green-600',
        icon: 'text-green-500',
      }
    case 'warning':
      return {
        wrapper: [
          ...baseClasses,
          'border-yellow-300',
          'focus-within:border-yellow-500',
          'focus-within:ring-yellow-200',
        ],
        label: 'text-yellow-800',
        helpText: 'text-yellow-600',
        icon: 'text-yellow-500',
      }
    case 'error':
      return {
        wrapper: [
          ...baseClasses,
          'border-red-300',
          'focus-within:border-red-500',
          'focus-within:ring-red-200',
        ],
        label: 'text-red-800',
        helpText: 'text-red-600',
        icon: 'text-red-500',
      }
    case 'info':
      return {
        wrapper: [
          ...baseClasses,
          'border-indigo-300',
          'focus-within:border-indigo-500',
          'focus-within:ring-indigo-200',
        ],
        label: 'text-indigo-800',
        helpText: 'text-indigo-600',
        icon: 'text-indigo-500',
      }
    case 'secondary':
      return {
        wrapper: [
          ...baseClasses,
          'border-gray-300',
          'focus-within:border-gray-500',
          'focus-within:ring-gray-200',
        ],
        label: 'text-gray-800',
        helpText: 'text-gray-600',
        icon: 'text-gray-500',
      }
    case 'primary':
    default:
      return {
        wrapper: [
          ...baseClasses,
          'border-gray-300',
          'focus-within:border-blue-500',
          'focus-within:ring-blue-200',
        ],
        label: 'text-gray-700',
        helpText: 'text-gray-600',
        icon: 'text-blue-500',
      }
  }
})

// Additional state classes
const stateClasses = computed(() => {
  const classes = []

  if (props.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed', 'bg-gray-100')
  } else {
    classes.push('bg-white')
  }

  if (props.readonly) {
    classes.push('bg-gray-50')
  }

  if (props.errorMessage) {
    classes.push('border-red-300', 'focus-within:border-red-500', 'focus-within:ring-red-200')
  }

  if (props.fullWidth) {
    classes.push('w-full')
  }

  return classes
})

// Combined wrapper classes
const wrapperClasses = computed(() => [
  ...variantClasses.value.wrapper,
  ...stateClasses.value,
  sizeClasses.value.wrapper,
])

// Input specific classes
const inputClasses = computed(() => [
  'w-full',
  'border-none',
  'focus:ring-0',
  'focus:outline-none',
  'bg-transparent',
  'p-0', // Explicitly set all padding to 0
  sizeClasses.value.input,
])

// Format the model value for the input element
const formattedValue = computed(() => {
  if (props.type === 'date' && props.modelValue instanceof Date) {
    // Format Date as YYYY-MM-DD for date input
    return props.modelValue.toISOString().split('T')[0]
  }
  return props.modelValue
})

// Event handlers
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement

  // Handle different types appropriately
  if (props.type === 'date' && target.value) {
    // For date inputs, convert the string to a Date object
    emit('update:modelValue', new Date(target.value))
  } else {
    emit('update:modelValue', target.value)
  }

  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}
</script>

<template>
  <div :class="['relative', { 'w-full': fullWidth }, classes]">
    <label
      v-if="showLabel && (label || $slots.label)"
      :for="inputId"
      :class="['mb-1 block', variantClasses.label, sizeClasses.label]"
    >
      <slot name="label">
        {{ label }}
        <span v-if="required" class="ml-0.5 text-red-500">*</span>
      </slot>
    </label>

    <div class="relative">
      <div :class="wrapperClasses" class="relative flex items-center">
        <div v-if="hasPrefixSlot" class="pointer-events-none absolute left-3 flex items-center">
          <slot name="prefix" :focused="isFocused" :size="props.size" :variant="props.variant" />
        </div>

        <input
          ref="inputElement"
          :id="inputId"
          :type="type"
          :value="formattedValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :name="name"
          :min="min"
          :max="max"
          :step="step"
          :maxlength="maxlength"
          :pattern="pattern"
          :autocomplete="autocomplete"
          :aria-label="ariaLabel || label"
          :aria-invalid="!!errorMessage"
          :aria-describedby="descriptionId"
          :aria-required="required"
          :class="[
            inputClasses,
            // Add appropriate height based on size
            props.size === 'sm' ? 'py-2' : props.size === 'lg' ? 'py-3.5' : 'py-2.5',
            // Only add left padding if there's a prefix slot
            hasPrefixSlot ? 'pl-8' : 'pl-3',
            // Only add right padding if there's a suffix slot
            hasSuffixSlot ? 'pr-8' : 'pr-3',
          ]"
          v-bind="$attrs"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <div v-if="hasSuffixSlot" class="pointer-events-none absolute right-3 flex items-center">
          <slot name="suffix" :focused="isFocused" :size="props.size" :variant="props.variant" />
        </div>
      </div>
    </div>

    <p
      v-if="helpText && !errorMessage"
      :id="helpId"
      :class="['mt-1', variantClasses.helpText, sizeClasses.helpText]"
    >
      {{ helpText }}
    </p>

    <p v-if="errorMessage" :id="errorId" class="mt-1 text-red-600" :class="sizeClasses.helpText">
      {{ errorMessage }}
    </p>
  </div>
</template>

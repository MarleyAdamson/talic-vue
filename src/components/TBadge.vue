<script lang="ts" setup>
import type { PropType, Slots, ComputedRef } from 'vue'
import { computed, useSlots, inject, ref, onMounted } from 'vue'

// Badge variant types - same as TButton
type BadgeVariant = 'primary' | 'success' | 'secondary' | 'warning' | 'error' | 'info' | 'ghost'
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type BadgeRounding = 'full' | 'md' | 'lg' | 'sm' | 'none' | 'default'
type Orientation = 'horizontal' | 'vertical'

// Size classes interface
interface SizeConfig {
  badge: string[]
  icon: string
  closeIcon: string
}

// Badge group context interface
interface BadgeGroupContext {
  isBadgeGroup: { value: boolean }
  isFirstBadge: { value: (el: Element) => boolean }
  isLastBadge: { value: (el: Element) => boolean }
  rounded: { value: boolean }
  orientation: { value: Orientation }
  hasGap: { value: boolean }
  registerBadge: () => string
  handleBadgeDismiss: (id: string) => void
  visibleBadges: { [key: string]: boolean }
  showBadge: (id: string) => void
}

const props = defineProps({
  variant: {
    type: String as PropType<BadgeVariant>,
    default: 'primary',
    validator: (variant: string) =>
      ['primary', 'success', 'secondary', 'warning', 'error', 'info', 'ghost'].includes(variant),
  },
  /**
   * Whether to use the outline style for the badge
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
   * Size of the badge
   */
  size: {
    type: String as PropType<BadgeSize>,
    default: 'md',
    validator: (size: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(size),
  },
  /**
   * Controls the rounding of the badge corners
   * - 'full': Fully rounded (pill-shaped)
   * - 'lg': Large border radius
   * - 'md': Medium border radius
   * - 'sm': Small border radius
   * - 'none': No border radius
   * - 'default': Uses size-appropriate rounding (default)
   */
  rounding: {
    type: String as PropType<BadgeRounding>,
    default: 'default',
    validator: (rounding: string) =>
      ['full', 'md', 'lg', 'sm', 'none', 'default'].includes(rounding),
  },
  /**
   * Accessible label for the badge
   * Required for accessibility
   */
  ariaLabel: {
    type: String,
    default: '',
  },
  /**
   * Additional classes to apply to the badge
   */
  class: {
    type: String,
    default: '',
  },
  /**
   * Whether the badge is dismissible (shows an X icon to remove)
   */
  dismissible: {
    type: Boolean,
    default: false,
  },
})

// Define emits with typed event
const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

// Get slots to check if prefix/suffix are provided
const slots: Slots = useSlots()

// Badge element reference
const badgeElement = ref<HTMLElement | null>(null)

// Inject badge group context if available
const badgeGroup = inject<BadgeGroupContext>('badgeGroup', {
  isBadgeGroup: { value: false },
  isFirstBadge: { value: () => false },
  isLastBadge: { value: () => false },
  rounded: { value: true },
  orientation: { value: 'horizontal' },
  hasGap: { value: false },
  registerBadge: () => '',
  handleBadgeDismiss: () => {},
  visibleBadges: {},
  showBadge: () => {},
})

// Badge ID for tracking in the group
const badgeId = ref('')

// Reactive flags to track badge position
const isFirst = ref(false)
const isLast = ref(false)
const isGrouped = computed(() => badgeGroup.isBadgeGroup.value)
const isRounded = computed(() => badgeGroup.rounded.value)
const orientation = computed(() => badgeGroup.orientation.value)

// Check if badge should be visible (when in a group)
const isVisible = computed(() => {
  if (!isGrouped.value || !badgeId.value) {
    return true
  }
  return badgeGroup.visibleBadges[badgeId.value] !== false
})

// Register with badge group on mount
onMounted(() => {
  if (isGrouped.value) {
    badgeId.value = badgeGroup.registerBadge()

    // Update badge position flags
    if (badgeElement.value) {
      isFirst.value = badgeGroup.isFirstBadge.value(badgeElement.value)
      isLast.value = badgeGroup.isLastBadge.value(badgeElement.value)
    }
  }
})

// Get the rounding class based on the rounding prop and size
const getRoundingClass = computed((): string => {
  if (props.rounding === 'full') {
    return 'rounded-full'
  } else if (props.rounding === 'lg') {
    return 'rounded-lg'
  } else if (props.rounding === 'md') {
    return 'rounded-md'
  } else if (props.rounding === 'sm') {
    return 'rounded-sm'
  } else if (props.rounding === 'none') {
    return ''
  } else {
    // Default rounding based on size (matching TButton pattern)
    switch (props.size) {
      case 'lg':
      case 'xl':
        return 'rounded-md'
      case 'xs':
      case 'sm':
      case 'md':
      default:
        return 'rounded'
    }
  }
})

// Get size-specific classes
const sizeClasses: ComputedRef<SizeConfig> = computed((): SizeConfig => {
  // Base classes without rounding - rounding is now handled separately
  switch (props.size) {
    case 'xs':
      return {
        badge: ['px-1.5', 'py-0.5', 'text-xs'],
        icon: 'h-3 w-3',
        closeIcon: 'h-2.5 w-2.5',
      }
    case 'sm':
      return {
        badge: ['px-2', 'py-0.5', 'text-xs'],
        icon: 'h-3.5 w-3.5',
        closeIcon: 'h-3 w-3',
      }
    case 'lg':
      return {
        badge: ['px-3', 'py-1', 'text-base'],
        icon: 'h-5 w-5',
        closeIcon: 'h-4 w-4',
      }
    case 'xl':
      return {
        badge: ['px-3.5', 'py-1.5', 'text-lg'],
        icon: 'h-6 w-6',
        closeIcon: 'h-5 w-5',
      }
    case 'md':
    default:
      return {
        badge: ['px-2.5', 'py-0.5', 'text-sm'],
        icon: 'h-4 w-4',
        closeIcon: 'h-3.5 w-3.5',
      }
  }
})

// Common base classes for all badges
const baseClasses: string[] = ['inline-flex', 'items-center', 'font-medium', 'transition-all']

// Badge group-specific classes
const badgeGroupClasses = computed(() => {
  if (!isGrouped.value) {
    return []
  }

  // Default to maintaining individual badge rounding
  const classes: string[] = []

  // If we're in a badge group with rounded enabled, adjust corners
  if (isRounded.value) {
    if (orientation.value === 'vertical') {
      // For vertical orientation
      if (isFirst.value) {
        classes.push('rounded-t')
      }
      if (isLast.value) {
        classes.push('rounded-b')
      }
    } else {
      // For horizontal orientation (default)
      if (isFirst.value) {
        classes.push('rounded-l')
      }
      if (isLast.value) {
        classes.push('rounded-r')
      }
    }
  }

  return classes
})

// Badge variant classes
const badgeClasses: ComputedRef<string[]> = computed<string[]>((): string[] => {
  const base: string[] = [...baseClasses]
  const variants: string[] = []

  // Add size classes
  base.push(...sizeClasses.value.badge)

  // Add rounding class
  if (getRoundingClass.value) {
    base.push(getRoundingClass.value)
  }

  // Ghost variant (transparent)
  if (props.variant === 'ghost') {
    variants.push('bg-transparent', 'text-gray-700', 'hover:bg-gray-100')
  }
  // Outline variants
  else if (props.outline) {
    // Common outline styles
    const outlineBase: string[] = ['bg-transparent', 'border']

    // Variant-specific outline styles
    switch (props.variant) {
      case 'success':
        variants.push(...outlineBase, 'text-green-600', 'border-green-600')
        break
      case 'warning':
        variants.push(...outlineBase, 'text-yellow-600', 'border-yellow-600')
        break
      case 'error':
        variants.push(...outlineBase, 'text-red-600', 'border-red-600')
        break
      case 'info':
        variants.push(...outlineBase, 'text-indigo-600', 'border-indigo-600')
        break
      case 'secondary':
        variants.push(...outlineBase, 'text-gray-600', 'border-gray-600')
        break
      case 'primary':
      default:
        variants.push(...outlineBase, 'text-blue-600', 'border-blue-600')
        break
    }
  }
  // Solid variants (default)
  else {
    switch (props.variant) {
      case 'success':
        variants.push(
          props.tonal ? 'bg-green-100' : 'bg-green-500',
          props.tonal ? 'text-green-800' : 'text-white',
        )
        break
      case 'warning':
        variants.push(
          props.tonal ? 'bg-yellow-100' : 'bg-yellow-500',
          props.tonal ? 'text-yellow-800' : 'text-white',
        )
        break
      case 'error':
        variants.push(
          props.tonal ? 'bg-red-100' : 'bg-red-500',
          props.tonal ? 'text-red-800' : 'text-white',
        )
        break
      case 'info':
        variants.push(
          props.tonal ? 'bg-indigo-100' : 'bg-indigo-500',
          props.tonal ? 'text-indigo-800' : 'text-white',
        )
        break
      case 'secondary':
        variants.push(
          props.tonal ? 'bg-gray-100' : 'bg-gray-500',
          props.tonal ? 'text-gray-800' : 'text-white',
        )
        break
      case 'primary':
      default:
        variants.push(
          props.tonal ? 'bg-blue-100' : 'bg-blue-500',
          props.tonal ? 'text-blue-800' : 'text-white',
        )
        break
    }
  }

  if (props.class) {
    return [...base, ...variants, ...badgeGroupClasses.value, props.class]
  }

  return [...base, ...variants, ...badgeGroupClasses.value]
})

// Handle dismiss event
const handleDismiss = (): void => {
  // Notify parent components
  emit('dismiss')

  // If in a badge group, also notify the group
  if (isGrouped.value && badgeId.value) {
    badgeGroup.handleBadgeDismiss(badgeId.value)
  }
}
</script>

<template>
  <span v-if="isVisible" ref="badgeElement" :class="badgeClasses" :aria-label="ariaLabel">
    <span class="flex items-center gap-1.5">
      <!-- Prefix slot (only shown when used) -->
      <slot v-if="!!slots.prefix" name="prefix" />

      <!-- Default slot (main content) -->
      <slot />

      <!-- Dismiss icon (only shown when dismissible) -->
      <button
        v-if="dismissible"
        @click="handleDismiss"
        type="button"
        class="ml-0.5 inline-flex items-center justify-center rounded-full p-0.5 transition-colors hover:bg-black/10"
        aria-label="Dismiss"
      >
        <svg
          :class="sizeClasses.closeIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </button>

      <!-- Suffix slot (only shown when used) -->
      <slot v-if="!!slots.suffix" name="suffix" />
    </span>
  </span>
</template>

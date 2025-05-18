<script lang="ts" setup>
import type { PropType } from 'vue'
import { provide, ref, computed, reactive } from 'vue'

// Types
type Orientation = 'horizontal' | 'vertical'
type GapSize = '0' | '1' | '2' | '3' | '4'

const props = defineProps({
  /**
   * Orientation of the badge group
   */
  orientation: {
    type: String as PropType<Orientation>,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value),
  },
  /**
   * Whether to apply special styling to the first and last badges
   */
  rounded: {
    type: Boolean,
    default: true,
  },
  /**
   * Gap between badges (in Tailwind spacing units)
   * Valid values: 0, 1, 2, 3, 4
   */
  gap: {
    type: String as PropType<GapSize>,
    default: '2',
    validator: (value: string) => ['0', '1', '2', '3', '4'].includes(value),
  },
  /**
   * Additional classes to apply to the badge group
   */
  class: {
    type: String,
    default: '',
  },
})

// Computed classes
const groupClasses = computed(() => {
  const classes = ['inline-flex', 'relative']

  // Orientation
  if (props.orientation === 'horizontal') {
    classes.push('flex-row')
  } else {
    classes.push('flex-col')
  }

  // Gap - use switch for explicit class names to ensure Tailwind purge recognizes them
  switch (props.gap) {
    case '0':
      // No gap class for gap-0
      break
    case '1':
      classes.push('gap-1')
      break
    case '2':
      classes.push('gap-2')
      break
    case '3':
      classes.push('gap-3')
      break
    case '4':
      classes.push('gap-4')
      break
  }

  // Additional classes
  if (props.class) {
    classes.push(props.class)
  }

  return classes.join(' ')
})

// Create reactive values for badge group context
const isBadgeGroup = ref(true)
const badgeOrientation = computed(() => props.orientation)
const isRounded = computed(() => props.rounded)
const hasGap = computed(() => props.gap !== '0') // Only false when gap is '0'

// Functions to determine first/last badges
const isFirstBadge = ref((el: Element) => el === el.parentElement?.firstElementChild)
const isLastBadge = ref((el: Element) => el === el.parentElement?.lastElementChild)

// Badge visibility tracking
interface BadgeVisibilityMap {
  [key: string]: boolean
}

// Store for tracking which badges are visible
const visibleBadges = reactive<BadgeVisibilityMap>({})

// Generate a unique ID for each badge
let nextBadgeId = 0
const getNextBadgeId = () => {
  return `badge-${nextBadgeId++}`
}

// Register a badge with the group and return its ID
const registerBadge = () => {
  const id = getNextBadgeId()
  visibleBadges[id] = true
  return id
}

// Handle a badge being dismissed
const handleBadgeDismiss = (id: string) => {
  if (id in visibleBadges) {
    visibleBadges[id] = false
  }
}

// Explicitly show a badge that was previously dismissed
const showBadge = (id: string) => {
  if (id in visibleBadges) {
    visibleBadges[id] = true
  }
}

// Provide context to child badges
provide('badgeGroup', {
  isBadgeGroup,
  isFirstBadge,
  isLastBadge,
  rounded: isRounded,
  orientation: badgeOrientation,
  hasGap,
  registerBadge,
  handleBadgeDismiss,
  visibleBadges,
  showBadge,
})

// Expose some methods to parent components
defineExpose({
  showAllBadges: () => {
    Object.keys(visibleBadges).forEach((id) => {
      visibleBadges[id] = true
    })
  },
  hideAllBadges: () => {
    Object.keys(visibleBadges).forEach((id) => {
      visibleBadges[id] = false
    })
  },
  getVisibleBadgeCount: () => {
    return Object.values(visibleBadges).filter((visible) => visible).length
  },
  getTotalBadgeCount: () => {
    return Object.keys(visibleBadges).length
  },
  visibleBadges,
})
</script>

<template>
  <div :class="groupClasses" role="group">
    <slot />
  </div>
</template>

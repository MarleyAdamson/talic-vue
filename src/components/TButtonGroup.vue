<script lang="ts" setup>
import type { PropType } from 'vue'
import { provide, ref, computed } from 'vue'

// Types
type Orientation = 'horizontal' | 'vertical'

const props = defineProps({
  /**
   * Orientation of the button group
   */
  orientation: {
    type: String as PropType<Orientation>,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value),
  },
  /**
   * Whether to apply special styling to the first and last buttons
   */
  rounded: {
    type: Boolean,
    default: true,
  },
  /**
   * Gap between buttons
   */
  gap: {
    type: String,
    default: '0',
  },
  /**
   * Additional classes to apply to the button group
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

  // Gap
  if (props.gap !== '0') {
    classes.push(`gap-${props.gap}`)
  }

  // Additional classes
  if (props.class) {
    classes.push(props.class)
  }

  return classes.join(' ')
})

// Create reactive values for button group context
const isButtonGroup = ref(true)
const buttonOrientation = computed(() => props.orientation)
const isRounded = computed(() => props.rounded)
const hasGap = computed(() => props.gap !== '0')

// Functions to determine first/last buttons
const isFirstButton = ref((el: Element) => el === el.parentElement?.firstElementChild)
const isLastButton = ref((el: Element) => el === el.parentElement?.lastElementChild)

// Provide context to child buttons
provide('buttonGroup', {
  isButtonGroup,
  isFirstButton,
  isLastButton,
  rounded: isRounded,
  orientation: buttonOrientation,
  hasGap,
})
</script>

<template>
  <div :class="groupClasses" role="group">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'

// Card elevation levels - matching button size naming
type CardElevation = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'

// Rounded corner options
type RoundedOption = boolean | 'none' | 'sm' | 'md' | 'lg' | 'xl'

const props = defineProps({
  /**
   * Card elevation level
   */
  elevation: {
    type: String as PropType<CardElevation>,
    default: 'md',
    validator: (elevation: string) => ['xs', 'sm', 'md', 'lg', 'xl', 'none'].includes(elevation),
  },
  /**
   * Additional classes to apply to the card
   */
  class: {
    type: String,
    default: '',
  },
  /**
   * Whether to show a gray footer background
   */
  grayFooter: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether to show a gray body background
   */
  grayBody: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether to remove padding on mobile (edge-to-edge)
   */
  edgeToEdgeOnMobile: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the card is a well (inset) style
   */
  well: {
    type: Boolean,
    default: false,
  },
  /**
   * Controls the border radius of the card
   * true = lg (default), false/none = no rounding,
   * or specific size: sm, md, lg, xl
   */
  rounded: {
    type: [Boolean, String] as PropType<RoundedOption>,
    default: true,
    validator: (val: RoundedOption) =>
      typeof val === 'boolean' || ['none', 'sm', 'md', 'lg', 'xl'].includes(val),
  },
})

// Compute the rounded classes based on the rounded prop
const roundedClass = computed(() => {
  if (typeof props.rounded === 'boolean') {
    return props.rounded ? 'rounded-lg' : 'rounded-none'
  }

  if (props.rounded === 'none') return 'rounded-none'
  return `rounded-${props.rounded}`
})
</script>

<template>
  <div
    class="w-full overflow-hidden bg-white"
    :class="[
      // Round corners
      roundedClass,

      // Elevation
      elevation === 'xs' && !well ? 'shadow-sm' : '',
      elevation === 'sm' && !well ? 'shadow' : '',
      elevation === 'md' && !well ? 'shadow-md' : '',
      elevation === 'lg' && !well ? 'shadow-lg' : '',
      elevation === 'xl' && !well ? 'shadow-xl' : '',

      // Border/Well style
      well ? 'border-0 ring-1 ring-gray-200 ring-inset' : 'border border-gray-200',

      // Pass through custom class
      props.class,
    ]"
  >
    <div
      v-if="$slots.header"
      class="border-b border-gray-200 px-6 py-4"
      :class="{ 'sm:rounded-t-lg': edgeToEdgeOnMobile && rounded !== false && rounded !== 'none' }"
    >
      <slot name="header"></slot>
    </div>

    <div :class="[edgeToEdgeOnMobile ? 'px-0 py-0 sm:p-6' : 'p-6', grayBody ? 'bg-gray-50' : '']">
      <slot></slot>
    </div>

    <div
      v-if="$slots.footer"
      :class="[
        'border-t border-gray-200 px-6 py-4',
        grayFooter ? 'bg-gray-50' : '',
        { 'sm:rounded-b-lg': edgeToEdgeOnMobile && rounded !== false && rounded !== 'none' },
      ]"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

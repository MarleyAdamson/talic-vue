<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<string>,
    default: 'primary',
    validation: (variant: string) => ['primary', 'success'].includes(variant),
  },
})

const buttonClasses = computed<string[]>(() => {
  const base: string[] = ['px-3', 'py-1', 'rounded']

  const variants: string[] = []

  switch (props.variant) {
    case 'success':
      variants.push('bg-green-200 text-green-800')
      break
    case 'primary':
    default:
      variants.push('bg-blue-200 text-blue-800')
      break
  }

  return [...base, ...variants]
})
</script>

<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TButton from '~/components/TButton.vue'

const title = ref<string>('Hello World!')
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold text-blue-600">
      {{ title }}
    </h1>

    <TButton>Foo</TButton>
  </main>
</template>

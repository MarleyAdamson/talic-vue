<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Hello World!')
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold text-blue-600">
      {{ title }}
    </h1>
  </main>
</template>

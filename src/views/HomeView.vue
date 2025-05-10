<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Hello World!')
</script>

<template>
  <main>
    <h1>
      {{ title }}
    </h1>
  </main>
</template>

<template>
  <div
    class="flex items-center justify-center"
    :class="fullscreen ? 'fixed inset-0 z-50 bg-primary-dark' : ''"
  >
    <div class="relative w-12 h-12">
      <div
        class="absolute inset-0 rounded-full border-4 border-secondary-dark"
      />
      <div
        class="absolute inset-0 rounded-full border-4 border-highlight border-t-transparent animate-spin"
      />
    </div>
    <p
      v-if="label"
      class="mt-4 text-sm text-secondary-dark absolute translate-y-16"
    >
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fullscreen?: boolean
  label?: string
}>()
</script>

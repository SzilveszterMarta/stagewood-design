<template>
  <button @click="$emit('click')" :aria-label="ariaLabel" class="icon-btn">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  ariaLabel: string;
}>();

defineEmits(['click']);
</script>

<style scoped>
.icon-btn {
  @apply flex items-center justify-center
         rounded-full p-2
         bg-primary-light text-secondary-dark
         hover:opacity-80
         transition-all duration-200
         active:scale-95;
}
</style>

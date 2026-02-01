<template>
    <NuxtLink
        :to="url"
        class="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-primary-dark bg-secondary-dark shadow-2xl transition transform hover:scale-[1.03]"
    >
        {{ label }}
        <span v-if="withArrow" class="ml-2 transition-transform group-hover:translate-x-1">→</span>
    </NuxtLink>
</template>

<script setup>
defineProps({
  url: String,
  label: String,
  withArrow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="group block bg-primary-light rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div class="flex items-start gap-4">
      <!-- Icon -->
      <div
        class="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center text-highlight transition-all duration-300 group-hover:bg-highlight/30 group-hover:shadow-lg"
      >
        <AppIcon :name="icon" />
      </div>

      <!-- Content -->
      <div>
        <h3 class="font-semibold text-secondary-dark">
          {{ title }}
        </h3>
        <p class="text-secondary-light text-lg">
          {{ value }}
        </p>
        <p v-if="hint" class="text-sm text-secondary-dark mt-1">
          {{ hint }}
        </p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  hint?: string;
  icon: 'mail' | 'phone' | 'map' | 'music';
  href: string;
}>();
</script>

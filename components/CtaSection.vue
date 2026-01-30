<template>
  <section class="py-24">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-primary text-secondary-light mb-6">{{ title }}</h2>
      <p class="text-xl text-secondary-dark mb-12 max-w-2xl mx-auto leading-relaxed" v-html="subtitle"></p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center font-bold">
        <NuxtLink
          :to="primaryButton.url"
          class="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-primary-dark bg-secondary-dark/80 shadow-2xl transition transform hover:scale-[1.03]"
        >
          {{ primaryButton.label }}
        </NuxtLink>
        <NuxtLink
          :to="secondaryButton.url"
          class="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-secondary-light bg-primary-light border-2 border-slate-700 shadow-xl transition transform hover:scale-[1.03] hover:border-slate-500"
        >
          {{ secondaryButton.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  primaryButton: Object,
  secondaryButton: Object
})
</script>

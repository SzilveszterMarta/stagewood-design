<template>
  <section class="pt-32 pb-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
    <div class="container mx-auto px-6 text-center relative z-10">
      <h1 class="h-20 text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-dark  to-secondary-light bg-clip-text text-transparent mb-6 font-primary" v-html="title"></h1>
      <p class="text-xl md:text-2xl text-secondary-dark max-w-3xl mx-auto leading-relaxed mb-12" v-html="subtitle"></p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          :to="primaryLink.url"
          class="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-primary-dark bg-secondary-dark/80 shadow-2xl transition transform hover:scale-[1.03]"
        >
          {{ primaryLink.label }}
        </NuxtLink>

        <NuxtLink
          :to="secondaryLink.url"
          class="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-secondary-light bg-primary-light border-2 border-slate-700 shadow-xl transition transform hover:scale-[1.03] hover:border-slate-500"
        >
          {{ secondaryLink.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  primaryLink: Object,
  secondaryLink: Object
})
</script>

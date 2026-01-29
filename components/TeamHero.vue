<template>
  <section class="pt-32 pb-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
    <div class="container mx-auto px-6 text-center relative z-10">
      <h1 class="h-20 text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-white to-slate-200 bg-clip-text text-transparent mb-6" v-html="title"></h1>
      <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12" v-html="subtitle"></p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink :to="primaryLink.url" class="px-8 py-4 bg-emerald-500/90 hover:bg-emerald-600 text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
          {{ primaryLink.label }}
        </NuxtLink>
        <NuxtLink :to="secondaryLink.url" class="px-8 py-4 border-2 border-slate-600/50 hover:border-slate-400 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-slate-700/50">
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

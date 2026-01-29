<template>
  <section class="py-24">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-black text-white mb-6">{{ title }}</h2>
      <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed" v-html="subtitle"></p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <NuxtLink :to="primaryButton.url" class="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-xl font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2">
          {{ primaryButton.label }}
        </NuxtLink>
        <NuxtLink :to="secondaryButton.url" class="px-10 py-5 border-2 border-slate-600/50 hover:border-emerald-400 text-xl font-semibold rounded-2xl transition-all duration-300 hover:bg-emerald-500/10">
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

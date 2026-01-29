<template>
  <div class="text-center p-8 rounded-2xl bg-slate-900/50 backdrop-blur border border-slate-700 hover:border-emerald-500/50 transition-all group hover:scale-105 hover:shadow-2xl">
    <div :class="['w-24 h-24 rounded-2xl mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform', colorClass]"></div>
    <h3 class="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{{ title }}</h3>
    <p class="text-slate-300 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  colorClass: {
    type: String,
    default: 'bg-gradient-to-br from-amber-500 to-orange-600'
  }
})
</script>

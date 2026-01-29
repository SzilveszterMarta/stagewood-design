<template>
  <div class="grid md:grid-cols-3 gap-8">
    <div v-for="stat in stats" :key="stat.label" class="text-center p-8 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50 hover:border-emerald-400/50 hover:shadow-xl transition-all hover:scale-105">
      <div class="text-4xl md:text-5xl font-black text-emerald-400 mb-4">{{ stat.value }}</div>
      <div class="text-slate-300 font-medium text-lg">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: Array
})
</script>

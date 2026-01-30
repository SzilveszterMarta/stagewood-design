<template>
  <div class="text-center p-8 rounded-2xl bg-primary-light/50 backdrop-blur border border-slate-700 hover:border-highlight/50 transition-all group hover:scale-105 hover:shadow-2xl">
    <div :class="['w-24 h-24 rounded-2xl mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform', colorClass]">
      <img :src="imgSrc"  alt="">
    </div>
    <h3 class="text-2xl font-primary text-secondary-light font-bold mb-4 group-hover:text-highlight transition-colors">{{ title }}</h3>
    <p class="text-secondary-dark leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  colorClass: {
    type: String,
    default: 'bg-gradient-to-br from-amber-500 to-orange-600'
  },
  imgSrc: String,
})
</script>

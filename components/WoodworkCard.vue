<template>
  <NuxtLink
    :to="`/woodworks/${slug}`"
    class="group p-6 rounded-2xl bg-primary-light/40 border-2 border-slate-800 hover:border-highlight/40 transition shadow-lg block"
  >
    <div class="aspect-[4/3] rounded-xl overflow-hidden mb-4">
      <img :src="imgSrc" alt="" class="h-full object-cover">
    </div>

    <h2 class="text-xl font-bold text-secondary-light mb-1">
      {{ title }}
    </h2>

    <p class="text-secondary-dark text-sm">
      {{ excerpt }}
    </p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  slug: { type: String, required: true },
  imgSrc: String,
  title: { type: String, required: true },
  excerpt: { type: String, required: true }
})
</script>

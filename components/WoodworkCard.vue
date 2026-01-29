<template>
  <NuxtLink
    :to="`/woodworks/${slug}`"
    class="group p-6 rounded-2xl bg-slate-900 border-2 border-slate-800 hover:border-emerald-500/40 transition shadow-lg block"
  >
    <div class="aspect-[4/3] bg-slate-800 rounded-xl mb-4"></div>

    <h2 class="text-xl font-bold text-white mb-1">
      {{ title }}
    </h2>

    <p class="text-slate-400 text-sm">
      {{ material }}
    </p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  material: { type: String, required: true }
})
</script>

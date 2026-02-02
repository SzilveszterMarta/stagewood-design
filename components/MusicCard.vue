<template>
  <NuxtLink
    :to="`/music/${slug}`"
    class="group p-10 rounded-3xl bg-primary-light/40 border-2 border-slate-800 hover:border-highlight/40 transition shadow-xl block"
  >
    <h2 class="text-3xl font-bold text-secondary-light mb-4">
      {{ title }}
    </h2>

    <p class="text-secondary-dark text-lg mb-6">
      {{ excerpt }}
    </p>

    <span
      class="text-highlight font-bold inline-block transition-transform group-hover:translate-x-1"
    >
      Listen →
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
});
</script>

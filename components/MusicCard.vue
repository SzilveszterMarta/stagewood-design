<template>
  <NuxtLink
    :to="`/music/${slug}`"
    class="group block p-8 rounded-3xl bg-gradient-to-br from-primary-light to-primary-dark border-2 border-slate-800 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
  >
    <!-- Top badge for date -->
    <div
      v-if="publishedAt"
      class="text-xs font-semibold px-2 py-1 rounded-full bg-primary-dark text-secondary-light inline-block mb-4"
    >
      {{ formattedDate }}
    </div>

    <!-- Title -->
    <h2
      class="text-2xl md:text-3xl font-extrabold text-secondary-light mb-3 line-clamp-2 transition-colors group-hover:text-highlight"
    >
      {{ title }}
    </h2>

    <!-- Excerpt -->
    <p
      class="text-secondary-dark text-base md:text-lg mb-6 line-clamp-3 transition-opacity group-hover:opacity-100 opacity-70"
    >
      {{ excerpt }}
    </p>

    <!-- Listen CTA -->
    <div
      class="flex items-center gap-2 text-highlight font-semibold text-sm md:text-base"
    >
      <span>Listen</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 md:w-5 md:h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 12h14m-7-7l7 7-7 7"
        />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  publishedAt: String,
});

// Format date nicely
const formattedDate = computed(() => {
  if (!props.publishedAt) return '';
  const date = new Date(props.publishedAt);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
});
</script>

<template>
  <NuxtLink
    :to="`/woodworks/${slug}`"
    class="group block rounded-2xl overflow-hidden border-2 border-slate-800 bg-primary-dark shadow-lg transition-transform transform"
  >
    <!-- Cover image -->
    <div class="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
      <img
        :src="imgSrc"
        alt=""
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Optional date badge -->
      <div
        v-if="publishedAt"
        class="absolute top-3 right-3 bg-secondary-light text-primary-dark text-xs font-semibold px-2 py-1 rounded backdrop-blur"
      >
        {{ formattedDate }}
      </div>
      <!-- Gradient overlay for excerpt readability -->
      <div
        class="opacity-100 absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="p-4 flex flex-col">
      <h2
        class="text-lg md:text-xl font-bold text-secondary-light mb-2 line-clamp-2 transition-colors group-hover:text-highlight"
      >
        {{ title }}
      </h2>

      <p
        class="text-secondary-dark text-sm line-clamp-3 transition-opacity group-hover:opacity-100 opacity-90"
      >
        {{ excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  slug: { type: String, required: true },
  imgSrc: String,
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  publishedAt: String,
});

// Format date nicely
const formattedDate = computed(() => {
  if (!props.publishedAt) return 'test';
  const date = new Date(props.publishedAt);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
});
</script>

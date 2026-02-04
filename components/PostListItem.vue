<template>
  <li :key="slug">
    <NuxtLink
      :to="to"
      class="group grid grid-cols-1 md:grid-cols-[2fr_3fr_1fr] gap-4 py-4 px-2 hover:bg-primary-light/30 transition"
    >
      <span
        class="font-semibold text-secondary-light group-hover:text-highlight"
      >
        {{ post.title }}
      </span>

      <span class="text-secondary-dark text-sm line-clamp-1">
        {{ post.excerpt }}
      </span>

      <span class="text-secondary-dark text-sm md:text-right">
        {{ formatDate(post.$createdAt) }}
      </span>
    </NuxtLink>
  </li>
</template>
<script setup lang="ts">
interface Post {
  title: string;
  excerpt: string;
  $createdAt: string;
}

defineProps<{
  slug: string;
  post: Post;
  to: string;
}>();

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};
</script>

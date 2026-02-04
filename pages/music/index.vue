<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <header class="max-w-3xl mb-20">
        <GradientTitle label="Musical projects" />
        <p class="text-xl text-secondary-dark leading-relaxed mb-8">
          Songs written slowly, usually at night. Some are loud, some are quiet
          — all of them personal.
        </p>
      </header>

      <div
        v-if="musicPosts && musicPosts.length > 0"
        class="grid md:grid-cols-2 gap-12"
      >
        <MusicCard
          v-for="post in musicPosts"
          :key="post.slug"
          :slug="post.slug"
          :title="post.title"
          :excerpt="post.excerpt"
          :published-at="post.$createdAt"
        />
      </div>
      <div v-else>
        <LoadingSpinner label="Loading..." />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MusicCard from '@/components/MusicCard.vue';
import type { Post } from '~/types/post';
const { getAll: getMusicPosts } = usePost('music');
const musicPosts = ref<Post[]>([]);
onMounted(async () => {
  musicPosts.value = await getMusicPosts();
});
</script>

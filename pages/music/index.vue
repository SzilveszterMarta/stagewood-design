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

      <PostViewControls
        v-if="features.postListViewToggle"
        v-model="viewMode"
        v-model:order="sortOrder"
        storage-key="music"
      />

      <div
        v-if="musicPosts && musicPosts.length > 0 && viewMode === 'grid'"
        class="grid md:grid-cols-2 gap-12"
      >
        <MusicCard
          v-for="post in sortedPosts"
          :key="post.slug"
          :slug="post.slug"
          :title="post.title"
          :excerpt="post.excerpt"
          :published-at="post.$createdAt"
        />
      </div>
      <ul
        v-else-if="musicPosts?.length && viewMode === 'list'"
        class="divide-y divide-primary-light/40 border-t border-primary-light/40"
      >
        <PostListItem
          v-for="post in sortedPosts"
          :key="post.slug"
          :slug="post.slug"
          :post="{ ...post, $createdAt: post.$createdAt ?? '' }"
          :to="`/music/${post.slug}`"
        />
      </ul>
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
const features = useFeatures();

type ViewMode = 'grid' | 'list';
type SortOrder = 'asc' | 'desc';
const viewMode = ref<ViewMode>('grid');
const sortOrder = ref<SortOrder>('desc');

const sortedPosts = computed(() => {
  return [...musicPosts.value].sort((a, b) => {
    const dateA = new Date(a.$createdAt ?? '').getTime();
    const dateB = new Date(b.$createdAt ?? '').getTime();

    return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA;
  });
});

onMounted(async () => {
  musicPosts.value = await getMusicPosts();
});
</script>

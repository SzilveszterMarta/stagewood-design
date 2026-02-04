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
        v-if="$config.featurePostListViewToggle"
        v-model="viewMode"
        storage-key="music"
      />

      <div
        v-if="musicPosts && musicPosts.length > 0 && viewMode === 'grid'"
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
      <ul
        v-else-if="musicPosts?.length && viewMode === 'list'"
        class="divide-y divide-primary-light/40 border-t border-primary-light/40"
      >
        <PostListItem
          v-for="post in musicPosts"
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
const { formatDate } = useDate();
type ViewMode = 'grid' | 'list';
const viewMode = ref<ViewMode>('grid');
const toggleClass = (active: boolean) => [
  'px-3 py-1.5 rounded-lg text-sm font-medium transition',
  active
    ? 'bg-highlight text-primary-dark'
    : 'bg-primary-light/40 text-secondary-dark hover:bg-primary-light/60',
];
onMounted(async () => {
  musicPosts.value = await getMusicPosts();
});
</script>

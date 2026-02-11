<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <header class="max-w-3xl mb-12">
        <GradientTitle label="Woodworking projects" />
        <p class="text-xl text-secondary-dark leading-relaxed">
          Furniture and objects made from solid wood. Built to be used,
          repaired, and kept.
        </p>
      </header>
      <PostViewControls
        v-if="features.postListViewToggle"
        v-model="viewMode"
        storage-key="woodworks"
        v-model:order="sortOrder"
      />

      <!-- GRID VIEW -->
      <div
        v-if="woodworkPosts?.length && viewMode === 'grid'"
        class="grid md:grid-cols-3 gap-12"
      >
        <WoodworkCard
          v-for="work in sortedPosts"
          :key="work.slug"
          :slug="work.slug"
          :title="work.title"
          :excerpt="work.excerpt"
          :material="work.material"
          :imgSrc="work.coverImage?.url"
          :publishedAt="work.$createdAt"
        />
      </div>

      <!-- LIST VIEW -->
      <ul
        v-else-if="woodworkPosts?.length && viewMode === 'list'"
        class="divide-y divide-primary-light/40 border-t border-primary-light/40"
      >
        <PostListItem
          v-for="work in sortedPosts"
          :key="work.slug"
          :slug="work.slug"
          :post="{ ...work, $createdAt: work.$createdAt ?? '' }"
          :to="`/woodworks/${work.slug}`"
        />
      </ul>

      <!-- Loading -->
      <div v-else>
        <LoadingSpinner label="Loading..." />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WoodworkCard from '@/components/WoodworkCard.vue';
import PostViewControls from '~/components/PostViewControls.vue';
type ViewMode = 'grid' | 'list';
const features = useFeatures();
const viewMode = ref<ViewMode>('grid');
const sortOrder = ref<'asc' | 'desc'>('desc');

const { getAll: getWoodworkPosts } = usePost('woodwork');
const woodworkPosts = ref<any[]>([]);

onMounted(async () => {
  woodworkPosts.value = await getWoodworkPosts();
});

const sortedPosts = computed(() => {
  return [...woodworkPosts.value].sort((a, b) => {
    const dateA = new Date(a.$createdAt ?? '').getTime();
    const dateB = new Date(b.$createdAt ?? '').getTime();

    return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA;
  });
});
</script>

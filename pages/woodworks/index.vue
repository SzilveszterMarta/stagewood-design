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
        v-if="$config.featurePostListViewToggle"
        v-model="viewMode"
        storage-key="woodworks"
      />

      <!-- GRID VIEW -->
      <div
        v-if="woodworkPosts?.length && viewMode === 'grid'"
        class="grid md:grid-cols-3 gap-12"
      >
        <WoodworkCard
          v-for="work in woodworkPosts"
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
          v-for="work in woodworkPosts"
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
type SortOrder = 'date-asc' | 'date-desc';

const viewMode = ref<ViewMode>('grid');
const sortOrder = ref<SortOrder>('date-desc');
const { formatDate } = useDate();
const toggleClass = (active: boolean) => [
  'px-3 py-1.5 rounded-lg text-sm font-medium transition',
  active
    ? 'bg-highlight text-primary-dark'
    : 'bg-primary-light/40 text-secondary-dark hover:bg-primary-light/60',
];

const { getAll: getWoodworkPosts } = usePost('woodwork');
const woodworkPosts = ref<any[]>([]);

onMounted(async () => {
  woodworkPosts.value = await getWoodworkPosts();
});
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <header class="max-w-3xl mb-20">
        <GradientTitle label="Woodworking projects" />
        <p class="text-xl text-secondary-dark leading-relaxed mb-8">
          Furniture and objects made from solid wood. Built to be used,
          repaired, and kept.
        </p>
      </header>

      <div
        v-if="woodworkPosts && woodworkPosts.length > 0"
        class="grid md:grid-cols-3 gap-12"
      >
        <WoodworkCard
          v-for="work in woodworkPosts"
          :key="work.slug"
          :slug="work.slug"
          :title="work.title"
          :excerpt="work.excerpt"
          :material="work.material"
          :imgSrc="work.coverImage.url"
        />
      </div>
      <div v-else>
        <LoadingSpinner label="Loading..." />
      </div>
    </div>
  </section>
</template>

<script setup>
import WoodworkCard from '@/components/WoodworkCard.vue';
const { getAll: getWoodworkPosts } = useWoodworkPosts();
const woodworkPosts = ref([]);

onMounted(async () => {
  woodworkPosts.value = await getWoodworkPosts();
});
</script>

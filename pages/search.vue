<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <header class="mb-12">
        <GradientTitle :label="`Search results for “${query}”`" />
      </header>

      <!-- RESULTS -->
      <ul
        v-if="!loading && results.length"
        class="divide-y divide-primary-light/40 border-t border-primary-light/40"
      >
        <li v-for="post in results" :key="post.$id">
          <NuxtLink
            :to="`/${type === 'woodwork' ? 'woodworks' : 'music'}/${post.slug}`"
            class="block py-4 px-2 hover:bg-primary-light/30 transition"
          >
            <div class="flex justify-between">
              <span class="font-semibold text-secondary-light">
                {{ post.title }}
              </span>
              <span class="text-secondary-dark text-sm">
                {{ formatDate(post.$createdAt) }}
              </span>
            </div>

            <p class="text-secondary-dark text-sm line-clamp-1">
              {{ post.excerpt }}
            </p>
          </NuxtLink>
        </li>
      </ul>

      <!-- NO RESULTS -->
      <p
        v-else-if="!loading && hasSearched && results.length === 0"
        class="text-secondary-dark text-lg"
      >
        No results found.
      </p>

      <LoadingSpinner v-else label="Searching..." />
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const { formatDate } = useDate();

const query = computed(() => (route.query.q as string) || '');
const type = computed(
  () => (route.query.type as 'woodwork' | 'music') || 'woodwork',
);

const results = ref<any[]>([]);
const loading = ref(false);
const hasSearched = ref(false);

const runSearch = async () => {
  if (!query.value.trim()) {
    results.value = [];
    return;
  }

  loading.value = true;
  hasSearched.value = true;

  const api = usePost(type.value);

  try {
    results.value = await api.searchByTitle(query.value);
  } catch (err) {
    console.error(err);
    results.value = [];
  } finally {
    loading.value = false;
  }
};

watch([query, type], runSearch, { immediate: true });
</script>

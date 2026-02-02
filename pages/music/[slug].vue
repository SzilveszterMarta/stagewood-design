<template>
  <section class="py-20">
    <div class="container mx-auto px-6 max-w-3xl" v-if="post">
      <NuxtLink to="/music" class="text-highlight font-bold mb-10 inline-block">
        ← Back to music
      </NuxtLink>

      <h1 class="text-5xl font-black text-secondary-light font-primary mb-6">
        {{ post?.title }}
      </h1>

      <article
        v-html="render(post?.content)"
        class="markdown-display text-xl text-secondary-light leading-relaxed"
      ></article>

      <div
        class="aspect-video bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center"
      >
        <p class="text-slate-400">Audio player / embed goes here</p>
      </div>
    </div>
    <div v-else>
      <LoadingSpinner fullscreen label="Loading" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MusicPost } from '~/types/music';
const route = useRoute();
const { getBySlug } = useMusicPosts();
const { render } = useMarkdown();
const post = ref<MusicPost | null>(null);

onMounted(async () => {
  post.value = await getBySlug(route.params.slug as string);

  if (!post.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Music post not found',
    });
  }
});
</script>

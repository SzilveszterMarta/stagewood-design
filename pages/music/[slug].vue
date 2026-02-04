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

      <!-- Music single post internal links section -->
      <aside
        v-if="features.internalLinksFooter"
        class="mb-10 markdown-display text-xl text-secondary-light leading-relaxed"
      >
        If you’re interested in drum recording, session work, or just want to
        talk shop, feel free to reach out via the
        <NuxtLink to="/contact" class="text-highlight">contact page</NuxtLink>
        or explore more posts in the
        <NuxtLink to="/music" class="text-highlight">Music</NuxtLink> section.
      </aside>

      <!-- Audio / video player -->
    </div>
    <div v-else>
      <LoadingSpinner fullscreen label="Loading" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post';
const route = useRoute();
const features = useFeatures();
const { getBySlug } = usePost('music');
const { render } = useMarkdown();
const post = ref<Post | null>(null);

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

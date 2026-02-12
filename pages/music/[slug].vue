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
      <SocialShare v-if="post" :title="post.title" />
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

// ssr data fetch for social share meta tags
const { data: post } = await useAsyncData<Post | null>(
  `woodwork-${route.params.slug}`,
  async () => {
    return await getBySlug(route.params.slug as string);
  },
);
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Woodwork post not found',
  });
}
// absolute urls for social share meta tags
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;
const currentUrl = `${siteUrl}/woodworks/${post.value.slug}`;
// resolve image
const image =
  typeof post.value.images?.[0] === 'string'
    ? post.value.images[0]
    : post.value.images?.[0]?.url || '';

const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
// ssr rendering meta tags
useSeoMeta({
  title: post.value.title,
  description: post.value.excerpt || '',
  ogTitle: post.value.title,
  ogDescription: post.value.excerpt || '',
  ogType: 'article',
  ogUrl: currentUrl,
  ogImage: absoluteImage,
  twitterCard: 'summary_large_image',
});
</script>

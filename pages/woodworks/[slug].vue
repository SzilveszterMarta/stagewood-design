<template>
  <section class="py-20">
    <div class="container mx-auto px-6 max-w-4xl" v-if="post">
      <NuxtLink
        to="/woodworks"
        class="text-highlight font-bold mb-10 inline-block"
      >
        ← Back to woodworks
      </NuxtLink>

      <h1 class="text-5xl font-black text-secondary-light font-primary mb-14">
        {{ post.title }}
      </h1>

      <Gallery v-if="post.images?.length" :images="post.images" />

      <article
        v-html="render(post?.content)"
        class="markdown-display text-xl text-secondary-light leading-relaxed"
      ></article>

      <!-- Woodwork single post internal links section -->
      <aside
        v-if="features.internalLinksFooter"
        class="mb-10 markdown-display text-xl text-secondary-light leading-relaxed"
      >
        If you’re interested in a similar piece or a custom variation, feel free
        to
        <NuxtLink to="/contact" class="text-highlight">get in touch</NuxtLink>
        or browse more work in the
        <NuxtLink to="/woodworks" class="text-highlight">Woodworks</NuxtLink>
        section.
      </aside>
      <SocialShare v-if="post" :title="post.title" />
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
const { render } = useMarkdown();

const { data: post } = await useFetch<Post>(
  `/api/woodworks/${route.params.slug}`,
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Woodwork post not found',
  });
}

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

const currentUrl = `${siteUrl}/woodworks/${post.value.slug}`;

useSeoMeta({
  title: post.value.title,
  description: post.value.excerpt || '',
  ogTitle: post.value.title,
  ogDescription: post.value.excerpt || '',
  ogType: 'article',
  ogUrl: currentUrl,
  twitterCard: 'summary_large_image',
});
</script>

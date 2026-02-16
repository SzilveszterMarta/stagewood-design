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

      <aside
        v-if="features.internalLinksFooter"
        class="mb-10 markdown-display text-xl text-secondary-light leading-relaxed"
      >
        If you're interested in a similar piece or a custom variation, feel free
        to
        <NuxtLink to="/contact" class="text-highlight">get in touch</NuxtLink>
        or browse more work in the
        <NuxtLink to="/woodworks" class="text-highlight">Woodworks</NuxtLink>
        section.
      </aside>
      <SocialShare v-if="post" :title="post.title" :url="postUrl" />
    </div>
    <div v-else>
      <LoadingSpinner fullscreen label="Loading" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post';

const route = useRoute();
const config = useRuntimeConfig();
const features = useFeatures();
const { render } = useMarkdown();

// Fetch post data server-side
const { data: post, error } = await useAsyncData(
  `post-${route.params.slug}`,
  () => $fetch<Post>(`/api/posts/woodwork/${route.params.slug}`)
);

// Handle 404
if (error.value || !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Woodwork post not found',
  });
}

// Prepare data BEFORE useHead - must be non-reactive
const postTitle = post.value.title;
const postExcerpt = post.value.excerpt || '';
const siteUrl = config.public.siteUrl || 'http://localhost:3000';
const postUrl = `${siteUrl}${route.path}`;
const imageUrl = post.value.images?.[0]?.url || '';

// Use plain useHead with static values
useHead({
  title: postTitle,
  meta: [
    { name: 'description', content: postExcerpt },
    { property: 'og:title', content: postTitle },
    { property: 'og:description', content: postExcerpt },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: postUrl },
    { property: 'og:image', content: imageUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: postTitle },
    { name: 'twitter:description', content: postExcerpt },
    { name: 'twitter:image', content: imageUrl },
  ],
});
</script>
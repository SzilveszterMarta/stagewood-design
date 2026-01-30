<template>
  <section class="py-32">
    <div class="container mx-auto px-6">
      <header class="max-w-3xl mb-20">
        <h1 class="text-5xl md:text-6xl font-black text-secondary-light font-primary mb-6">
          Music
        </h1>
        <p class="text-xl text-secondary-dark leading-relaxed mb-8">
          Songs written slowly, usually at night.
          Some are loud, some are quiet — all of them personal.
        </p>
      </header>

      <div class="grid md:grid-cols-2 gap-12">
        <MusicCard
          v-for="post in musicPosts"
          :key="post.slug"
          :slug="post.slug"
          :title="post.title"
          :excerpt="post.excerpt"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import MusicCard from '@/components/MusicCard.vue'

const musicPosts = [
  {
    slug: 'late-night-demo',
    title: 'Late Night Demo',
    excerpt: 'A rough demo recorded after midnight. One take, no edits.'
  },
  {
    slug: 'instrumental-sketches',
    title: 'Instrumental Sketches',
    excerpt: 'Short ideas, textures, and unfinished thoughts.'
  }
]
</script>

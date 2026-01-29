<template>
  <section class="py-32">
    <div class="container mx-auto px-6 max-w-3xl">
      <NuxtLink
        to="/music"
        class="text-emerald-400 font-bold mb-10 inline-block"
      >
        ← Back to music
      </NuxtLink>

      <h1 class="text-5xl font-black text-white mb-6">
        {{ post.title }}
      </h1>

      <p class="text-xl text-slate-300 leading-relaxed mb-12">
        {{ post.description }}
      </p>

      <div class="aspect-video bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center">
        <p class="text-slate-400">
          Audio player / embed goes here
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()

const posts = {
  'late-night-demo': {
    title: 'Late Night Demo',
    description:
      'Recorded in one sitting after midnight. No click, no grid, just following the feel.'
  },
  'instrumental-sketches': {
    title: 'Instrumental Sketches',
    description:
      'Small ideas that may or may not become full songs someday.'
  }
}

const post = posts[route.params.slug]
</script>

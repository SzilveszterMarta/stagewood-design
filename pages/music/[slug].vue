<template>
  <section v-if="post" class="py-32">
    <div class="container mx-auto px-6 max-w-3xl">
      <NuxtLink
        to="/music"
        class="text-highlight font-bold mb-10 inline-block"
      >
        ← Back to music
      </NuxtLink>

      <h1 class="text-5xl font-black text-secondary-light font-primary mb-6">
        {{ post?.title }}
      </h1>

      <p class="text-xl text-secondary-dark leading-relaxed mb-12">
        {{ post?.excerpt }}
      </p>

      <div class="aspect-video bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center">
        <p class="text-slate-400">
          Audio player / embed goes here
        </p>
      </div>
    </div>
  </section>
  <div
    v-else-if="isClient"
    class="text-center py-24 text-slate-400"
  >
    Loading…
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = decodeURIComponent(route.params.slug as string)
const post = await useMusicPost(slug)
const isClient = process.client
</script>

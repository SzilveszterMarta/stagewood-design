<template>
  <section class="py-32">
    <div class="container mx-auto px-6 max-w-4xl" v-if="post">
      <NuxtLink
        to="/woodworks"
        class="text-highlight font-bold mb-10 inline-block"
      >
        ← Back to woodworks
      </NuxtLink>

      <h1 class="text-5xl font-black text-secondary-light font-primary mb-6">
        {{ post.title }}
      </h1>

      <Gallery
        v-if="post.images?.length"
        :images="post.images"
      />

      <p class="text-xl text-secondary-dark mb-12">
        {{ post.excerpt }}
      </p>

      <p class="text-lg text-secondary-dark leading-relaxed">
        {{ post.content }}
      </p>
    </div>
    <div v-else>
      <LoadingSpinner fullscreen label="Loading" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WoodworkPost } from '~/types/woodwork'
const route = useRoute()
const { getBySlug } = useWoodworkPosts()
const post = ref<WoodworkPost | null>(null)

onMounted(async () => {
  post.value = await getBySlug(route.params.slug as string)
  if (!post.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Woodwork post not found'
    })
  }
})
</script>

<template>
  <section class="py-32">
    <div class="container mx-auto px-6 max-w-4xl">
      <NuxtLink
        to="/woodworks"
        class="text-highlight font-bold mb-10 inline-block"
      >
        ← Back to woodworks
      </NuxtLink>

      <h1 class="text-5xl font-black text-secondary-light font-primary mb-6">
        {{ project.title }}
      </h1>

      <Gallery
        v-if="fakeImages?.length"
        :images="fakeImages"
      />

      <p class="text-xl text-secondary-dark mb-12">
        {{ project.description }}
      </p>

      <p class="text-lg text-secondary-dark leading-relaxed">
        {{ project.details }}
      </p>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()

const projects = {
  'oak-cutting-board': {
    title: 'Oak Cutting Board',
    description:
      'End-grain cutting board made from locally sourced oak.',
    details:
      'Finished with food-safe oil and wax. Built to be used daily and resurfaced when needed.'
  },
  'walnut-side-table': {
    title: 'Walnut Side Table',
    description:
      'Small side table with hand-cut joinery.',
    details:
      'Finished with hardwax oil. Designed to age naturally over time.'
  }
}

const fakeImages = [
  { url: 'https://picsum.photos/id/237/200/300', alt: 'Image 1' },
  { url: 'https://picsum.photos/id/237/300/300', alt: 'Image 2' },
  { url: 'https://picsum.photos/id/237/300/200', alt: 'Image 2' },
  { url: 'https://picsum.photos/id/237/200/300', alt: 'Image 2' },
  { url: 'https://picsum.photos/id/237/200/300', alt: 'Image 2' },
  { url: 'https://picsum.photos/id/237/200/300', alt: 'Image 2' },
  { url: 'https://picsum.photos/id/237/200/300', alt: 'Image 3' }
]

const project = projects[route.params.slug]
</script>

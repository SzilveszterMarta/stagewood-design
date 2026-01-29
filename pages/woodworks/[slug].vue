<template>
  <section class="py-32">
    <div class="container mx-auto px-6 max-w-4xl">
      <NuxtLink
        to="/woodworks"
        class="text-emerald-400 font-bold mb-10 inline-block"
      >
        ← Back to woodworks
      </NuxtLink>

      <h1 class="text-5xl font-black text-white mb-6">
        {{ project.title }}
      </h1>

      <p class="text-xl text-slate-300 mb-12">
        {{ project.description }}
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="aspect-[4/3] bg-slate-800 rounded-2xl"></div>
        <div class="aspect-[4/3] bg-slate-800 rounded-2xl"></div>
      </div>

      <p class="text-lg text-slate-400 leading-relaxed">
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

const project = projects[route.params.slug]
</script>

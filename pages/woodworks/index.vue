<template>
  <section class="py-32">
    <div class="container mx-auto px-6">
      <header class="max-w-3xl mb-20">
        <h1 class="text-5xl md:text-6xl font-black text-white mb-6">
          Woodworks
        </h1>
        <p class="text-xl text-slate-300 leading-relaxed mb-8">
          Furniture and objects made from solid wood.
          Built to be used, repaired, and kept.
        </p>
      </header>

      <div class="grid md:grid-cols-3 gap-12">
        <WoodworkCard
            v-for="work in woodworks"
            :key="work.slug"
            :slug="work.slug"
            :title="work.title"
            :material="work.material"
            :imgSrc="work.img"
            />
      </div>
    </div>
  </section>
</template>

<script setup>
import WoodworkCard from '@/components/WoodworkCard.vue'

const woodworks = [
  {
    slug: 'oak-cutting-board',
    img: 'https://picsum.photos/200',
    title: 'Oak Cutting Board',
    material: 'Solid oak'
  },
  {
    slug: 'walnut-side-table',
    img: 'https://picsum.photos/200',
    title: 'Walnut Side Table',
    material: 'American walnut'
  },
  {
    slug: 'ash-shelf',
    img: 'https://picsum.photos/200',
    title: 'Wall Shelf',
    material: 'Ash wood'
  }
]
</script>

<template>
  <section class="pt-32 pb-24 relative overflow-hidden">
    <div class="container mx-auto px-6 text-center relative z-10">
      <GradientTitle :label="title" />
      <p class="text-xl md:text-2xl text-secondary-dark max-w-3xl mx-auto leading-relaxed mb-12" v-html="subtitle"></p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center font-bold">
        <PrimaryCta
          :url="primaryLink.url"
          :label="primaryLink.label"
        />
        <SecondaryCta
          :url="secondaryLink.url"
          :label="secondaryLink.label"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  primaryLink: Object,
  secondaryLink: Object
})
</script>

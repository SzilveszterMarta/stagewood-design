<template>
  <section class="py-24">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-primary text-secondary-light mb-6">
        {{ title }}
      </h2>
      <p
        class="text-xl text-secondary-dark mb-12 max-w-2xl mx-auto leading-relaxed"
        v-html="subtitle"
      ></p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center font-bold">
        <PrimaryCta :url="primaryButton.url" :label="primaryButton.label" />
        <SecondaryCta
          :url="secondaryButton.url"
          :label="secondaryButton.label"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  primaryButton: Object,
  secondaryButton: Object,
});
</script>

<template>
    <h1 class="h-20 text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-dark  to-secondary-light bg-clip-text text-transparent font-primary mb-6">
        {{ label }}
    </h1>
</template>

<script setup>
defineProps({
  label: String
})
</script>

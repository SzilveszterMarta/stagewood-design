<template>
  <div id="app-root" class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onMounted(() => {
  document.documentElement.classList.add('dark');
});
</script>

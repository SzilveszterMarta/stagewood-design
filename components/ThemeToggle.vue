<template>
  <IconButton ariaLabel="Toggle theme" @click="toggleTheme">
    <AppIcon :name="isDark ? 'sun' : 'moon'" />
  </IconButton>
</template>

<script setup lang="ts">
const isDark = ref(true);

onMounted(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.remove('dark');
    isDark.value = false;
  } else {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  }
});

const toggleTheme = () => {
  const html = document.documentElement;
  const dark = html.classList.toggle('dark');
  isDark.value = dark;
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};
</script>

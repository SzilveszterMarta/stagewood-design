<template>
  <SearchOverlay v-model="isSearchOpen" />
  <div v-if="!isLoading" class="bg-primary-dark min-h-screen flex flex-col">
    <header
      class="bg-primary-light/60 backdrop-blur border-b border-slate-700 sticky top-0 z-50 relative text-secondary-light"
    >
      <nav
        class="container mx-auto px-6 py-4 flex items-center justify-between"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="text-3xl font-primary text-highlight font-bold">
          Stagewood Design
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center space-x-8 text-xl">
          <NuxtLink to="/woodworks">Woodworks</NuxtLink>
          <NuxtLink to="/music">Music</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <ThemeToggle />
          <IconButton
            v-if="features.search"
            aria-label="Open search"
            @click="isSearchOpen = true"
          >
            <AppIcon name="search" />
          </IconButton>
        </div>

        <!-- Mobile toggle -->
        <button
          @click="toggle"
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 hover:border-slate-500 transition"
          aria-label="Toggle menu"
        >
          <div class="space-y-1.5">
            <span
              class="block w-5 h-0.5 bg-white transition"
              :class="{ 'rotate-45 translate-y-2': isMobileNavOpen }"
            />
            <span
              class="block w-5 h-0.5 bg-white transition"
              :class="{ 'opacity-0': isMobileNavOpen }"
            />
            <span
              class="block w-5 h-0.5 bg-white transition"
              :class="{ '-rotate-45 -translate-y-2': isMobileNavOpen }"
            />
          </div>
        </button>
      </nav>

      <!-- Mobile dropdown (overlay) -->
      <transition name="mobile-nav">
        <div
          v-if="isMobileNavOpen"
          class="absolute left-0 top-full w-full bg-primary-light backdrop-blur border-t border-slate-700 z-40"
        >
          <div
            class="container items-start mx-auto px-6 py-8 flex flex-col space-y-6"
          >
            <NuxtLink
              mobile
              to="/woodworks"
              @click="close"
              class="text-xl text-secondary-light"
            >
              Woodworks
              <span class="block text-sm text-secondary-dark mt-1">
                Furniture & objects made slowly
              </span>
            </NuxtLink>

            <NuxtLink
              mobile
              to="/music"
              @click="close"
              class="text-xl text-secondary-light"
            >
              Music
              <span class="block text-sm text-secondary-dark mt-1">
                Songs, demos, late-night ideas
              </span>
            </NuxtLink>

            <NuxtLink
              mobile
              to="/about"
              @click="close"
              class="text-xl text-secondary-light"
            >
              About
              <span class="block text-sm text-secondary-dark mt-1">
                Why this project exists
              </span>
            </NuxtLink>

            <NuxtLink
              mobile
              to="/contact"
              @click="close"
              class="text-xl text-secondary-light"
            >
              Contact
              <span class="block text-sm text-secondary-dark mt-1">
                Say hello or ask a question
              </span>
            </NuxtLink>
            <ThemeToggle />
            <IconButton
              v-if="features.search"
              aria-label="Open search"
              @click="
                isSearchOpen = true;
                isMobileNavOpen = false;
              "
            >
              <AppIcon name="search" />
            </IconButton>
          </div>
        </div>
      </transition>
    </header>

    <main class="px-10">
      <slot />
    </main>

    <footer class="bg-primary-dark border-t border-slate-700 py-8 mt-auto">
      <div
        class="container mx-auto px-6 text-center text-secondary-dark text-sm"
      >
        © 2026 Stagewood Design. Szeged, Hungary.
      </div>
    </footer>
  </div>
  <LoadingSpinner v-else fullscreen label="Loading" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isMobileNavOpen = ref(false);
const route = useRoute();
const isLoading = ref(true);
const isSearchOpen = ref(false);
const features = useFeatures();

onMounted(() => {
  isLoading.value = false;
});

const toggle = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const close = () => {
  isMobileNavOpen.value = false;
};

watch(
  () => route.fullPath,
  () => {
    isMobileNavOpen.value = false;
  },
);
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-nav-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

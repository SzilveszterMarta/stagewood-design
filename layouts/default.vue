<template>
  <div class="bg-primary-dark min-h-screen flex flex-col">
    <header class="bg-primary-light/60 backdrop-blur border-b border-slate-700 sticky top-0 z-50 relative text-secondary-light">
      <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-3xl font-primary text-highlight font-bold"
        >
          Stagewood Design
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex space-x-8 text-xl">
          <NuxtLink to="/woodworks">Woodworks</NuxtLink>
          <NuxtLink to="/music">Music</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
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
              :class="{ 'rotate-45 translate-y-2': isOpen }"
            />
            <span
              class="block w-5 h-0.5 bg-white transition"
              :class="{ 'opacity-0': isOpen }"
            />
            <span
              class="block w-5 h-0.5 bg-white transition"
              :class="{ '-rotate-45 -translate-y-2': isOpen }"
            />
          </div>
        </button>
      </nav>

      <!-- Mobile dropdown (overlay) -->
      <transition name="mobile-nav">
        <div
          v-if="isOpen"
          class="absolute left-0 top-full w-full bg-primary-light backdrop-blur border-t border-slate-700 z-40"
        >
          <div class="container mx-auto px-6 py-8 flex flex-col space-y-6">
            <NuxtLink mobile to="/woodworks" @click="close" class="text-xl text-secondary-light">
              Woodworks
              <span class="block text-sm text-secondary-dark mt-1">
                Furniture & objects made slowly
              </span>
            </NuxtLink>

            <NuxtLink mobile to="/music" @click="close" class="text-xl text-secondary-light">
              Music
              <span class="block text-sm text-secondary-dark mt-1">
                Songs, demos, late-night ideas
              </span>
            </NuxtLink>

            <NuxtLink mobile to="/about" @click="close" class="text-xl text-secondary-light">
              About
              <span class="block text-sm text-secondary-dark mt-1">
                Why this project exists
              </span>
            </NuxtLink>

            <NuxtLink mobile to="/contact" @click="close" class="text-xl text-secondary-light">
              Contact
              <span class="block text-sm text-secondary-dark mt-1">
                Say hello or ask a question
              </span>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </header>

    <main class="container mx-auto px-6 py-12 min-h-[60vh]">
      <slot />
    </main>

    <footer class="bg-primary-light/50 border-t border-slate-700 py-8 mt-auto">
      <div class="container mx-auto px-6 text-center text-secondary-dark text-sm">
        © 2026 Stagewood Design. Szeged, Hungary.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const toggle = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)

</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
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


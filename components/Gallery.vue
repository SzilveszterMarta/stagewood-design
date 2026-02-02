<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
    <button
      v-for="(image, index) in images"
      :key="index"
      class="group relative overflow-hidden rounded-xl border border-slate-700 focus:outline-none"
      @click="open(index)"
    >
      <img
        :src="image.url"
        :alt="image.alt || ''"
        class="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"
      />
    </button>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="active !== null"
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      @click.self="close"
    >
      <!-- Image -->
      <img
        :src="currentImage?.url"
        :alt="currentImage?.alt || ''"
        class="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl select-none"
      />

      <!-- Caption -->
      <p
        v-if="currentImage?.alt"
        class="absolute bottom-16 text-slate-300 text-sm"
      >
        {{ currentImage.alt }}
      </p>

      <!-- Counter -->
      <div class="absolute bottom-6 text-slate-400 text-xs">
        {{ active! + 1 }} / {{ images.length }}
      </div>

      <!-- Controls -->
      <button
        class="lightbox-btn left-4"
        @click.stop="prev"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        class="lightbox-btn right-4"
        @click.stop="next"
        aria-label="Next image"
      >
        ›
      </button>

      <button
        class="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl"
        @click="close"
        aria-label="Close gallery"
      >
        ×
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { WoodworkImage } from '~/types/woodwork'

const props = defineProps<{
  images: WoodworkImage[]
}>()

const active = ref<number | null>(null)

const currentImage = computed(() =>
  active.value !== null ? props.images[active.value] : props.images[0]
)

const open = (index: number) => {
  active.value = index
  lockScroll()
}

const close = () => {
  active.value = null
  unlockScroll()
}

const next = () => {
  if (active.value === null) return
  active.value = (active.value + 1) % props.images.length
}

const prev = () => {
  if (active.value === null) return
  active.value =
    (active.value - 1 + props.images.length) % props.images.length
}

/* 🔒 Scroll lock */
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

/* ⌨️ Keyboard navigation */
const onKeydown = (e: KeyboardEvent) => {
  if (active.value === null) return

  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  unlockScroll()
})
</script>

<style scoped>
.lightbox-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: rgb(203 213 225); /* slate-300 */
  padding: 0.5rem 1rem;
  transition: color 0.2s;
}

.lightbox-btn:hover {
  color: white;
}

.lightbox-btn.left-4 {
  left: 1rem;
}

.lightbox-btn.right-4 {
  right: 1rem;
}
</style>

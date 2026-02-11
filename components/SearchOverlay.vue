<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <Transition name="dialog-pop">
          <div
            v-if="modelValue"
            class="bg-primary-dark p-8 rounded-2xl w-full max-w-xl shadow-2xl"
          >
            <h2 class="text-2xl font-bold mb-6 text-secondary-light">
              Search posts
            </h2>

            <!-- SEARCH INPUT -->
            <div class="relative mb-4">
              <input
                ref="inputRef"
                v-model="search"
                type="text"
                placeholder="Enter search term..."
                class="w-full rounded-xl bg-primary-dark border border-secondary-dark/20 px-4 py-3 text-secondary-light focus:outline-none focus:ring-2 focus:ring-highlight"
              />
            </div>

            <!-- TOGGLE -->
            <div class="flex gap-4 mb-6">
              <button
                @click="type = 'woodwork'"
                :class="toggleClass(type === 'woodwork')"
              >
                Woodworking
              </button>

              <button
                @click="type = 'music'"
                :class="toggleClass(type === 'music')"
              >
                Music
              </button>
            </div>

            <!-- ACTIONS -->
            <div class="flex justify-end gap-4">
              <button @click="close" class="px-4 py-2 text-secondary-dark">
                Cancel
              </button>

              <button
                :disabled="!search.trim()"
                @click="submit"
                class="px-6 py-2 rounded-lg bg-highlight text-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Search
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from 'vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);
const router = useRouter();

const search = ref('');
const type = ref<'woodwork' | 'music'>('woodwork');
const inputRef = ref<HTMLInputElement | null>(null);

const close = () => {
  emit('update:modelValue', false);
};

const submit = () => {
  if (!search.value.trim()) return;

  close();

  router.push({
    path: '/search',
    query: {
      q: search.value,
      type: type.value,
    },
  });
};

const toggleClass = (active: boolean) => [
  'px-4 py-2 rounded-lg transition',
  active
    ? 'bg-highlight text-primary-dark'
    : 'bg-primary-light/30 text-secondary-dark hover:bg-primary-light/40',
];

/* =========================
   ESC KEY SUPPORT
========================= */

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close();
  }
};

watch(
  () => props.modelValue,
  async (val) => {
    if (val) {
      window.addEventListener('keydown', handleKey);
      await nextTick();
      inputRef.value?.focus();
    } else {
      window.removeEventListener('keydown', handleKey);
    }
  },
);

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey);
});
</script>

<style scoped>
/* Overlay fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.25s ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* Dialog pop animation */
.dialog-pop-enter-active {
  transition: all 0.25s ease;
}
.dialog-pop-leave-active {
  transition: all 0.2s ease;
}
.dialog-pop-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.96);
}
.dialog-pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.96);
}
</style>

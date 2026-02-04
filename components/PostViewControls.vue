<template>
  <div class="flex flex-wrap mb-6 items-center justify-end gap-3">
    <!-- View toggle -->
    <div class="flex gap-2">
      <button
        @click="setView('grid')"
        :class="toggleClass(viewMode === 'grid')"
        aria-label="Grid view"
      >
        <AppIcon name="grid" />
      </button>

      <button
        @click="setView('list')"
        :class="toggleClass(viewMode === 'list')"
        aria-label="List view"
      >
        <AppIcon name="list" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type ViewMode = 'grid' | 'list';

const props = defineProps<{
  modelValue: ViewMode;
  storageKey: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: ViewMode): void;
}>();

const viewMode = ref<ViewMode>(props.modelValue);

/* -----------------------------
 * LocalStorage persistence
 * ----------------------------- */

onMounted(() => {
  const savedView = localStorage.getItem(
    `${props.storageKey}:view`,
  ) as ViewMode;

  if (savedView) {
    viewMode.value = savedView;
    emit('update:modelValue', savedView);
  }
});

watch(viewMode, (val) => {
  localStorage.setItem(`${props.storageKey}:view`, val);
  emit('update:modelValue', val);
});

/* -----------------------------
 * Helpers
 * ----------------------------- */

const setView = (mode: ViewMode) => {
  viewMode.value = mode;
};

const toggleClass = (active: boolean) => [
  'px-3 py-1.5 rounded-lg text-sm font-medium transition',
  active
    ? 'bg-highlight text-primary-dark'
    : 'bg-primary-light/40 text-secondary-dark hover:bg-primary-light/60',
];
</script>

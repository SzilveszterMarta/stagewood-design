<template>
  <div class="flex flex-wrap items-center justify-between gap-4 mb-12">
    <!-- View Toggle -->
    <div class="flex items-center gap-2">
      <button
        @click="updateView('grid')"
        :class="toggleClass(modelValue === 'grid')"
      >
        <AppIcon name="grid" />
      </button>

      <button
        @click="updateView('list')"
        :class="toggleClass(modelValue === 'list')"
      >
        <AppIcon name="list" />
      </button>
    </div>

    <!-- Order Dropdown -->
    <div>
      <div class="relative">
        <button
          @click="open = !open"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-light/40 text-secondary-dark border border-primary-light/40 hover:bg-primary-light/60 transition"
        >
          <span class="text-sm font-medium">
            {{ orderLabel }}
          </span>

          <svg
            class="size-4 transition-transform"
            :class="{ 'rotate-180': open }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Dropdown -->
        <Transition name="dropdown">
          <div
            v-if="open"
            class="absolute right-0 mt-2 w-44 rounded-xl bg-primary-dark border border-primary-light/40 shadow-xl overflow-hidden z-20"
          >
            <button
              v-for="opt in options"
              :key="opt.value"
              @click="select(opt.value as 'asc' | 'desc')"
              class="w-full text-left px-4 py-2 text-sm transition hover:bg-primary-light/20"
              :class="{
                'text-highlight font-semibold': opt.value === localOrder,
                'text-secondary-dark': opt.value !== localOrder,
              }"
            >
              {{ opt.label }}
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ViewMode = 'grid' | 'list';
type SortOrder = 'asc' | 'desc';

const props = defineProps<{
  modelValue: ViewMode;
  order: SortOrder;
  storageKey: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: ViewMode): void;
  (e: 'update:order', value: SortOrder): void;
}>();

const localOrder = ref<SortOrder>(props.order);

const updateView = (mode: ViewMode) => {
  emit('update:modelValue', mode);
  localStorage.setItem(`${props.storageKey}-view`, mode);
};
const open = ref(false);

const options = [
  { value: 'desc', label: 'Newest first' },
  { value: 'asc', label: 'Oldest first' },
];

const orderLabel = computed(() =>
  localOrder.value === 'asc' ? 'Oldest first' : 'Newest first',
);

const select = (value: 'asc' | 'desc') => {
  localOrder.value = value;
  updateOrder();
  open.value = false;
};

// close on ESC
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false;
};

const updateOrder = () => {
  emit('update:order', localOrder.value);
  localStorage.setItem(`${props.storageKey}-order`, localOrder.value);
};

const toggleClass = (active: boolean) => [
  'px-3 py-1.5 rounded-lg text-sm font-medium transition',
  active
    ? 'bg-highlight text-primary-dark'
    : 'bg-primary-light/40 text-secondary-dark hover:bg-primary-light/60',
];

onMounted(() => {
  window.addEventListener('keydown', onKey);
  const savedView = localStorage.getItem(`${props.storageKey}-view`);
  const savedOrder = localStorage.getItem(`${props.storageKey}-order`);

  if (savedView === 'grid' || savedView === 'list') {
    emit('update:modelValue', savedView);
  }

  if (savedOrder === 'asc' || savedOrder === 'desc') {
    localOrder.value = savedOrder;
    emit('update:order', savedOrder);
  }
});
onUnmounted(() => window.removeEventListener('keydown', onKey));
</script>

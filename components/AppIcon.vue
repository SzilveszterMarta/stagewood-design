<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3"
  >
    <component :is="iconPath" />
  </svg>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';

const props = defineProps<{
  name: 'mail' | 'phone' | 'map' | 'music' | 'grid' | 'list' | 'search';
}>();

const iconPath = computed(() => {
  switch (props.name) {
    case 'mail':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25',
      });

    case 'phone':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M2.25 6.75c0 7.87 6.38 14.25 14.25 14.25.62 0 1.12-.5 1.12-1.12v-2.25a1.12 1.12 0 0 0-.9-1.1l-3.1-.62a1.12 1.12 0 0 0-1.17.56l-.97 1.7a12.06 12.06 0 0 1-5.43-5.43l1.7-.97a1.12 1.12 0 0 0 .56-1.17l-.62-3.1a1.12 1.12 0 0 0-1.1-.9H3.37c-.62 0-1.12.5-1.12 1.12Z',
      });

    case 'map':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M12 21s6.75-6.75 6.75-11.25a6.75 6.75 0 1 0-13.5 0C5.25 14.25 12 21 12 21Zm0-9a2.25 2.25 0 1 1 0-4.5',
      });

    case 'music':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0m18-2a3 3 0 1 1-6 0',
      });

    case 'grid':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5',
      });

    case 'list':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z',
      });

    case 'search':
      return h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
      });
  }
});
</script>

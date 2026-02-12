<template>
  <div
    v-if="features.socialShare"
    class="mt-16 pt-10 border-t border-primary-light/40"
  >
    <div class="flex items-center gap-4">
      <button
        @click="shareFacebook"
        class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1877F2] text-white font-medium shadow-lg hover:scale-105 active:scale-95 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-5"
        >
          <path
            d="M22 12a10 10 0 1 0-11.563 9.876v-6.987H7.898V12h2.539V9.797
            c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
            2.238.195v2.461h-1.26c-1.243 0-1.63.771-1.63
            1.562V12h2.773l-.443 2.889h-2.33v6.987A10
            10 0 0 0 22 12"
          />
        </svg>
        Share on Facebook
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = useFeatures();
const props = defineProps<{
  title: string;
}>();

const shareFacebook = () => {
  if (process.client) {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, 'facebook-share-dialog', 'width=626,height=436');
  }
};
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/about'],
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'Stagewood Design',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      appwriteProjectId: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID,
      appwriteEndpoint: process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT,
      appwriteProjectName: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_NAME,
      appwriteBucketId: process.env.NUXT_PUBLIC_APPWRITE_BUCKET_ID,
      appwriteDatabaseId: process.env.NUXT_PUBLIC_APPWRITE_DATABASE_ID,
      appwriteWoodworkCollectionId:
        process.env.NUXT_PUBLIC_APPWRITE_WOODWORK_COLLECTION_ID,
      appwriteMusicCollectionId:
        process.env.NUXT_PUBLIC_APPWRITE_MUSIC_COLLECTION_ID,
      featurePostInternalLinksFooter:
        process.env.NUXT_PUBLIC_FEATURE_POST_INTERNAL_LINKS_FOOTER === 'true',
      featurePostListViewToggle:
        process.env.NUXT_PUBLIC_FEATURE_POST_LIST_VIEW_TOGGLE === 'true',
      featureSearch: process.env.NUXT_PUBLIC_FEATURE_SEARCH === 'true',
    },
  },
});

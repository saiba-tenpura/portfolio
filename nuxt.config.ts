// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
  content: {
    documentDriven: true,
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
})

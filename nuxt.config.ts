import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      enterFromClass: 'opacity-0 translate-x-20',
      enterToClass: 'opacity-100 translate-x-0',
      enterActiveClass: 'transition duration-300',
      leaveFromClass: 'opacity-100 translate-x-0',
      leaveToClass: 'opacity-0 translate-x-20',
      leaveActiveClass: 'transition duration-300',
      mode: 'out-in',
    },
    layoutTransition: {
      enterFromClass: 'opacity-0 translate-x-20',
      enterToClass: 'opacity-100 translate-x-0',
      enterActiveClass: 'transition duration-300',
      leaveFromClass: 'opacity-100 translate-x-0',
      leaveToClass: 'opacity-0 translate-x-20',
      leaveActiveClass: 'transition duration-300',
      mode: 'out-in',
    },
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    markdown: {
      anchorLinks: {
        depth: 4,
        exclude: [1, 2, 3],
      },
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: "cleanupIds",
              params: {
                minify: false,
              },
            },
          ],
        },
      }),
    ],
  },
});

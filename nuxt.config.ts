import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Saiba Tenpura',
      htmlAttrs: {
        class: 'dark',
        lang: 'en',
      },
      meta: [
        {
          name: 'apple-mobile-web-app-title',
          content: 'Saiba Tenpura',
        },
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon-96x96.png',
        },
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
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
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],
  site: {
    url: 'https://www.saiba-tenpura.com',
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
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
  compatibilityDate: '2024-07-02',
});

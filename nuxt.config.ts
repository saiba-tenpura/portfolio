import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Saiba Tenpura',
      meta: [
        {
          name: 'og:title',
          content: 'Saiba Tenpura',
        },
        {
          name: 'description',
          content: 'Full Stack Developer / DevOps / Hobbyist Game Dev',
        },
        {
          name: 'og:description',
          content: 'Full Stack Developer / DevOps / Hobbyist Game Dev',
        },
        {
          name: 'og:image',
          content: 'https://www.saiba-tenpura.com/blog/my-portfolio/cover.png',
        },
        {
          name: 'twitter:card',
          content: 'content_summary_large',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          href: '/apple-touch-icon.png',
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
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
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

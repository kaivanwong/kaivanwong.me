export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/algolia',
  ],
  unocss: {
    preflight: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/main.scss',
    '~/styles/prose.scss',
    '~/styles/markdown.scss',
  ],
  content: {
    highlight: {
      theme: 'vitesse-dark',
    },
    markdown: {
      toc: {
        depth: 3,
      },
    },
    documentDriven: true,
  },
  devtools: {
    enabled: true,
    vscode: {},
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  algolia: {
    apiKey: '0ae88ba99e560340ef46e1f3b499b18f',
    applicationId: '7YB0BY4ENZ',
    docSearch: {
      indexName: 'kaivanwong',
    },
  },
})

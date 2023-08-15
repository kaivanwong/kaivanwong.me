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
    apiKey: '49a6122e7bc75c3bf8d51c4d1994cdb6',
    applicationId: 'OJKQO9GOGZ',
    docSearch: {
      indexName: 'kaivanwong.me',
    },
  },
})

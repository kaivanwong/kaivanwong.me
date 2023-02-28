export default defineNuxtConfig({
  modules: [
    '@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt', '@nuxt/devtools',
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
})

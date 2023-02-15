export default defineNuxtConfig({
  modules: [
    '@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  css: [
    '~/styles/main.scss',
    '~/styles/prose.scss',
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
})

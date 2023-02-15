export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt', '@vueuse/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  css: [
    '~/styles/main.scss',
  ],
})

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <header
    fixed z-9999 box-border top-0 inset-x-0 backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" flex
    justify-between items-center p-x-7 h-22
  >
    <nav>
      <nuxt-link select-none outline-none to="/" focusable="false">
        <img v-show="isDark" h-14 rounded src="/logo-dark.svg?url" alt="logo">
        <img v-show="!isDark" h-14 rounded src="/logo.svg?url" alt="logo">
      </nuxt-link>
    </nav>
    <nav grid gap-5 auto-flow-col items-center>
      <nuxt-link v-for="(item, index) in appConfig.nav" :key="index" :to="item.path" flex items-center>
        <div v-if="item.icon === 'i-ri-article-line'" icon-link md:hidden i-ri-article-line />
        <div v-if="item.icon === 'i-ri:bookmark-3-line'" icon-link md:hidden i-ri:bookmark-3-line />
        <div v-if="item.icon === 'i-ri-lightbulb-line'" icon-link md:hidden i-ri-lightbulb-line />

        <span v-if="item.icon" icon-text lt-md:hidden> {{ item.label }}</span>
      </nuxt-link>
      <a
        title="Twitter" href="https://twitter.com/kaivan_wong" target="_blank" lt-md:hidden icon-link
        i-ri-twitter-line
      />
      <a title="Github" href="https://github.com/kaivanwong" target="_blank" lt-md:hidden icon-link i-ri-github-line />
      <dark />
    </nav>
  </header>
  <div h-22 />
</template>

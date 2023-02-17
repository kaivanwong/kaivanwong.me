<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <header
    fixed z-9999 box-border top-0 inset-x-0 backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" flex
    justify-between items-center p-x-7 h-22
  >
    <nav>
      <router-link select-none outline-none to="/" focusable="false">
        <img v-show="isDark" h-14 rounded src="/logo-dark.svg?url" alt="logo">
        <img v-show="!isDark" h-14 rounded src="/logo.svg?url" alt="logo">
      </router-link>
    </nav>
    <nav grid gap-5 auto-flow-col items-center>
      <div icon-link i-ri-article-line md:hidden />
      <router-link
        v-for="(item, index) in appConfig.nav" :key="index" icon-text :to="item.path" lt-md:hidden
        :title="item.label"
      >
        {{ item.label }}
      </router-link>
      <a title="Twitter" href="https://twitter.com/kaivan_wong" target="_blank" icon-link i-ri-twitter-line />
      <a title="Github" href="https://github.com/kaivanwong" target="_blank" icon-link i-ri-github-line />
      <dark />
    </nav>
  </header>
  <div h-22 />
</template>

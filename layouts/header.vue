<script setup lang="ts">

</script>

<template>
  <header
    fixed z-9999 top-0 inset-x-0 backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" flex justify-between
    items-center p-x-8 p-y-6
  >
    <nav>
      <router-link select-none outline-none to="/" focusable="false">
        <img v-show="isDark" h-10 rounded src="/logo-dark.svg?url" alt="logo">
        <img v-show="!isDark" h-10 rounded src="/logo.svg?url" alt="logo">
      </router-link>
    </nav>
    <nav grid gap-5 auto-flow-col items-center>
      <a
        title="Twitter" hidden lg:block href="https://twitter.com/kaivanwong1" target="_blank" icon-link
        i-ri-twitter-line
      />
      <a title="Github" href="https://github.com/kaivanwong" target="_blank" icon-link i-ri-github-line />
      <dark />
    </nav>
  </header>
</template>

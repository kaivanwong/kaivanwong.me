<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <footer mt-10 mb-6 prose m-auto opacity-50>
    <p text-sm>
      <span>Built with</span>
      <a title="Nuxt3" href="https://nuxt.com" target="_blank" m-l-1>Nuxt 3</a>
      <span m-x-1>·</span>
      <span m-r-1>Deploys on</span>
      <a title="Netlify" href="https://www.netlify.com" target="_blank">Netlify</a>
    </p>
    <p text-sm>
      <a title="License" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" mr-2>CC BY-NC-SA 4.0</a>
      <span>© 2022-PRESENT Kaivan Wong</span>
    </p>
    <p v-if="route.path !== '/'" text-sm flex items-center grid gap-4>
      <span>Links: </span>
      <a title="Github" href="https://github.com/kaivanwong" target="_blank" i-simple-icons-github />
      <a title="Twitter" href="https://twitter.com/kaivanwong" target="_blank" i-simple-icons-twitter />
      <a title="Instagram" href="https://github.com/hikaivanwong" target="_blank" i-simple-icons-instagram />
      <a title="Zhihu" href="https://www.zhihu.com/people/kaivanwong" target="_blank" i-simple-icons-zhihu />
      <a title="Bilibili" href="https://space.bilibili.com/190014206" target="_blank" i-simple-icons-bilibili />
    </p>
  </footer>
</template>

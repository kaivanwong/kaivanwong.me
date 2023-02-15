<script setup lang="ts">
useHead({
  title: 'Kaivan Wong',
  meta: [
    { name: 'author', content: 'Kaivan Wong' },
    { hid: 'description', name: 'description', content: 'Personal website, including introduction, blog, demo and other content' },
    { hid: 'keywords', name: 'keywords', content: 'Kaivan, Kaivan Wong, Blog' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@kaivanwong1' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

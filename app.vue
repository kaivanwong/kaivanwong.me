<script setup lang="ts">
useHead({
  title: 'Kaivan Wong',
  meta: [
    { name: 'author', content: 'Kaivan Wong' },
    { hid: 'description', name: 'description', content: 'Personal website, including introduction, blog, demo and other content' },
    { hid: 'keywords', name: 'keywords', content: 'Kaivan, Kaivan Wong, Blog' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@kaivan_wong' },
    { property: 'og:title', content: 'Kaivan Wong' },
    { 'http-equiv': 'pragma', 'content': 'no-cache' },
    { 'http-equiv': 'cache-control', 'content': 'no-cache' },
    { 'http-equiv': 'expires', 'content': '0' },
  ],
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator :height="1" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

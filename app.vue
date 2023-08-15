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
  <NuxtLoadingIndicator :height="1" />
  <Navbar />
  <main px-7 lt-md:py-10 md:py-24>
    <NuxtPage />
  </main>
  <div style="display: none;">
    <span i-simple-icons-github />
    <span i-simple-icons-twitter />
    <span i-simple-icons-instagram />
    <span i-simple-icons-microsoftoutlook />
    <span i-simple-icons-zhihu />
    <span i-simple-icons-bilibili />
    <span i-simple-icons-discord />
  </div>
</template>

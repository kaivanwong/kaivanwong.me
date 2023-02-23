<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8">
    <span font-mono op50>> </span>
    <RouterLink :to="route.path.split('/').slice(0, -1).join('/') || '/'" class="font-mono op50 hover:op75">
      cd ..
    </RouterLink>
  </div>
</template>

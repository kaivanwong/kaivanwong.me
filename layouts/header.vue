<script setup lang="ts">
const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <header>
    <div i-carbon-logo-github text-3xl target="_blank" />
    <div i-carbon:3d-cursor text-3xl />
    <dark />
  </header>
</template>

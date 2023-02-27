<script setup lang="ts">
const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <a
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" class="icon-btn !outline-none flex items-center"
    @click="toggleDark"
  >
    <i class="!w-full !h-full dark:i-ri-moon-line i-ri-sun-line" />
  </a>
</template>

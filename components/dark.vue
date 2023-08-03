<script setup lang="ts">
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" class="icon-link !outline-none flex items-center"
    @click="toggleDark"
  >
    <i class="!w-full !h-full dark:i-uil-moon i-uil-sun" />
  </a>
</template>

<script setup lang="ts">
const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <button
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" icon-btn class="!outline-none"
    @click="toggleDark"
  >
    <div class="dark:i-ri-moon-line i-ri-sun-line" />
  </button>
</template>

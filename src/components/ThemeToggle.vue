<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <i button-link dark:i-carbon-moon i-carbon-sun @click="toggleDark()" />
</template>

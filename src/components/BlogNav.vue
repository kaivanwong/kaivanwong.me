<script lang="ts" setup>
import siteConfig from '../site-config'

defineProps<{
  pathname: string
}>()
</script>

<template>
  <div flex="~ col gap-1 sm:row sm:gap-3 wrap">
    <a
      v-for="nav in siteConfig.blogNavLinks" :key="nav.text" nav-link text-3xl
      :class="pathname === nav.href ? 'opacity-80' : 'opacity-30  hover:opacity-50'" :href="nav.href"
    >
      {{ nav.text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import siteConfig from '../site-config'
import { getLinkTarget } from '../utils/link'
</script>

<template>
  <footer class="w-full mt-18 max-w-3xl px-1.5 op-75 text-sm">
    <hr class="hr-line mx-0 w-full">
    <div v-if="siteConfig.footerNavLinks && siteConfig.footerNavLinks.length > 0" class="flex flex-wrap gap-4 mb-4">
      <template v-for="(link, index) in siteConfig.footerNavLinks" :key="link.text">
        <a :aria-label="`${link.text}`" :target="getLinkTarget(link.href)" class="nav-link" :href="link.href">
          {{ link.text }}
        </a>
        <span v-if="index < siteConfig.footerNavLinks.length - 1"> / </span>
      </template>
    </div>
    <div class="flex flex-wrap text-dark dark:text-white">
      <span class="opacity-70">2023-PRESENT © {{ siteConfig.author }}.</span>
    </div>
  </footer>
</template>

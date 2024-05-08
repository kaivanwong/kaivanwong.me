<script lang="ts" setup>
import siteConfig from '../site-config'
import { getLinkTarget } from '../utils/link'
</script>

<template>
  <footer class="w-full mt-18 pt-4 max-w-3xl op-75 text-sm border-main border-t !border-op-50">
    <div v-if="siteConfig.footer.navLinks && siteConfig.footer.navLinks.length > 0" class="flex flex-wrap gap-4 mb-4">
      <template v-for="(link, index) in siteConfig.footer.navLinks" :key="link.text">
        <a :aria-label="`${link.text}`" :target="getLinkTarget(link.href)" class="nav-link" :href="link.href">
          {{ link.text }}
        </a>
        <span v-if="index < siteConfig.footer.navLinks.length - 1"> / </span>
      </template>
    </div>
    <div class="flex flex-wrap text-dark dark:text-white">
      <span class="opacity-70">2023-PRESENT © {{ siteConfig.author }}.</span>
    </div>
  </footer>
</template>

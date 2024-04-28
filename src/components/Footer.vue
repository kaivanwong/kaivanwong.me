<script lang="ts" setup>
import siteConfig from '../site-config'
import { getLinkTarget } from '../utils/link'
</script>

<template>
  <footer class="w-full mt-18 text-base max-w-3xl px-1.5 op-75">
    <div class="flex flex-wrap gap-x-4 gap-y-2 mb-4">
      <a v-for="link in siteConfig.footerNavLinks" :key="link.text" :aria-label="`${link.text}`" :target="getLinkTarget(link.href)" class="nav-link" :href="link.href">
        {{ link.text }}
      </a>
    </div>
    <div class="flex flex-wrap text-dark dark:text-white">
      <span class="opacity-70">2023-PRESENT ©</span>
      <a class="!nav-link opacity-100 ml-1" href="/" :aria-label="`${siteConfig.author}`">{{ siteConfig.author }}</a>.
    </div>
  </footer>
</template>

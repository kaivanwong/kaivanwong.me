<script lang="ts" setup>
import { onClickOutside, useWindowSize } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import { useScroll } from '../composables/scroll'

import siteConfig from '../site-config'
import { getLinkTarget } from '../utils/link'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = siteConfig.headerNavLinks || []

const socialLinks = computed(() => {
  return siteConfig.hero.socialLinks.filter((link: Record<string, any>) => {
    if (link.header && typeof link.header === 'boolean') {
      return link
    }
    else if (link.header && typeof link.header === 'string') {
      link.icon = link.header.includes('i-') ? link.header : link.icon
      return link
    }
    else {
      return false
    }
  })
})

useScroll('#header')

const menuRef = ref(null)

const menu = ref(false)

function toggleMenu() {
  menu.value = !menu.value
}

const { width } = useWindowSize()

onClickOutside(menuRef, () => {
  if (width.value < 800)
    menu.value = false
})

watchEffect(() => {
  if (width.value > 800)
    menu.value = true
  else
    menu.value = false
})
</script>

<template>
  <header
    id="header"
    class="!fixed bg-transparent z-899 w-screen text-lg h-22 px-6 flex justify-between items-center relative"
  >
    <div class="flex items-center">
      <div v-if="siteConfig.headerLogo" class="header-logo mr-4 sm:mr-8">
        <img img-dark :src="siteConfig.headerLogo.dark.src" :alt="siteConfig.headerLogo.dark.alt">
        <img img-light :src="siteConfig.headerLogo.light.src" :alt="siteConfig.headerLogo.light.alt">
      </div>
      <nav class="sm:flex hidden flex-wrap gap-6 position-initial flex-row">
        <a
          v-for="link in navLinks" :key="link.text" :aria-label="`${link.text}`" :target="getLinkTarget(link.href)"
          nav-link :href="link.href"
        >
          {{ link.text }}
        </a>
      </nav>
      <menu class="sm:hidden inline-block i-ri-menu-2-fill" aria-label="menu" @click="toggleMenu" />
    </div>
    <div class="flex gap-6 sm:gap-8">
      <a
        v-for="link in socialLinks" :key="link.text" :aria-label="`${link.text}`" :class="link.icon" nav-link
        :target="getLinkTarget(link.href)" :href="link.href"
      />

      <a nav-link href="rss.xml" i-ri-rss-line aria-label="RSS" />
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
.header-hide {
  transform: translateY(-100%);
  transition: transform 0.5s ease;
}
</style>

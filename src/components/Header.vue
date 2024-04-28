<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { onClickOutside, useWindowScroll, useWindowSize } from '@vueuse/core'

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

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header
    :class="{ 'backdrop-blur-sm': scroll > 80 }"
    class="!fixed z-899 w-screen text-lg h-22 px-6 flex justify-between items-center relative"
  >
    <div class="flex items-center">
      <div v-if="siteConfig.headerLogo" mr-4 sm:mr-8 class="header-logo">
        <img img-dark :src="siteConfig.headerLogo.dark.src" :alt="siteConfig.headerLogo.dark.alt">
        <img img-light :src="siteConfig.headerLogo.light.src" :alt="siteConfig.headerLogo.light.alt">
      </div>
      <nav
        v-show="menu" ref="menuRef" class="flex bg-main sm:bg-transparent sm:dark:bg-transparent flex-wrap gap-4 sm:gap-6 sm:position-initial absolute z-999 top-15 sm:flex-row
      flex-col sm:p0 p-4 border-1 border-main sm:border-none"
      >
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

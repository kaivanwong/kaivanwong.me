<script lang="ts" setup>
import { onClickOutside, useWindowScroll, useWindowSize } from '@vueuse/core'
import { computed, onMounted, ref, unref, watchEffect } from 'vue'
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

const oldScroll = ref(unref(scroll))

onMounted(() => {
  const headerEl = document.querySelector('#header') as HTMLElement
  if (!headerEl)
    return

  if (document.documentElement.scrollTop > 100)
    headerEl.classList.add('header-bg-blur')

  window.addEventListener('scroll', () => {
    if (scroll.value < 200) {
      headerEl.classList.remove('header-hide')
      return
    }

    if (scroll.value - oldScroll.value > 200) {
      headerEl.classList.add('header-hide')
      oldScroll.value = scroll.value
    }

    if (oldScroll.value - scroll.value > 160) {
      headerEl.classList.remove('header-hide')
      oldScroll.value = scroll.value
    }
  })
})
</script>

<template>
  <header
    id="header"
    :class="{ 'header-bg-blur': scroll > 20 }"
    class="!fixed bg-transparent z-899 w-screen text-lg h-22 px-6 flex justify-between items-center relative"
  >
    <div class="flex items-center">
      <a v-if="siteConfig.headerLogo" href="/" aria-label="Header Logo Image" class="header-logo mr-4 sm:mr-8 cursor-pointer">
        <img img-dark :src="siteConfig.headerLogo.dark.src" :alt="siteConfig.headerLogo.dark.alt">
        <img img-light :src="siteConfig.headerLogo.light.src" :alt="siteConfig.headerLogo.light.alt">
      </a>
      <a v-else href="/" aria-label="Home">Home</a>
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

.header-bg-blur {
  --at-apply: backdrop-blur-sm;
}
</style>

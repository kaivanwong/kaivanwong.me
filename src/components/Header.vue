<script lang="ts" setup>
import { ref } from 'vue'
import siteConfig from '../site-config'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = siteConfig.headerNavLinks || []

const menu = ref(true)

function toggleMenu() {
  menu.value = !menu.value
}
</script>

<template>
  <header>
    <nav max-w-3xl mx-auto h-18 px-6 flex justify-between items-center w-full>
      <ul
        v-if="navLinks.length > 0 && menu" bg-opacity-90 flex gap-4 sm:gap-6 sm:max-w-3xl absolute top-14 bg-main flex-wrap
        sm:position-initial
      >
        <li v-for="link in navLinks" :key="link.text" w-full sm:w-auto>
          <a nav-link :href="link.href">
            {{ link.text }}
          </a>
        </li>
      </ul>
      <i text-lg sm:hidden inline-block i-ri-menu-2-fill @click="toggleMenu" />
      <div text-lg flex gap-4 sm:gap-6>
        <a nav-link href="rss.xml" i-ri-rss-line />
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

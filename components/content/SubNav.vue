<script setup lang="ts">
import { useRoute } from 'vue-router'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
</script>

<template>
  <div class="prose m-auto mb-8 select-none op100!">
    <div mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <NuxtLink to="/posts" class="!border-none" :class="route.path === '/posts' ? activeStyle : inactiveStyle">
        Blog
      </NuxtLink>
      <NuxtLink to="/talks" class="!border-none" :class="route.path === '/talks' ? activeStyle : inactiveStyle">
        Talks
      </NuxtLink>
      <NuxtLink to="/notes" class="!border-none" :class="route.path === '/notes' ? activeStyle : inactiveStyle">
        Notes
      </NuxtLink>
    </div>
  </div>
</template>

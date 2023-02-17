<script setup lang="ts">
const route = useRoute()

const inactiveStyle = 'opacity-20 hover:opacity-50'

const appConfig = useAppConfig()
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <div mb-0 flex="~ gap2 sm:gap3 wrap" text-xl sm:text-3xl>
      <router-link
        v-for="(item, index) in appConfig.nav" :key="index" :to="item.path" class="!border-none !font-400"
        :class="route.path === item.path ? '' : inactiveStyle"
      >
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

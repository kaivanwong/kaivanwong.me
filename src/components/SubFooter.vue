<script lang="ts" setup>
withDefaults(defineProps<{
  showSourceLink?: boolean
  showBack?: boolean
}>(), {
  showSourceLink: false,
  showBack: true,
})

function back() {
  window.history.back()
}
</script>

<template>
  <div v-if="showSourceLink" flex="~ items-center" text-main opacity-50 font-mono>
    <span mr-2 text-lg>></span>
    <a prose-link @click="back">Open Source in GitHub</a>
  </div>
  <div v-if="showBack" flex="~ items-center" text-main opacity-50 font-mono>
    <span mr-2 text-lg>></span>
    <a prose-link @click="back">cd ..</a>
  </div>
</template>

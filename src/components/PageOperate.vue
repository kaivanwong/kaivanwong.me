<script lang="ts" setup>
const props = withDefaults(defineProps<{
  showSourceLink?: boolean
  showBack?: boolean
  pathname?: string
}>(), {
  showSourceLink: false,
  showBack: true,
  pathname: '',
})
</script>

<template>
  <div mt-8>
    <div v-if="showSourceLink" flex="~ items-center" text-main opacity-50 font-mono>
      <span mr-2 text-lg>></span>
      <a prose-link :href="`https://github.com/kaivanwong/kaivanwong.me/src/content${props.pathname}`">Open Source in GitHub</a>
    </div>
    <div v-if="showBack" flex="~ items-center" text-main opacity-50 font-mono>
      <span mr-2 text-lg>></span>
      <a prose-link href="javascript:history.back(-1)">cd ..</a>
    </div>
  </div>
</template>

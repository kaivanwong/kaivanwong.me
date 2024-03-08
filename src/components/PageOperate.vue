<script lang="ts" setup>
withDefaults(defineProps<{
  showShare?: boolean
  showBack?: boolean
  url?: URL
}>(), {
  showShare: false,
  showBack: true,
})

const shareLinks = [
  {
    text: 'Twitter',
    icon: 'i-simple-icons-x',
    href: 'https://twitter.com/intent/tweet?url=',
  },
  {
    text: 'Mail',
    href: 'mailto:?subject=See%20this%20post&body=',
  },
]
</script>

<template>
  <div>
    <div v-if="showShare" flex="~ gap-4 items-start flex-wrap" text-main opacity-50 font-mono>
      <span text-lg>></span>
      <span>share to</span>
      <a v-for="link in shareLinks" :key="link.text" prose-link :href="link.href + url">
        <i v-if="link.icon" text-2.8 :class="link.icon" mr-0.8 />{{ link.text }}
      </a>
    </div>
    <div v-if="showBack" flex="~ gap-4 items-center " text-main opacity-50 font-mono>
      <span text-lg>></span>
      <a prose-link href="javascript:history.back(-1)">cd ..</a>
    </div>
  </div>
</template>

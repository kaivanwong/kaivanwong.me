<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

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

const { y: scroll } = useWindowScroll()

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div w-full font-mono opacity-50 text-main>
    <div v-if="scroll" flex="~ gap-2 items-center" mb-2>
      <i i-ri-arrow-right-s-line />
      <span prose-link @click="toTop()">Scroll to top</span>
    </div>
    <div v-if="showShare" flex="~ gap-2 items-center flex-wrap" mb-2>
      <i i-ri-arrow-right-s-line />
      <span mr-1>share to</span>
      <template v-for="(link, index) in shareLinks" :key="link.text">
        <a prose-link lh-tight :href="link.href + url">
          <i v-if="link.icon" text-2.4 :class="link.icon" mr-0.8 />
          <span>{{ link.text }}</span>
        </a>
        <span v-if="index < shareLinks.length - 1">·</span>
      </template>
    </div>
    <div v-if="showBack" flex="~ gap-2 items-center">
      <i i-ri-arrow-right-s-line />
      <a prose-link href="javascript:history.back(-1)">cd ..</a>
    </div>
  </div>
</template>

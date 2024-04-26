<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

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
  <div w-full opacity-50 text-main>
    <div v-if="showShare" flex="~ gap-2 items-center flex-wrap" mb-2>
      <i i-ri-arrow-right-s-line />
      <span mr-1>Share to</span>
      <template v-for="(link, index) in shareLinks" :key="link.text">
        <a prose-link lh-tight :href="link.href + url" :aria-label="`Share to ${link.text}`">
          <i v-if="link.icon" text-2.5 :class="link.icon" mr-0.8 />
          <span>{{ link.text }}</span>
        </a>
        <span v-if="index < shareLinks.length - 1">/</span>
      </template>
    </div>
    <div v-if="scroll > 1000" flex="~ gap-2 items-center" mb-2>
      <i i-ri-arrow-right-s-line />
      <button prose-link aria-label="Scroll to Top" @click="toTop()">
        Scroll to top
      </button>
    </div>
    <div v-if="showBack" flex="~ gap-2 items-center">
      <i i-ri-arrow-right-s-line />
      <a font-mono prose-link href="javascript:history.back(-1)" aria-label="cd ..">cd ..</a>
    </div>
  </div>
</template>

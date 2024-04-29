import { useWindowScroll } from '@vueuse/core'
import { onMounted, ref } from 'vue'

export function useScroll(dom: string) {
  const { y: scroll } = useWindowScroll()

  const oldScroll = ref(0)

  function hiddenEl(el: HTMLElement) {
    el.classList.add('header-hide')
    oldScroll.value = scroll.value
  }

  function showEl(el: HTMLElement) {
    el.classList.remove('header-hide')
    oldScroll.value = scroll.value
  }

  onMounted(() => {
    const headerEl = document.querySelector(dom) as HTMLElement
    if (!headerEl)
      return

    if (document.documentElement.scrollTop > 100)
      headerEl.classList.add('!backdrop-blur-sm')

    window.addEventListener('scroll', () => {
      if (scroll.value < headerEl.clientHeight)
        headerEl.classList.remove('!backdrop-blur-sm')
      else
        headerEl.classList.add('!backdrop-blur-sm')

      if (scroll.value < 160) {
        showEl(headerEl)
        return
      }
      if (scroll.value - oldScroll.value > 160)
        hiddenEl(headerEl)

      if (oldScroll.value - scroll.value > 160)
        showEl(headerEl)
    })
  })
}

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
})

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)

const posts = ref<ParsedContent[]>([])

onBeforeMount(async () => {
  const pages = await queryContent('/').find()
  posts.value = pages.filter(i => i._file?.startsWith('posts') && i.date)
    .filter(i => i._file?.endsWith('.md') && i.type === props.type)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
})
</script>

<template>
  <article>
    <ul>
      <template v-for="article, index in posts" :key="article._path">
        <div v-if="!isSameYear(article.date, posts[index - 1]?.date)" relative h20 pointer-events-none>
          <span style="color:var(--prose-color);" text-8em op10 absolute top--2rem font-bold>{{
            getYear(article.date) }}</span>
        </div>
        <NuxtLink class="item block font-normal mb-6 mt-2 no-underline" :to="article._path">
          <li class="no-underline">
            <div text-lg leading-1.2em>
              <span align-middle>{{ article.title }}</span>
            </div>
            <div time opacity-50 text-sm>
              {{ useDateFormat(article.date, 'MMM DD').value }}
              <span v-if="article.duration" op80>· {{ article.duration }}</span>
            </div>
          </li>
        </NuxtLink>
      </template>
      <template v-if="posts.length === 0">
        <Empty />
      </template>
    </ul>
  </article>
</template>

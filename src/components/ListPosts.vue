<script lang="ts" setup>
defineProps<{
  list: {
    id: string
    slug: string
    body: string
    data: Record<string, any>
    collection: string
    render: any
  }[]
  showBack?: boolean
}>()

function getDate(date: string) {
  return new Date(date).toISOString()
}

function back() {
  window.history.back()
}
</script>

<template>
  <ul py-10>
    <template v-if="!list || list.length === 0">
      <div p-6 opacity-50>
        nothing here yet.
      </div>
    </template>
    <li v-for="posts in list " :key="posts.data.title" nav-link w-full flex items-center>
      <a text-lg lh-tight flex="~ col gap-2" :href="`/posts/${posts.slug}`">
        <div flex="~ col md:row gap-2 md:items-center">
          <div flex="~ items-center"><i v-if="posts.data.draft" mr-1 i-carbon-rule-draft />{{ posts.data.title }}</div>
          <div opacity-50 text-sm ws-nowrap flex="~ gap-1 items-center">
            <time :datetime="getDate(posts.data.date)">{{ posts.data.date.split(',')[0] }}</time>
            <span v-if="posts.data.duration">· {{ posts.data.duration }}</span>
            <span v-if="posts.data.tag">· {{ posts.data.tag }}</span>
            <span v-if="posts.data.lang.includes('zh')">· 中文</span>
          </div>
        </div>
        <div opacity-50 text-sm>{{ posts.data.description }}</div>
      </a>
    </li>
  </ul>

  <template v-if="showBack">
    <div flex="~ items-center">
      <a prose-link text-main @click="back"><i i-carbon-arrow-left vertical-mid mr-1 />Back to home</a>
    </div>
  </template>
</template>

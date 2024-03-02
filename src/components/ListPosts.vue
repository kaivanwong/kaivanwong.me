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
}>()

function getDate(date: string) {
  return new Date(date).toISOString()
}
</script>

<template>
  <ul>
    <template v-if="!list || list.length === 0">
      <div p-6 opacity-50>
        nothing here yet.
      </div>
    </template>
    <li v-for="posts in list " :key="posts.data.title" nav-link w-full flex items-center>
      <a text-lg lh-tight flex="~ col gap-2" :href="`/posts/${posts.slug}`">
        <div flex="~ col md:row gap-2 md:items-center">
          <div>{{ posts.data.title }}</div>
          <div opacity-50 text-sm ws-nowrap flex="~ gap-1 items-center">
            <time :datetime="getDate(posts.data.date)">{{ posts.data.date }}</time>
            <span v-if="posts.data.duration">· {{ posts.data.duration }}</span>
            <span v-if="posts.data.tag">· {{ posts.data.tag }}</span>
          </div>
        </div>
        <div opacity-50 text-sm>{{ posts.data.description }}</div>
      </a>
    </li>
  </ul>
</template>

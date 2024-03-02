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
</script>

<template>
  <ul>
    <template v-if="!list || list.length === 0">
      <div p-6 opacity-50>
        nothing here yet.
      </div>
    </template>
    <li v-for="post in list" :key="post.data.title" nav-link w-full flex items-center>
      <a text-lg lh-tight :href="`/posts/${post.slug}`">
        <div>{{ post.data.title }}</div>
        <div opacity-50 text-sm>{{ post.data.excerpt }}</div>
      </a>
    </li>
  </ul>
</template>

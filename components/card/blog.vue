<script setup lang="ts">
import type { Blog } from '~/types/blog'

const props = defineProps<{
  type?: string
  blog?: Blog[]
}>()

const blog = computed(() => props.blog || [])
</script>

<template>
  <ul>
    <template v-if="!blog.length">
      <div pt-2 pb-10 op50>
        nothing here yet
      </div>
    </template>
  </ul>
</template>

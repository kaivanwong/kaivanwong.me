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
      <div py2 op50>
        nothing here yet
      </div>
    </template>
  </ul>
</template>

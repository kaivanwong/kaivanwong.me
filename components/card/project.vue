<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  type?: string
  projects?: Project[]
}>()

const projects = computed(() => props.projects || [])
</script>

<template>
  <ul>
    <template v-if="!projects.length">
      <div py2 op50>
        nothing here yet
      </div>
    </template>
  </ul>
</template>

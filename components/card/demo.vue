<script setup lang="ts">
import type { Demo } from '~/types/demo'

const props = defineProps<{
  type?: string
  demos?: Demo[]
}>()

const demos = computed(() => props.demos || [])
</script>

<template>
  <ul>
    <template v-if="!demos.length">
      <div pt-2 pb-10 op50>
        nothing here yet
      </div>
    </template>
  </ul>
</template>

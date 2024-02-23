<script lang="ts" setup>
import { type PropType } from 'vue';

defineProps({
  list: {
    type: Array as PropType<{ title: string; description: string; icon: string }[]>,
    required: true,
  },
})
</script>

<template>
  <ul grid="~ cols-1 md:cols-2 gap-4">
    <li container-link w-xs v-for="project in list" :key="project.title">
      <a flex items-center>
        <div ml-2 mr-4>
          <i text-4xl inline-block :class="project.icon || 'i-carbon-unknown'" />
        </div>
        <div>
          <h3 text-lg hover:text-main>{{ project.title }}</h3>
          <span opacity-50 text-sm>{{ project.description }}</span>
        </div>
      </a>
    </li>
  </ul>
</template>

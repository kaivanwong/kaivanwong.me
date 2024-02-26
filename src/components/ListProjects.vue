<script lang="ts" setup>
defineProps<{
  list: {
    title: string;
    description: string;
    icon?: string;
  }[];
}>()
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <li container-link w-full flex items-center v-for="project in list" :key="project.title">
      <a flex items-center>
        <div ml-2 mr-4 pt-2>
          <i text-4xl inline-block :class="project.icon || 'i-carbon-unknown'" />
        </div>
        <div font-normal lh-tight>
          <h3 text-lg hover:text-main>{{ project.title }}</h3>
          <span opacity-50 text-sm>{{ project.description }}</span>
        </div>
      </a>
    </li>
  </ul>
</template>

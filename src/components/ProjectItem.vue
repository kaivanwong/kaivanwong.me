<script lang="ts" setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  link: String,
})
</script>

<template>
  <div flex items-center>
    <div>
      <i w-xl :class="icon" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

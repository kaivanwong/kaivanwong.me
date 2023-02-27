<script setup>
useHead({
  title: 'Projects - Kaivan Wong',
})

const projects = []
</script>

<template>
  <article class="prose m-auto">
    <h1 mb-0>
      Projects
    </h1>
    <p class="opacity-50 !-mt-6 italic">
      These are projects that I have developed independently or contributed to
    </p>
    <ul>
      <template v-if="!projects.length">
        <nothing />
      </template>
    </ul>
  </article>
</template>

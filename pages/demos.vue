<script setup>
useHead({
  title: 'Demos - Kaivan Wong',
})

const demos = []
</script>

<template>
  <article class="prose m-auto">
    <h1 mb-0>
      Demos
    </h1>
    <p class="opacity-50 !-mt-6 italic">
      A list of possible features or demos
    </p>
    <ul>
      <template v-if="!demos.length">
        <nothing />
      </template>
    </ul>
  </article>
</template>

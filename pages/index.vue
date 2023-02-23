<script setup>
useHead({
  title: 'Kaivan Wong',
})
</script>

<template>
  <article>
    <div style="display: none;">
      <span i-simple-icons-github />
      <span i-simple-icons-twitter />
      <span i-simple-icons-microsoftoutlook />
    </div>
    <ContentDoc class="prose m-auto">
      <template #not-found>
        <h2>Ooops!</h2>
        <p>Sorry, the page you are looking for could not be found.</p>
      </template>
    </ContentDoc>
  </article>
</template>

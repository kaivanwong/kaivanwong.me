<script setup>
useHead({
  title: 'Demos | Kaivan Wong',
})
</script>

<template>
  <article prose m-auto>
    <ContentDoc>
      <template #not-found>
        <h2>Ooops!</h2>
        <p>Sorry, the page you are looking for could not be found.</p>
      </template>
    </ContentDoc>
    <Back />
  </article>
</template>

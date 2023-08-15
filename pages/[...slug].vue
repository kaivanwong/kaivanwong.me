<template>
  <article class="prose m-auto">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </template>
      <template #empty>
        <p>Article is empty</p>
      </template>
      <template #not-found>
        <h2>Ooops!</h2>
        <p>Sorry, the page you are looking for could not be found.</p>
      </template>
    </ContentDoc>
    <Back />
    <Copyright />
  </article>
</template>

<script setup>
useHead({
  title: 'Reading - Kaivan Wong',
})
</script>

<template>
  <article class="prose m-auto">
    <h1 mb-0>
      Reading
    </h1>
    <p class="opacity-50 !-mt-6 italic">
      Keep track of the books I've read or am reading.
    </p>
    <ContentList path="/reading">
      <template #default="{ list }">
        <ul>
          <template v-for="article in list" :key="article._path">
            <router-link class="block font-normal mb-6 mt-2 no-underline" :to="article._path">
              <li class="no-underline">
                <div text-lg leading-1.2em>
                  <span align-middle>{{ article.title }}</span>
                </div>
                <div time opacity-50 text-sm>
                  {{ useDateFormat(article.date, 'MMM DD').value }}
                </div>
              </li>
            </router-link>
          </template>
        </ul>
      </template>
      <template #not-found>
        <nothing />
      </template>
    </ContentList>
  </article>
</template>

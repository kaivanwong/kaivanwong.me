<script setup lang="ts">
useHead({
  title: 'Blog - Kaivan Wong',
})

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <article class="prose m-auto">
    <h1 mb-0>
      Blog
    </h1>
    <p class="opacity-50 !-mt-6 italic">
      Here is a list of my blogs, including work and life :)
    </p>
    <ContentList path="/blog">
      <template #default="{ list }">
        <ul>
          <template v-for="article, index in list" :key="article._path">
            <div v-if="!isSameYear(article.date, list[index - 1]?.date)" relative h20 pointer-events-none>
              <span style="color:var(--prose-color);" text-8em op10 absolute left--3rem top--2rem font-bold>{{
                getYear(article.date) }}</span>
            </div>
            <router-link class="item block font-normal mb-6 mt-2 no-underline" :to="article._path">
              <li class="no-underline">
                <div text-lg leading-1.2em>
                  <span align-middle>{{ article.title }}</span>
                </div>
                <div time opacity-50 text-sm>
                  {{ useDateFormat(article.date, 'MMM DD').value }}
                  <span v-if="article.duration" op80>· {{ article.duration }}</span>
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

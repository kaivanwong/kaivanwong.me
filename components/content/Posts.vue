<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: '',
  },
})

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)

console.log(await queryContent('/').find())
</script>

<template>
  <SubNav />
  <article class="prose m-auto">
    <ContentList path="/posts">
      <template #default="{ list }">
        <ul>
          <template v-for="article, index in list" :key="article._path">
            <div v-if="!isSameYear(article.date, list[index - 1]?.date)" relative h20 pointer-events-none>
              <span style="color:var(--prose-color);" text-8em op10 absolute top--2rem font-bold>{{
                getYear(article.date) }}</span>
            </div>
            <NuxtLink class="item block font-normal mb-6 mt-2 no-underline" :to="article._path">
              <li class="no-underline">
                <div text-lg leading-1.2em>
                  <span align-middle>{{ article.title }}</span>
                </div>
                <div time opacity-50 text-sm>
                  {{ useDateFormat(article.date, 'MMM DD').value }}
                  <span v-if="article.duration" op80>· {{ article.duration }}</span>
                </div>
              </li>
            </NuxtLink>
          </template>
        </ul>
      </template>
      <template #not-found>
        <Nothing />
      </template>
    </ContentList>
  </article>
</template>

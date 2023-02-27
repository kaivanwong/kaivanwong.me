<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const appConfig = useAppConfig()

useHead({
  title: `${appConfig.blogType[0].label} - Kaivan Wong`,
})

const active = ref(appConfig.blogType[0].value)

const query: QueryBuilderParams = { path: '/posts', where: [{ tag: active.value }] }

const blogTypeChange = (e: any) => {
  active.value = e.value
  useHead({
    title: `${e.label} - Kaivan Wong`,
  })
}
</script>

<template>
  <article class="prose m-auto">
    <div class="prose m-auto mb-8 select-none">
      <div mb-0 flex="~ gap2 sm:gap3 wrap" text-xl sm:text-3xl>
        <a
          v-for="(item, index) in appConfig.blogType" :key="index" class="!border-none !font-400 cursor-pointer"
          :class="active === item.value ? '' : 'opacity-20 hover:opacity-50'" @click="blogTypeChange(item)"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
    <ContentList :query="query">
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

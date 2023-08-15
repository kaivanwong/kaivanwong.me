<template>
  <header
    fixed box-border top-0 inset-x-0 backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" md:h-28 lt-md:h-22
    flex justify-center items-center
  >
    <div flex justify-between items-center p-x-7 w-5xl>
      <nav>
        <NuxtLink flex select-none outline-none to="/" focusable="false">
          <img lt-md="h-9 rounded-24" md="h-12 rounded-2" src="/logo.svg?url" alt="logo">
        </NuxtLink>
      </nav>
      <nav grid lt-md:gap-4 md:gap-8 auto-flow-col items-center>
        <NuxtLink to="/posts" flex items-center>
          <div icon-link md:hidden i-ri-article-line />
          <span icon-text lt-md:hidden>Blog</span>
        </NuxtLink>
        <NuxtLink to="/projects" flex items-center>
          <div icon-link md:hidden i-ri:bookmark-3-line />
          <span icon-text lt-md:hidden>Projects</span>
        </NuxtLink>
        <NuxtLink to="/talks" flex items-center>
          <div icon-link md:hidden i-ri:book-2-line />
          <span icon-text lt-md:hidden>Talks</span>
        </NuxtLink>
        <NuxtLink to="/demos" flex items-center>
          <div icon-link md:hidden i-ri:book-2-line />
          <span icon-text lt-md:hidden>Demos</span>
        </NuxtLink>
        <NuxtLink to="/notes" flex items-center>
          <div icon-link md:hidden i-ri:book-2-line />
          <span icon-text lt-md:hidden>Notes</span>
        </NuxtLink>
        <AlgoliaDocSearch />
        <a title="Twitter" href="https://twitter.com/kaivan_wong" target="_blank" lt-md:hidden icon-link i-uil-twitter />
        <a title="Github" href="https://github.com/kaivanwong" target="_blank" lt-md:hidden icon-link i-uil-github />
        <Dark />
      </nav>
    </div>
  </header>
  <div h-22 />
</template>

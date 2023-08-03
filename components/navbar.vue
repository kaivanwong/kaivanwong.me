<template>
  <header
    fixed z-9999 box-border top-0 inset-x-0 backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" md:h-28 lt-md:h-22 flex
    justify-center items-center
  >
    <div flex justify-between items-center p-x-7 w-5xl>
      <nav>
        <nuxt-link flex select-none outline-none to="/" focusable="false">
          <img lt-md="h-9 rounded-24" md="h-12 rounded-2" src="/logo.svg?url" alt="logo">
        </nuxt-link>
      </nav>
      <nav grid gap-8 auto-flow-col items-center>
        <nuxt-link to="/posts" flex items-center>
          <div icon-link md:hidden i-ri-article-line />
          <span icon-text lt-md:hidden>Blog</span>
        </nuxt-link>
        <nuxt-link to="/projects" flex items-center>
          <div icon-link md:hidden i-ri:bookmark-3-line />
          <span icon-text lt-md:hidden>Projects</span>
        </nuxt-link>
        <nuxt-link to="/talks" flex items-center>
          <div icon-link md:hidden i-ri:book-2-line />
          <span icon-text lt-md:hidden>Talks</span>
        </nuxt-link>
        <nuxt-link to="/demos" flex items-center>
          <div icon-link md:hidden i-ri:book-2-line />
          <span icon-text lt-md:hidden>Demos</span>
        </nuxt-link>
        <nuxt-link to="/notes" flex items-center>
          <div icon-link md:hidden i-ri:book-2-line />
          <span icon-text lt-md:hidden>Notes</span>
        </nuxt-link>
        <a title="Twitter" href="https://twitter.com/kaivan_wong" target="_blank" lt-md:hidden icon-link i-uil-twitter />
        <a title="Github" href="https://github.com/kaivanwong" target="_blank" lt-md:hidden icon-link i-uil-github />
        <dark />
      </nav>
    </div>
  </header>
  <div h-22 />
</template>

<template>
  <header
    fixed z-9999 box-border top-0 inset-x-0 backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" flex
    justify-between items-center p-x-7 h-22
  >
    <nav>
      <nuxt-link select-none outline-none to="/" focusable="false">
        <img v-show="isDark" h-14 rounded src="/logo-dark.svg?url" alt="logo">
        <img v-show="!isDark" h-14 rounded src="/logo.svg?url" alt="logo">
      </nuxt-link>
    </nav>
    <nav grid gap-5 auto-flow-col items-center>
      <nuxt-link to="/posts" flex items-center>
        <div icon-link md:hidden i-ri-article-line />

        <span icon-text lt-md:hidden>Blog</span>
      </nuxt-link>
      <nuxt-link to="/posts?tag=note" lt-md:hidden flex items-center>
        <span icon-text>Notes</span>
      </nuxt-link>
      <nuxt-link to="/posts?tag=book" lt-md:hidden flex items-center>
        <span icon-text>Reading</span>
      </nuxt-link>
      <nuxt-link to="projects" flex items-center>
        <div icon-link md:hidden i-ri:bookmark-3-line />

        <span icon-text lt-md:hidden>Projects</span>
      </nuxt-link>
      <nuxt-link to="demos" flex items-center>
        <div icon-link md:hidden i-ri-lightbulb-line />

        <span icon-text lt-md:hidden>Demos</span>
      </nuxt-link>

      <a
        title="Twitter" href="https://twitter.com/kaivan_wong" target="_blank" lt-md:hidden icon-link
        i-ri-twitter-line
      />
      <a title="Github" href="https://github.com/kaivanwong" target="_blank" lt-md:hidden icon-link i-ri-github-line />
      <dark />
    </nav>
  </header>
  <div h-22 />
</template>

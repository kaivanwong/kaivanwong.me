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
      <nuxt-link to="/blog" flex items-center>
        <div icon-link md:hidden i-ri-article-line />

        <span icon-text lt-md:hidden>Blog</span>
      </nuxt-link>
      <nuxt-link to="/reading" flex items-center>
        <div icon-link md:hidden i-ri:book-2-line />
        <span icon-text lt-md:hidden>Reading</span>
      </nuxt-link>
      <nuxt-link to="/projects" flex items-center>
        <div icon-link md:hidden i-ri:bookmark-3-line />

        <span icon-text lt-md:hidden>Projects</span>
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

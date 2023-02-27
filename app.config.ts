export default defineAppConfig({
  nav: [
    {
      label: 'Blog',
      path: '/posts',
      icon: 'i-ri-article-line',
    },
    {
      label: 'Notes',
      path: '/posts?tag=note',
      icon: '',
    },
    {
      label: 'Reading',
      path: '/posts?tag=book',
      icon: '',
    },
    {
      label: 'Projects',
      path: '/projects',
      icon: 'i-ri:bookmark-3-line',
    },
    {
      label: 'Demos',
      path: '/demos',
      icon: 'i-ri-lightbulb-line',
    },
  ],
  blogType: {
    blog: 'Blog',
    note: 'Notes',
    book: 'Reading',
  },
})

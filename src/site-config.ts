const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Kaivan Wong',
  subtitle: 'My personal blog and portfolio.',
  description: 'My personal blog and portfolio, it\'s developed by Astro.',
  image: {
    src: '/dante-preview.jpg',
    alt: 'Dante - Astro.js and Tailwind CSS theme',
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
  ],
  hero: {
    title: 'Kaivan Wong',
    text: `<p>Hi there</p>
    <p>I am Kaivan Wong, a software engineer with perfectionism (it's not always good :p)</p>
    <p>Currently focus on Web and mobile app development, including <a prose-link href="">Vue</a>, <a prose-link href="">Vite</a>, <a prose-link href="">Nuxt</a>, <a prose-link href="">React</a>, <a prose-link href="">Next</a>, <a prose-link href="">UnoCSS</a>, <a prose-link href="">Tailwind CSS</a>, <a prose-link href="">UniAPP</a>, <a prose-link href="">Flutter</a> and others.</p>
    <p>I'm passionate about using technology to realize ideas, and technology ultimately has to serve the product. Expect to create excellent products and services and excellent user experience.</p>
     `,
    image: {
      src: 'hero.jpg',
      alt: '',
    },
    email: 'kaivanwong@outlook.com',
    socialLinks: [
      {
        text: 'Github',
        href: 'https://github.com/kaivanwong',
        icon: 'i-simple-icons-github',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/kaivanwong/',
        icon: 'i-simple-icons-x',
      },
      {
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/kaivan-wong-a42441291/',
        icon: 'i-simple-icons-linkedin',
      },
      {
        text: 'Instagram',
        href: 'https://www.instagram.com/hikaivanwong',
        icon: 'i-simple-icons-instagram',
      },
      {
        text: 'Youtube',
        href: 'https://youtube.com/@kaivanwong',
        icon: 'i-simple-icons-youtube',
      },
      {
        text: 'Bilibili',
        href: 'https://space.bilibili.com/19001420',
        icon: 'i-simple-icons-bilibili',
      },
      {
        text: '知乎',
        href: 'https://www.zhihu.com/people/kaivanwong',
        icon: 'i-simple-icons-zhihu',
      },
      {
        text: '微博',
        href: 'https://weibo.com/u/5605059021',
        icon: 'i-simple-icons-sinaweibo',
      },
    ],
  },
  blogNavLinks: [
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Notes',
      href: '/notes',
    },
    {
      text: 'Reading',
      href: '/reading',
    },
  ],
  projects: [
    {
      title: 'Ant Design Ecosystem',
      projects: [
        {
          text: 'Antdv Pro',
          description: 'An antdv-based middle and background management system.',
          icon: 'i-ant-design-ant-design-outlined',
          href: 'https://github.com/antdv-pro/antdv-pro',
        },
      ],
    },
    {
      title: 'Opuntia Ecosystem',
      projects: [
        {
          text: 'Opuntia',
          description: 'Vite + Vue 3 SPA web starter template.',
          icon: 'i-mdi-cactus',
          href: 'https://github.com/opuntia-dev/opuntia',
        },
        {
          text: 'Opuntia Pro',
          description: 'An enterprise web application based on Opuntia + Element Plus.',
          icon: 'i-tabler-cactus-filled',
          href: 'https://github.com/opuntia-dev/opuntia-pro',
        },
      ],
    },
    {
      title: 'Product Templates',
      projects: [
        {
          text: '小友优选',
          description: '基于 Uniapp + uView UI 开发的社区电商微信小程序。',
          icon: 'i-ri-shopping-bag-line',
          href: 'https://github.com/kaivanwong/ushop',
        },
        {
          text: '扫码自助洗车',
          description: '基于 TypeScript 的自助洗车微信小程序。',
          icon: 'i-mdi-car-wash',
          href: 'https://github.com/kaivanwong/washer',
        },
        {
          text: 'Vitesse Astro Theme',
          description: 'Vitesse for Astro blog theme, supports Vue and UnoCSS.',
          icon: 'i-carbon-campsite',
          href: 'https://github.com/kaivanwong/vitesse-astro-theme',
        },
      ],
    },
    {
      title: 'CLI',
      projects: [
        {
          text: 'changelogiter',
          description: 'Generate changelog in anywhere, it\'s look like changelogithub.',
          icon: 'i-ri-file-list-2-line',
          href: 'https://github.com/kaivanwong/changelogiter',
        },
      ],
    },
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Sponsors',
      href: '/sponsors',
    },
    {
      text: 'Business Cooperation',
      href: 'mailto:kaivanwong@outlook.me',
    },
  ],
  postsPerPage: 8,
  projectsPerPage: 8,
}

export default siteConfig

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
    text: `<p>I'm a front-end engineer with perfectionism (it's not always good :p).I'm working on an open source project called <a target="_blank" prose-link href="https://stacknax.com">Stack Nax 💚</a>, and often using the JavaScript, TypeScript, Rust to develop software.</p>
        <p>If you have any questions, please email me at <a prose-link href="mailto:kaivanwong@outlook.com">kaivanwong@outlook.com</a>.</p>`,
    image: {
      src: 'hero.jpg',
      alt: '',
    },
    links: [
      {
        text: 'About Me',
        href: '/about',
      },
    ],
  },
  socialLinks: [
    {
      text: 'Github',
      href: 'https://github.com/kaivanwong',
    },
    {
      text: 'X',
      href: 'https://twitter.com/kaivanwong/',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/kaivan-wong-a42441291/',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/hikaivanwong',
    },
    {
      text: 'Bilibili',
      href: 'https://space.bilibili.com/19001420',
    },
    {
      text: '知乎',
      href: 'https://www.zhihu.com/people/kaivanwong',
    },
    {
      text: '微博',
      href: 'https://weibo.com/u/5605059021',
    },
  ],
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

export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Kaivan Wong',
  subtitle: 'My personal blog and portfolio.',
  description: 'My personal blog and portfolio, it\'s developed by Vitesse Theme for Astro.',
  image: {
    src: '/hero.png',
    alt: 'Kaivan Wong',
  },
  email: 'kaivanwong@outlook.com',
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
    {
      text: 'Talks',
      href: '/talks',
    },
  ],
  hero: {
    title: 'Kaivan Wong',
    text: `<p>Hi there</p>
    <p>I am Kaivan Wong, a software engineer with perfectionism (it's not always good :p)</p>
    <p>Currently focus on Web and mobile app development, including <a href="">Vue</a>, <a href="">Vite</a>, <a href="">Nuxt</a>, <a href="">React</a>, <a href="">Next</a>, <a href="">UnoCSS</a>, <a href="">Tailwind CSS</a>, <a href="">UniAPP</a>, <a href="">Flutter</a> and others.</p>
    <p>I'm passionate about using technology to realize ideas, and technology ultimately has to serve the product. Expect to create excellent products and services and excellent user experience.</p>
     `,
    image: {
      src: '/hero.png',
      alt: '',
    },
    socialLinks: [
      {
        text: 'Github',
        href: 'https://github.com/kaivanwong',
        icon: 'i-simple-icons-github',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/kaivanwong',
        icon: 'i-simple-icons-x',
      },
      {
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/kaivan-wong-a42441291',
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
  pageNavLinks: [
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Talks',
      href: '/talks',
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
          text: 'Opuntia Enterprise',
          description: 'An enterprise web application based on Opuntia + Element Plus.',
          icon: 'i-tabler-cactus-filled',
          href: 'https://github.com/opuntia-dev/opuntia-enterprise',
        },
      ],
    },
    {
      title: 'Stack Nax Ecosystem',
      projects: [],
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
          text: 'Vitesse Theme for Astro',
          description: 'Vitesse theme for Astro blog, supports Vue and UnoCSS.',
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
      text: 'Contact',
      href: 'mailto:kaivanwong@outlook.me',
    },
    {
      text: 'Sponsor',
      href: '/sponsor',
    },
    {
      text: 'Blog Theme',
      href: 'https://github.com/kaivanwong/vitesse-astro-theme',
    },
    {
      text: 'About Me',
      href: '/about',
    },
  ],
}

export default siteConfig

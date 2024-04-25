export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Kaivan Wong',
  subtitle: 'My personal website, incliuding blog and portfolio.',
  description: 'My personal website, incliuding blog and portfolio, it\'s developed by Vitesse Theme for Astro.',
  image: {
    src: '/favicon.png',
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
    <p>I'm Kaivan Wong, a software engineer with perfectionism (it's not always good :p)</p>
     `,
    image: {
      src: '/hero.png',
      alt: 'Hero image',
    },
    imageWithDark: {
      src: '/hero-dark.png',
      alt: 'Hero image with dark mode',
    },
    socialLinks: [
      {
        text: 'Github',
        href: 'https://github.com/kaivanwong',
        icon: 'i-simple-icons-github',
        header: 'i-ri-github-line',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/kaivanwong',
        icon: 'i-simple-icons-x',
        header: 'i-ri-twitter-x-line',
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

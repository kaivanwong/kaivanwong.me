export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Kaivan\'s Personal Website',
  subtitle: 'My personal website, incliuding blog and portfolio.',
  description: 'My personal website, incliuding blog and portfolio, it\'s developed by Vitesse Theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'kaivanwong@outlook.com',
  socialLinks: [
    {
      text: 'GitHub',
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
      href: 'https://space.bilibili.com/190014206',
      icon: 'i-simple-icons-bilibili',
    },
    {
      text: '微博',
      href: 'https://weibo.com/u/5605059021',
      icon: 'i-simple-icons-sinaweibo',
    },
  ],
  header: {
    logo: {
      src: '/logo.png',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Note',
        href: '/blog/note',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'About',
        href: '/about',
      },
      {
        text: 'Sponsor to Me',
        href: '/sponsor',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/kaivanwong',
      },
      {
        text: 'Living Stream',
        href: 'https://space.bilibili.com/190014206',
      },
    ],
  },
}

export default siteConfig

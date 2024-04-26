export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Kaivan Wong',
  subtitle: 'My personal website, incliuding blog and portfolio.',
  description: 'My personal website, incliuding blog and portfolio, it\'s developed by Vitesse Theme for Astro.',
  image: {
    src: '/favicon.svg',
    alt: 'Kaivan Wong',
  },
  headerLogo: {
    light: {
      src: '/logo-light.png',
      alt: 'Logo Image',
    },
    dark: {
      src: '/logo-dark.png',
      alt: 'Logo Image',
    },
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
      text: 'Talks',
      href: '/talks',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
  ],
  hero: {
    title: 'Kaivan Wong',
    text:
      `<p>Hi there</p>
      <p>I'm Kaivan, a front-end engineer with perfectionism (it's not always good :p).</p>
      <p>Creator of <a class="prose-link" target="_blank" href="https://github.com/opuntia-dev"><i class="i-mdi-cactus"></i>Opuntia</a>, <a class="prose-link" target="_blank" href="https://github.com/stack-nax"><i class="i-ri-infinity-line"></i>Infinite</a>.</p>
      <p>Member of <a class="prose-link" target="_blank" href="https://github.com/antdv-pro"><i class="i-ant-design-ant-design-outlined"></i>Andtv Pro</a>.</p>
      <p>I am learning in order to make my own products. As a developer and designer, my philosophy is that software should be a clear, easy path that removes unnecessary complexity. As the same time, technology is just a tool that must ultimately serve the product.</p>
      <p>Currently, I focus on enterprise software solutions and visual low code directions. It is committed to creating software services that can provide low cost and high efficiency for small and medium-sized entrepreneurial teams.</p>
     `,
    image: {
      light: {
        src: '/design-light.png',
        alt: 'Design Image',
      },
      dark: {
        src: '/design-dark.png',
        alt: 'Design Image',
      },
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
      text: 'About',
      href: '/about',
    },
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
  ],
}

export default siteConfig

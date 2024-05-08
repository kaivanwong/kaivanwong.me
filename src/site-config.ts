export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Kaivan Wong',
  subtitle: 'My personal website, incliuding blog and portfolio.',
  description: 'My personal website, incliuding blog and portfolio, it\'s developed by Vitesse Theme for Astro.',
  image: {
    src: '/favicon.svg',
    alt: 'Kaivan Wong',
  },
  email: 'kaivanwong@outlook.com',
  hero: {
    title: 'Kaivan Wong',
    text:
      `<p>Hi there</p>
      <p>I'm Kaivan, a front-end engineer with perfectionism (it's not always good :p).</p>
      <p>Creator of <a class="prose-link" target="_blank" href="https://github.com/opuntia-dev"><i class="i-mdi-cactus"></i>Opuntia</a>, <a class="prose-link" target="_blank" href="https://github.com/stack-nax"><i class="i-ri-infinity-line"></i>Infinite</a>.</p>
      <p>Member of <a class="prose-link" target="_blank" href="https://github.com/antdv-pro"><i class="i-ant-design-ant-design-outlined"></i>Andtv Pro</a>.</p>
      <p>I love technology. At present, I focus on the all front-end application technology stack, developing web applications, mobile apps and desktop applications. My goal is to be able to make excellent products, so I am studying hard.</p>
      <p>This is my personal website where you can read my blog and notes. If you like this, please visit my social media page and follow me.</p>
     `,
    image: {
      light: {
        src: '/personal/design-light.png',
        alt: 'Design Image',
      },
      dark: {
        src: '/personal/design-dark.png',
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
  header: {
    logo: {
      light: {
        src: '/avatar.png',
        alt: 'Logo Image',
      },
      dark: {
        src: '/avatar.png',
        alt: 'Logo Image',
      },
    },
    navLinks: [
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
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    navLinks: [
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
        text: 'Stack Nax',
        href: 'https://stacknax.com',
      },
      {
        text: 'Website Starter Template',
        href: 'https://github.com/kaivanwong/vitesse-astro-theme',
      },
      {
        text: 'GitHub Repo',
        href: 'https://github.com/kaivanwong/kaivanwong.me',
      },
    ],
  },
}

export default siteConfig

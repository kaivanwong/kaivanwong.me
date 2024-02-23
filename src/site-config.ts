const siteConfig = {
    author: 'Kaivan Wong',
    title: 'Kaivan Wong',
    subtitle: "My personal blog and portfolio.",
    description: "My personal blog and portfolio, it's developed by Astro.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
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
                href: '/about'
            }
        ]
    },
    projects: [
        {
            title: 'Opuntia Dev',
            projects:[
                {
                    title: 'Opuntia',
                    description: 'Vite + Vue 3 SPA web starter template.',
                    icon: 'i-icon-park-outline-cactus',
                    link: 'https://github.com/opuntia-dev/opuntia'
                },
                {
                    title: 'Opuntia Pro',
                    description: 'An enterprise web application based on Opuntia + Element Plus.',
                    icon: 'i-icon-park-outline-cactus',
                    link: 'https://github.com/opuntia-dev/opuntia-pro'
                }
            ]
        },
        {
            title: 'Others',
            projects:[
                {
                    title: '小友优选',
                    description: '基于 Uniapp + uView UI 开发的社区电商微信小程序。',
                    icon: '',
                    link: 'https://github.com/kaivanwong/ushop'
                },
                {
                    title: '扫码自助洗车',
                    description: '基于 TypeScript 的自助洗车微信小程序。',
                    icon: '',
                    link: 'https://github.com/kaivanwong/washer'
                }
            ]
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Sponsors',
            href: '/sponsors'
        },
        {
            text: 'Business Cooperation',
            href: 'mailto:kaivanwong@outlook.me'
        },
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/kaivanwong'
        },
        {
            text: 'X',
            href: 'https://twitter.com/kaivanwong/'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/kaivan-wong-a42441291/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/hikaivanwong'
        },
        {
            text: 'Bilibili',
            href: 'https://space.bilibili.com/19001420'
        },
        {
            text: '知乎',
            href: 'https://www.zhihu.com/people/kaivanwong'
        },
        {
            text: '微博',
            href: 'https://weibo.com/u/5605059021'
        },
    ],
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

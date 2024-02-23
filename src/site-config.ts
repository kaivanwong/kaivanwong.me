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
        text: `<p>My name is Kaivan Wong. I'm a front-end engineer with perfectionism (it's not always good :p).I'm working on an open source project called <a target="_blank" prose-link href="https://stacknax.com">Stack Nax 💚</a>, and often using the JavaScript, TypeScript, Rust to develop software.</p>
        <p>If you have any questions, please email me at <a prose-link href="mailto:kaivanwong@outlook.com">kaivanwong@outlook.com</a>.</p>`,
        image: {
            src: '',
            alt: '',
        },
        links: [
            {
                text: 'About Me',
                href: '/about'
            }
        ]
    },
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

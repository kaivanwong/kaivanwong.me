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
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I am a Front-end engineer with product-oriented, adept at utilizing technology to create web software with outstanding user experiences. Currently, I focus on researching frontend technologies in the realm of application software and establishing an engineering system for frontend teams. Feel free to follow my social media for updates, and if you have any questions, you can email me at <a href='mailto:kaivanwong@outlook.com'>kaivanwong@outlook.com</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'About Me',
                href: '/about'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

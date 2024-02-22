export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Kaivan Wong',
    subtitle: "My personal blog and portfolio website.",
    description: "My personal blog and portfolio website, it's developed by Astro.",
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
            href: 'https://www.linkedin.com/in/kaivan-wong-a42441291/'
        },
        {
            text: 'Business with me',
            href: 'https://www.linkedin.com/in/kaivan-wong-a42441291/'
        },
        {
            text: 'Live Streaming',
            href: 'https://space.bilibili.com/19001420'
        },
        {
            text: 'Photography and Traveling',
            href: 'https://www.instagram.com/hikaivanwong'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/kaivanwong'
        },
        {
            text: 'X / Twitter',
            href: 'https://twitter.com/kaivanwong/'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/kaivan-wong-a42441291/'
        },
        {
            text: 'Youtube',
            href: 'https://www.youtube.com/channel/@kaivanwong'
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

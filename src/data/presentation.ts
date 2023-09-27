type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "kaivanwong@outlook.com",
  title: "Hi, I’m Kaivan 👋",
  profile: "/profile.jpg",
  description:
    `
    A front-end engineer with perfectionism (it's not always good :p). 
    I often use *Vue.js*, *React.js*, *TypeScript* for web application development.
    At the same time, I am working on an open source project called *Stack Nax*.
    `,
  socials: [
    {
      label: "Github",
      link: "https://github.com/kaivanwong",
    },
    {
      label: "X (Twitter)",
      link: "https://twitter.com/kaivanwong",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/hikaivanwong",
    },
    {
      label: "知乎",
      link: "https://www.zhihu.com/people/kaivanwong",
    },
    {
      label: "哔哩哔哩 (Live streaming)",
      link: "https://space.bilibili.com/190014206",
    },
  ],
};

export default presentation;

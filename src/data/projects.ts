export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Vest - Stack Nax",
    techs: ["Vue.js", "Vite", "UnoCSS", "TypeScript"],
    link: "https://github.com/stacknax/vest",
  },
];

export default projects;

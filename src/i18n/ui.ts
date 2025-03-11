import { FiExternalLink } from "react-icons/fi";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "my-projects": "My Projects",
    header: "Roberto Ruiz's Portfolio",
    featured: "Featured Projects",
    "site.title": "Roberto Ruiz | Frontend Developer, Mentor & UX Researcher",
    "site.description": `I'm a Frontend Engineer who loves teaching other people about Frontend development. I'm currently doing a masters degree in Human-Computer Interaction in Germany.`,
  },
  es: {
    "my-projects": "Mis Proyectos",
    header: "Portafolio de Roberto Ruiz",
    featured: "Proyectos Destacados",
    "site.title":
      "Roberto Ruiz | Desarrollador Frontend, Mentor e Investigador UX",
    "site.description": `Soy un Ingeniero de Frontend que ama enseñar a otras personas sobre desarrollo Frontend. Actualmente estoy haciendo una maestría en Interacción Humano-Computadora en Alemania.`,
  },
} as const;

export const showDefaultLang = false;

export type SidebarLink = {
  id: string;
  href: string;
  text: string;
  icon?: React.ComponentType;
  external?: boolean;
  useRawPath?: boolean;
};

const englishSidebarLinks: SidebarLink[] = [
  { id: "home", href: "/", text: "Home" },
  { id: "about", href: "/about", text: "About Me" },
  { id: "projects", href: "/projects", text: "Projects" },
  { id: "cv", href: "/cv", text: "Resumé" },
  {
    id: "blog",
    href: "https://blog.robruizr.dev/",
    text: "Blog",
    icon: FiExternalLink,
    external: true,
  },
  {
    id: "es",
    href: "/es/",
    text: "Cambiar a Español",
    useRawPath: true,
  },
];

const spanishSidebarLinks: SidebarLink[] = [
  { id: "home", href: "/", text: "Inicio" },
  { id: "about", href: "/about", text: "Sobre Mí" },
  { id: "projects", href: "/projects", text: "Proyectos" },
  { id: "cv", href: "/cv", text: "Mi CV" },
  {
    id: "blog",
    href: "https://blog.robruizr.dev/",
    text: "Blog (inglés)",
    icon: FiExternalLink,
    external: true,
  },
  {
    id: "en",
    href: "/",
    text: "Switch to English",
    useRawPath: true,
  },
];

export const sidebarLinks = {
  en: englishSidebarLinks,
  es: spanishSidebarLinks,
};

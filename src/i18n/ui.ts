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

export const sidebarLinks = {
  en: [
    { id: "home", href: "/en/", text: "Home" },
    { id: "cv", href: "/en/cv", text: "Resumé" },
    { id: "projects", href: "/en/projects", text: "Projects" },
    { id: "about", href: "/en/about", text: "About Me" },
    { id: "contact", href: "/en/contact", text: "Contact" },
    {
      id: "blog",
      href: "https://blog.robruizr.dev/",
      text: "Blog",
      icon: FiExternalLink,
      external: true,
    },
  ],
  es: [
    { id: "home", href: "/es/", text: "Inicio" },
    { id: "projects", href: "/es/projects", text: "Proyectos" },
    { id: "about", href: "/es/about", text: "Sobre Mí" },
    { id: "contact", href: "/es/contact", text: "Contacto" },
    {
      id: "blog",
      href: "https://blog.robruizr.dev/",
      text: "Blog (inglés)",
      icon: FiExternalLink,
      external: true,
    },
  ],
};

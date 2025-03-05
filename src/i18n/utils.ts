import {
  ui,
  defaultLang,
  sidebarLinks,
  showDefaultLang,
  type SidebarLink,
} from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || "String not found";
  };
}

export function getSidebarLinks(lang: keyof typeof ui) {
  return sidebarLinks[lang];
}

export function useTranslateSidebarLink(lang: keyof typeof ui) {
  return function translateSidebarLink(
    sidebarLink: SidebarLink,
    currentLanguage: string = lang
  ) {
    if (sidebarLink.useRawPath || sidebarLink.external) return sidebarLink.href;
    return !showDefaultLang && currentLanguage === defaultLang
      ? sidebarLink.href
      : `/${currentLanguage}${sidebarLink.href}`;
  };
}

export function useTranslatePath(lang: keyof typeof ui) {
  return function translatePath(path: string, currentLanguage: string = lang) {
    return !showDefaultLang && currentLanguage === defaultLang
      ? path
      : `/${currentLanguage}${path}`;
  };
}

import path from "object-path";
import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const splitKey = key.split(".");
    return (
      path.get(ui, [lang, ...splitKey]) ||
      path.get(ui, [defaultLang, ...splitKey]) ||
      `Invalid key ${key}`
    );
  };
}

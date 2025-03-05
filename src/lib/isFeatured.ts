import type { CollectionEntry } from "astro:content";

export function isFeatured(item: CollectionEntry<"projects">): boolean {
  return item.data.featured === true;
}

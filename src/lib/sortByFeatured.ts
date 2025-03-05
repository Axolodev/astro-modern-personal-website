import type { CollectionEntry } from "astro:content";
import { isFeatured } from "./isFeatured";

export function sortByFeatured(
  items: CollectionEntry<"projects">[]
): CollectionEntry<"projects">[] {
  return items.sort((a, b) => {
    return isFeatured(a) ? -1 : isFeatured(b) ? 1 : 0;
  });
}

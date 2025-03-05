import { defaultLang } from "@i18n/ui";
import { getCollection } from "astro:content";

const defaultRegex = new RegExp(`^[^\\.]+\\.md$`);

export async function getAndFilterCollectionByLanguage(
  collectionName: Parameters<typeof getCollection>[0],
  language: string = defaultLang
) {
  // Checks if the id of the current item ends with [title].[language].md
  const regex = new RegExp(`\\.${language}\\.md$`);

  if (language !== defaultLang) {
    return (await getCollection(collectionName)).filter((item) =>
      regex.test(item.id)
    );
  }

  // Gets all the item that end follow the structure [title].md
  return (await getCollection(collectionName)).filter((item) =>
    defaultRegex.test(item.id)
  );
}

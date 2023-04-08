import { getCollection } from "astro:content";

type getCollectionParams = Parameters<typeof getCollection>[0];
type EntryTypes = Exclude<getCollectionParams, "store">;

async function getEntryData<T extends EntryTypes>(collection: T) {
  const postEntries = await getCollection(collection);
  return postEntries.map((entry) => {
    // @ts-ignore
    const [lang, ...slug] = entry?.slug.split("/");

    return {
      params: {
        lang,
        slug: slug.join("/") || undefined,
      },
      props: { entry },
    };
  });
}

export default getEntryData;

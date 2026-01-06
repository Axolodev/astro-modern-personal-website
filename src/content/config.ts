import { z, defineCollection, type ImageFunction } from "astro:content";

function getProjectSchema({ image }: { image: ImageFunction }) {
  return z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: image(),
    badge: z.string().optional(),
    tags: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "tags must be unique",
      })
      .optional(),
    featured: z.boolean().optional(),
  });
}

export type ProjectSchema = z.infer<ReturnType<typeof getProjectSchema>>;
const projectCollection = defineCollection({
  schema: ({ image }) => getProjectSchema({ image }),
});

export const collections = {
  projects: projectCollection,
};

import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
  featured: z.boolean().optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
  projects: projectCollection,
};

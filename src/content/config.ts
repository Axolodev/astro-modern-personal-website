import { z, defineCollection } from "astro:content";

/**
 * title: "Club de la Excelencia Luker"
 * description: "Desarrollo de marca y transformación digital para Luker"
 * pubDate: "Dec 05 2023"
 * heroImage: "/portfolio/luker/thumbnail.png"
 * tags: ["portfolio", "marca", "transformación-digital"]
 */
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

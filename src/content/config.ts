import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
});

const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  details: z.boolean().optional(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
});

const entrySchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  preview: z.string(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
  showonlyimage: z.boolean().optional(),
  image: z.string().optional(),
  thumbnail: z.string().optional(),
  weight: z.number().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PortfolioSchema = z.infer<typeof entrySchema>;
export type CourseSchema = z.infer<typeof entrySchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const projectCollection = defineCollection({ schema: entrySchema });
const courseCollection = defineCollection({ schema: entrySchema });

export const collections = {
  blog: blogCollection,
  store: storeCollection,
  portfolio: projectCollection,
  courses: courseCollection,
};

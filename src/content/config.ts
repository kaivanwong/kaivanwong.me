import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    website: z.string().optional(),
    github: z.string().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    duration: z.string(),
    topics: z.array(z.string()).default([]),
    title: z.string(),
    draft: z.boolean().default(false),
    description: z.string().optional(),
    lang: z.string().optional().default('en-us'),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str: string | undefined) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const topics = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, projects, topics };

import { defineCollection, z } from 'astro:content'

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website'),
  lang: z.string().optional().default('en-US'),
})

const postsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().optional().default(false),
  publishDate: z
    .string()
    .or(z.date())
    .transform((val: string | number | Date) => new Date(val)),
  updatedDate: z
    .string()
    .optional()
    .transform((str: string | undefined) => (str ? new Date(str) : undefined)),
  seo: seoSchema.optional(),
})

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional(),
  }),
})

const blog = defineCollection({
  schema: postsSchema,
})

const notes = defineCollection({
  schema: postsSchema,
})

const reading = defineCollection({
  schema: postsSchema,
})

const talks = defineCollection({
  schema: postsSchema,
})

export const collections = { pages, blog, notes, reading, talks }

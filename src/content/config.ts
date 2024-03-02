import { defineCollection, z } from 'astro:content'

const postsSchema = z.object({
  title: z.string(),
  date: z
    .string()
    .or(z.date())
    .transform((val: string | number | Date) => new Date(val).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })),
  description: z.string().optional(),
  draft: z.boolean().optional().default(false),
  duration: z.string().optional(),
  tag: z.string().optional(),
  lang: z.string().optional().default('en-US'),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
})

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
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

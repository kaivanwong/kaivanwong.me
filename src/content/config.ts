import { defineCollection, z } from 'astro:content'

function getCollection(requiredArray: string[] = ['title', 'date']) {
  const schemaSource: Record<string, any> = {
    title: z.string(),
    description: z.string().optional(),
    duration: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) => new Date(val).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })).optional(),
    draft: z.boolean().optional().default(false),
    lang: z.string().optional().default('en-US'),
    tag: z.string().optional(),
    redirect: z.string().optional(),
    video: z.boolean().optional(),
    recording: z.boolean().optional(),
  }
  Object.keys(schemaSource).forEach((key) => {
    if (requiredArray.includes(key))
      schemaSource[key] = schemaSource[key].optional()
  })
  return defineCollection({
    schema: z.object(schemaSource),
  })
}

const pages = getCollection(['title'])

const blog = getCollection()

const notes = getCollection()

const reading = getCollection()

const talks = getCollection()

export const collections = { pages, blog, notes, reading, talks }

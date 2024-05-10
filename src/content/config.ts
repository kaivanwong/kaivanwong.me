import { defineCollection, z } from 'astro:content'

function getCollection(requiredArray: string[] = ['title', 'date']) {
  const schemaSource: Record<string, any> = {
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      }),
    date: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) => new Date(val).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })),
    draft: z.boolean().default(false),
    lang: z.string().default('en-US'),
    tag: z.string(),
    redirect: z.string(),
    video: z.boolean(),
    recording: z.boolean(),
  }
  Object.keys(schemaSource).forEach((key) => {
    if (!requiredArray.includes(key))
      schemaSource[key] = schemaSource[key].optional()
  })
  return defineCollection({
    schema: z.object(schemaSource),
  })
}

const pages = getCollection(['title'])

const blog = getCollection()

const note = getCollection()

export const collections = { pages, blog, note }

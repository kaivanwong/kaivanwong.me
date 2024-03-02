import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import siteConfig from '../site-config'

export async function GET(context) {
  const blog = (await getCollection('blog'))
  const talks = (await getCollection('talks'))
  const reading = (await getCollection('reading'))
  const notes = (await getCollection('notes'))
  const posts = [...blog, ...talks, ...reading, ...notes].filter(post => post.data.draft === false)

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((item) => {
      return {
        ...item.data,
        link: `${context.site}/posts/${item.slug}/`,
        pubDate: new Date(item.data.date),
        content: item.body,
        author: `${siteConfig.author} <${siteConfig.email}>`,
      }
    }),
  })
}

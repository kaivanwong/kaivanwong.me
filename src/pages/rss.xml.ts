import rss from '@astrojs/rss'
import siteConfig from '../site-config'
import { getAllPosts } from '../utils/posts'

interface Context {
  site: string
}

export async function GET(context: Context) {
  const posts = await getAllPosts()

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((item) => {
      return {
        title: item.data.title,
        ...item.data,
        link: `${context.site}/posts/${item.slug}/`,
        pubDate: new Date(item.data.date),
        content: item.body,
        author: `${siteConfig.author} <${siteConfig.email}>`,
      }
    }),
  })
}

import type { CollectionEntry } from 'astro:content'

export type Posts = 'blog' | 'notes' | 'reading' | 'talks'

export type CollectionPosts = CollectionEntry<Posts>

export type Pages = 'pages'

export type CollectionPages = CollectionEntry<Pages>

export type ProjectData = Array<{
  title: string
  projects: Array<{
    text: string
    description?: string
    icon?: string
    href: string
  }>
}>

import { MetadataRoute } from 'next'
import { allBlogs, allJournals } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const journalRoutes = allJournals
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const routes = ['', 'blog', 'journal', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...journalRoutes]
}

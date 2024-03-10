import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SeriesListLayount from '@/layouts/SeriesListLayout'

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))

  const posts = sortedCoreContents.filter((post) => post.series === slug)
  posts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return <SeriesListLayount posts={posts} title={slug} />
}

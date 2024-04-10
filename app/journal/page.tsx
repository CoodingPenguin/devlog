import { allCoreContent, CoreContent, sortPosts } from "pliny/utils/contentlayer";
import { allJournals } from 'contentlayer/generated'
import JournalListLayout from '@/layouts/JournalListLayout'

export default function JournalPage() {
  const posts = allCoreContent(sortPosts(allJournals))

  return <JournalListLayout posts={posts} title="저널" />
}

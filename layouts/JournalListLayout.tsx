'use client'

import { CoreContent } from 'pliny/utils/contentlayer'
import type { Journal as JournalType } from 'contentlayer/generated'
import Journal from '@/components/Journal'

interface JournalListLayoutProps {
  posts: CoreContent<JournalType>[]
  title: string
}

export default function JournalListLayout({ posts, title }: JournalListLayoutProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="font-calli text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.map((post) => (
          <Journal
            key={post.title}
            title={post.title}
            thumbnail={post.images[0]}
            created={post.date}
            href={post.slug}
          />
        ))}
      </div>
    </div>
  )
}

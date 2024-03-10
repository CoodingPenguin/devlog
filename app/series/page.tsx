import SeriesLayout from '@/layouts/SeriesLayout'
import React from 'react'
import postsPerSeries from 'app/posts-per-series.json'
import Series from '@/components/Series'

export default function Page() {
  const defaultThumbnail = '/static/series/default-thumbnail.png'

  return (
    <>
      <SeriesLayout>
        {Object.keys(postsPerSeries).map((series) => {
          const posts = postsPerSeries[series]
          posts.sort((a, b) => (a.date > b.date ? -1 : 1))
          const thumbnail = posts.filter((post) => post.images.length > 0)[0]?.images[0]
          return (
            <Series
              key={series}
              title={series}
              thumbnail={thumbnail || defaultThumbnail}
              count={postsPerSeries[series].length}
              lastCreated={postsPerSeries[series][0].date}
              href={`/series/${series}`}
            />
          )
        })}
      </SeriesLayout>
    </>
  )
}

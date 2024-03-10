import SeriesLayout from '@/layouts/SeriesLayout'
import React from 'react'
import postsPerSeries from 'app/posts-per-series.json'
import Series from '@/components/Series'

export default function Page() {
  const defaultThumbnail = '/static/series/default-thumbnail.png'

  return (
    <>
      <SeriesLayout>
        {Object.keys(postsPerSeries).map((series) => (
          <Series
            key={series}
            title={series}
            thumbnail={postsPerSeries[series][0]?.images[0] || defaultThumbnail}
            count={postsPerSeries[series].length}
            lastCreated={
              postsPerSeries[series].length === 1
                ? postsPerSeries[series][0].date
                : postsPerSeries[series].reduce((a, b) => (a.date > b.date ? a.date : b.date))
            }
            href={`/series/${series}`}
          />
        ))}
      </SeriesLayout>
    </>
  )
}

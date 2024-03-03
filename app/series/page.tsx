import SeriesLayout from '@/layouts/SeriesLayout'
import React from 'react'
import postsPerSeries from 'app/posts-per-series.json'
import Series from '@/components/Series'

export default function Page() {
  return (
    <>
      <SeriesLayout>
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Object.keys(postsPerSeries).map((series) => (
            <Series
              key={series}
              title={series}
              thumbnail={postsPerSeries[series][0].images[0]}
              count={postsPerSeries[series].length}
              lastCreated={
                postsPerSeries[series].length === 1
                  ? postsPerSeries[series][0].date
                  : postsPerSeries[series].reduce((a, b) => (a.date > b.date ? a.date : b.date))
              }
              href={`/series/${series}`}
            />
          ))}
        </div>
      </SeriesLayout>
    </>
  )
}

import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

type SeriesProps = {
  title: string
  thumbnail: string
  count: number
  lastCreated: string
  href: string
}

const Series = ({ title, thumbnail, count, lastCreated, href }: SeriesProps) => (
  <div>
    <a href={href}>
      <div className="relative my-4 aspect-[16/9]">
        <Image
          src={thumbnail}
          alt="thumbnail"
          fill
          style={{ objectFit: 'cover', borderRadius: '0.25rem' }}
        />
      </div>
      <div className="my-1">
        <h1 className="text-xl font-bold sm:text-lg">{title}</h1>
      </div>
      <div className="text-gray-500 dark:text-gray-400">
        <span>{count}개의 포스트</span>
        <span className="mx-1">·</span>
        <span>
          <time dateTime={lastCreated}>{formatDate(lastCreated, siteMetadata.locale)}</time>{' '}
          업데이트
        </span>
      </div>
    </a>
  </div>
)

export default Series

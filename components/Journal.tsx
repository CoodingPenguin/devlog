import Image from '@/components/Image'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

type JournalProps = {
  title: string
  thumbnail: string
  created: string
  href: string
}

const Journal = ({ title, thumbnail, created, href }: JournalProps) => (
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
        <span className="mx-1">·</span>
        <span>
          <time dateTime={created}>{formatDate(created, siteMetadata.locale)}</time> 업데이트
        </span>
      </div>
    </a>
  </div>
)

export default Journal

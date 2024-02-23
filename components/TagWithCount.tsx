import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  count: number
}

const TagWithCount = ({ text, count }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="rounded-full bg-primary-500 px-2.5 py-2 text-sm font-medium lowercase text-white hover:bg-primary-400 dark:hover:bg-primary-600"
    >
      {text.split(' ').join('-')}
      <span className="ml-1.5 rounded-full bg-gray-50 px-1 text-xs text-primary-500">{count}</span>
    </Link>
  )
}

export default TagWithCount

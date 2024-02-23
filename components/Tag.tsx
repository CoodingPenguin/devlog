import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="my-1 mr-2 rounded-full bg-primary-500 px-2 py-1 text-sm font-medium lowercase text-white hover:bg-primary-400 dark:hover:bg-primary-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

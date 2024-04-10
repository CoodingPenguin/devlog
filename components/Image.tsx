import NextImage, { ImageProps } from 'next/image'
import Link from '@/components/Link'
import * as console from "console";

const checkIsUrl = (str: string): boolean => {
  try {
    new URL(str)
    return true
  } catch (_) {
    return false
  }
}

function parseAlt(alt: string) {
  if (alt.includes('|')) {
    const [url, ...rest] = alt.split('|')
    if (checkIsUrl(url)) {
      return { url, caption: rest.join('') }
    } else {
      return { caption: alt }
    }
  } else {
    if (checkIsUrl(alt)) {
      return { url: alt, caption: alt }
    } else {
      return { caption: alt }
    }
  }
}

const FigCaption = ({ alt }: { alt?: string }) => {
  if (alt === undefined || alt === null) {
    return
  }
  const { url, caption } = parseAlt(alt)
  return (
    <div className="mt-1.5 text-center text-sm text-gray-400 dark:text-gray-400">
      {url ? (
        <span>
          출처: <Link href={url}>{caption}</Link>
        </span>
      ) : (
        <span>{caption}</span>
      )}
    </div>
  )
}

const Image = ({ ...rest }: ImageProps) => {
  console.log(rest)
  return (
    <>
      {rest.alt === 'avatar' ? (
        <div className="flex flex-col items-center justify-center">
          <NextImage {...rest} />
        </div>
      ) : rest.alt &&
        rest.alt !== 'thumbnail' &&
        typeof rest.src === 'string' &&
        rest.src.startsWith('/static/images') ? (
        <div className="my-2 flex flex-col items-center justify-center">
          <NextImage {...rest} className="my-0" />
          <FigCaption alt={rest.alt.toString()} />
        </div>
      ) : (
        <NextImage {...rest} className={`my-2 ${rest?.className}`} />
      )}
    </>
  )
}

export default Image

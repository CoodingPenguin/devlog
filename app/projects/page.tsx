import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-calli text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            프로젝트
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.length > 0 ? (
              projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))
            ) : (
              <p className="p-4">준비 중입니다!</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

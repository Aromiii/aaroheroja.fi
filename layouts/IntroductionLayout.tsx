import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function IntroductionLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert sm:col-span-2">
            {children}
          </div>
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={1000}
                height={1000}
                className="rounded-bl-[4rem] rounded-tl-[4rem] rounded-tr-[4rem]"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

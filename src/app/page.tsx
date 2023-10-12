import Earth from '@/components/Earth'
import NewsLetterSub from '@/components/NewsLetterSub'
import { PageWrapper } from '@/components/PageWrapper'
import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github, CoffeeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4)

  return (
    <PageWrapper>
      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="space-y-7">
          <h1>svsvv&apos;s blog</h1>
          <p>
            Dive into the tech universe with our IT blog! Unlock the secrets of
            React, NextJS, JS, Python, Docker, and Golang. Gain insights,
            personal perspectives, and hands-on expertise. Experience a blend of
            vibrant content, expert opinions, and challenging problem-solving.
            Let&apos;s innovate together!
          </p>

          <Button asChild>
            <a href="https://www.buymeacoffee.com/svsvvs">
              <CoffeeIcon className="mr-3" /> buy me a coffee.
            </a>
          </Button>
        </div>
        <Earth />
      </div>
      <NewsLetterSub />
      <div className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-700">
        <h2>Latest posts:</h2>
      </div>
      <div className="mt-2 grid grid-cols-1 pt-5 md:grid-cols-2">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </PageWrapper>
  )
}

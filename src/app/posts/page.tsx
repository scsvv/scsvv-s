import React from 'react'
import { allPosts } from 'contentlayer/generated'
import { PostCard } from '@/components/PostCard'
import { compareDesc } from 'date-fns'
import { PageWrapper } from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import { CoffeeIcon } from 'lucide-react'

export default function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <PageWrapper>
      <div className="mt-5 space-y-7">
        <h1 className="mt-7 text-4xl">Blog</h1>
        <p>
          Dive into the tech universe with our IT blog! Unlock the secrets of
          React, NextJS, JS, Python, Docker, and Golang. Gain insights, personal
          perspectives, and hands-on expertise. Experience a blend of vibrant
          content, expert opinions, and challenging problem-solving. Let&apos;s
          innovate together!
        </p>

        <Button asChild>
          <a href="https://www.buymeacoffee.com/svsvvs">
            <CoffeeIcon className="mr-3" /> buy me a coffee.
          </a>
        </Button>
      </div>

      <div className="pt-5">
        <h2>Latest posts:</h2>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </PageWrapper>
  )
}

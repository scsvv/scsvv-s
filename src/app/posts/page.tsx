import React from 'react'
import { allPosts } from 'contentlayer/generated'
import { PostCard } from '@/components/PostCard'
import { compareDesc } from 'date-fns'

export default function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <div>
      <div className="">
        <h2>Latest posts:</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 pt-5 md:grid-cols-2">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}

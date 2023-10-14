import AnimText from '@/components/AnimText'
import Earth from '@/components/Earth'
import NewsLetterSub from '@/components/NewsLetterSub'
import { PageWrapper } from '@/components/PageWrapper'
import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { CoffeeIcon, ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4)

  return (
    <PageWrapper>
      <div className="flex flex-col-reverse items-center pt-5 md:flex-row">
        <div className="space-y-5">
          <h1 className="mt-7 text-4xl">Skorobohatov Sviatoslav</h1>
          <h2 className="text-2xl font-thin">Full Stack Developer</h2>
          <p>
            {' '}
            a passionate self-taught full stack web developer and software
            engineer from Ukraine. I am talented programmer who possesses the
            unique ability to craft creative and innovative solutions. A master
            of multitasking, proficiently managing multiple projects
            simultaneously, and driving them to successful completion.
          </p>

          <Button asChild className="mr-3">
            <a href="https://www.buymeacoffee.com/svsvvs">
              <CoffeeIcon className="mr-3" /> buy me a coffee.
            </a>
          </Button>
          <Button asChild>
            <a href="https://github.com/scsvv/scsvv-s">
              <Github className="mr-3" /> check my git.
            </a>
          </Button>
        </div>
        <Earth />
      </div>
      <div className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-700">
        <div className="overflow-hidden">
          <h2 className="py-4 text-4xl">
            My blog about coding with JavaScript and Golang
          </h2>
        </div>
        <h3>Latest posts:</h3>
      </div>
      <div className="mt-2 grid grid-cols-1 pt-5 md:grid-cols-2">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <article className="mb-5 mr-5 flex flex-col items-start justify-between rounded-lg bg-[#f9f8dd] p-5	pt-7 dark:bg-[#302a75]">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6">
              <Link className="link" href="/posts">
                <span className="absolute inset-0" />
                All posts
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 flex text-sm leading-6">
              Real all posts <ArrowRight />
            </p>
          </div>
        </article>
      </div>
      <NewsLetterSub />
    </PageWrapper>
  )
}

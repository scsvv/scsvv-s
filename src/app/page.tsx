import AnimText from '@/components/AnimText'
import { PageWrapper } from '@/components/PageWrapper'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative flex h-screen items-center">
        <AnimText delay={1} />
        <div className="absolute bottom-40 left-2/4 text-4xl">
          <Link href="/home">
            {' '}
            <ArrowDown />{' '}
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}

import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-7">
      <h1>Skorobohatov Sviatoslav</h1>
      <p>
        {' '}
        a passionate self-taught full stack web developer and software engineer
        from Ukraine. I am talented programmer who possesses the unique ability
        to craft creative and innovative solutions. A master of multitasking,
        proficiently managing multiple projects simultaneously, and driving them
        to successful completion.
      </p>
    </div>
  )
}

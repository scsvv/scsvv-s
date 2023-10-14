import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="space-x-7">
      <Link className="text-4xl" href="/home">
        scsvv.
      </Link>
      <Link href="/resume.pdf" className="nav-link">
        resume
      </Link>
      <Link href="/posts" className="nav-link">
        blog
      </Link>
    </nav>
  )
}

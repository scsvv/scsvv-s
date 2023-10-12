import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="space-x-7">
      <Link className="text-4xl" href="/">
        scsvv.
      </Link>
      <Link href="/posts" className="nav-link">
        all posts
      </Link>
      <Link href="/about" className="nav-link">
        about
      </Link>
    </nav>
  )
}

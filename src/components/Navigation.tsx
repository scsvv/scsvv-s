import Link from 'next/link'

export function Navigation() {
  return (
    <nav>
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/posts" className="nav-link">
        All Posts
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
    </nav>
  )
}

import Link from 'next/link'

export default function ArticlesLayout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      {children}
    </div>
  )
}

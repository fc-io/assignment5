import Image from 'next/image'
import { Advent_Pro } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Advent_Pro({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={inter.className}>
      <div>
        <h1 className={`${styles.h1} ${styles.h1color}`} >Rubrik</h1>
        <Link href="/articles">Link to Articles</Link>
      </div>
    </main>
  )
}

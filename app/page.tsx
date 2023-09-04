import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>新着記事</h1>
      <ul>
        <li>記事1</li>
        <li>記事2</li>
        <li>記事3</li>
      </ul>
    </>
  )
}

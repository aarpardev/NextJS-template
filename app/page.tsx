import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Template text',
};


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href="/about">About</Link>
    </main>
  )
}

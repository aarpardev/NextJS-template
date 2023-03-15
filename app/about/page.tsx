import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Aboot, eh?',
};

export default function About () {
    return (
        <>
        <h1>About This Page</h1>
        <Link href="/">Go Home</Link>
        </>
    )
}
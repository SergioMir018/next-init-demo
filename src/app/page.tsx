import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the demo Next app',
}

export default function Home() {
  return (
    <main className="text-black text-5xl flex items-center justify-center h-screen">
        <h3>
          Ir a{' '}<Link className="text-blue-500"  href="/about">About</Link>
        </h3>
    </main>
  )
}
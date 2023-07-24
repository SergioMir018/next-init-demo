import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the demo Next app',
}

export default function Home() {
  return (
    <main className="text-black text-5xl flex flex-col items-center justify-center h-screen">
      <h3>
        Ir a{' '}
      </h3>
      <small
        className="mt-4"
      >This is the home page</small>
    </main>
  )
}
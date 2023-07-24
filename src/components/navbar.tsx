import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-2">
      <Link className="text-blue-500" href="/">Home</Link>
      <Link className="text-blue-500" href="/about">About</Link>
      <Link className="text-blue-500" href="/contact">Contact</Link>
    </nav>
  )
}
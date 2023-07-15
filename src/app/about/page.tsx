import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About page of the demo Next app"
}

export default function Home() {
    return (
        <main className="text-5xl flex items-center justify-center h-screen">
            <h3 className="">
                Ir a <Link className="text-blue-500" href="/">Home</Link>
            </h3>
        </main>
    )
}
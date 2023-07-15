import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface LayoutChildren {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

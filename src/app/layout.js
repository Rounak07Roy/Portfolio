import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Rounak's Portfolio",
  description: "Welcome to Rounak's Portfolio - Showcasing my best projects, skills, and experience in web development!"
,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

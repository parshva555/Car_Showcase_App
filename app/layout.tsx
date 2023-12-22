import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Discover the Best Cars in the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

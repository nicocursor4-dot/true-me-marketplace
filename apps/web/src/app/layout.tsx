import type { Metadata } from 'next'
import { Inter, Jost } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-cinzel', // Keeping the variable name to avoid breaking changes in other files, but mapping it to Jost
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TRUE ME Marketplace',
  description: 'Luxury marketplace platform with authentication and gamification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable} bg-trueme-cream`}>
      <body className="bg-trueme-cream font-sans">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

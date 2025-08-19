import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRUE ME - Not a Style, a Signature',
  description: 'Luxury marketplace platform with authentication and gamification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'I love you',
  description: 'Endaldie',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-fuchsia-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Thư Mời Kỷ Yếu - Thanh Huyền',
  description: 'Mời bạn đến dự buổi chụp ảnh kỷ yếu lớp 12 - 28/06/2026 lúc 9:00 AM',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/hihi.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/hihi.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/hihi.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/hihi.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

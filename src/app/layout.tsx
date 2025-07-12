import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Blocks Revit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="Blocks Revit" />
      </head>

      <body className={`${openSans.variable} font-normal antialiased`}>
        {children}
      </body>
    </html>
  )
}

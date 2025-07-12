import type { Metadata } from 'next'
import './globals.css'

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

      <body className="antialiased">{children}</body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import './globals.css'
import ClientShell from './ClientShell'

export const metadata: Metadata = {
  title: 'Deccan Fencing Club – Hyderabad, India',
  description:
    'Premier competitive fencing academy in Hyderabad. Training champions across Foil, Épée and Sabre since 2015.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="font-serif antialiased overflow-x-hidden cursor-none">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
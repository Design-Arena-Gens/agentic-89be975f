import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tienda de Buddy',
  description: 'Tu tienda de ítems y recompensas',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

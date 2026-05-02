import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Notic — Plastic Recycler',
  description: 'Brand lokal yang mengolah sampah plastik HDPE dari rumah tangga menjadi produk daur ulang yang stylish dan penuh cerita.',
  keywords: ['daur ulang plastik', 'gelang manik', 'sustainable', 'eco friendly', 'notic', 'HDPE', 'green merchandise'],
  icons: { icon: '/images/logo.png' },
  openGraph: {
    title: 'Notic — Plastic Recycler',
    description: 'Mengubah sampah plastik menjadi produk artistik yang berkelanjutan.',
    siteName: 'Notic',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

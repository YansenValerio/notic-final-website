import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Notic — Green Merchandise dari Plastik Daur Ulang | Pekalongan',
  description: 'Notic adalah brand lokal Pekalongan yang mengolah sampah plastik HDPE menjadi gelang, beads, coaster, dan custom merchandise ramah lingkungan untuk corporate gift dan CSR.',
  keywords: [
    'daur ulang plastik', 'green merchandise', 'corporate gift ramah lingkungan',
    'gelang daur ulang', 'coaster HDPE', 'CSR merchandise', 'sustainable gift',
    'notic', 'notic pekalongan', 'merchandise daur ulang indonesia',
    'plastic recycling indonesia', 'eco friendly merchandise'
  ],
  authors: [{ name: 'Notic', url: 'https://notic.id' }],
  creator: 'Notic',
  metadataBase: new URL('https://notic.id'),
  icons: { icon: '/images/logo.png' },
  openGraph: {
    title: 'Notic — Green Merchandise dari Plastik Daur Ulang',
    description: 'Brand lokal Pekalongan yang mengubah sampah plastik HDPE menjadi produk daur ulang estetis untuk kebutuhan corporate gift dan CSR perusahaan.',
    url: 'https://notic.id',
    siteName: 'Notic',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/images/gelang.jpg', width: 1200, height: 630, alt: 'Produk Notic — Gelang Daur Ulang' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notic — Green Merchandise dari Plastik Daur Ulang',
    description: 'Brand lokal yang mengubah sampah plastik HDPE menjadi gelang, coaster, dan custom merchandise.',
    images: ['/images/gelang.jpg'],
  },
  alternates: {
    canonical: 'https://notic.id',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
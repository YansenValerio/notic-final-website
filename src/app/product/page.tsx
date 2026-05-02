'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/utils'

type Variant = {
  id: string
  name: string
  images: string[]
  specs: { label: string; value: string }[]
  waMsg: string
}

type Category = {
  id: string
  label: string
  coverImage: string
  tagline: string
  variants: Variant[]
}

const categories: Category[] = [
  {
    id: 'coaster',
    label: 'Coaster',
    coverImage: '/images/coaster.jpg',
    tagline: 'Homeware estetis dari plastik daur ulang',
    variants: [
      {
        id: 'coaster-basic',
        name: 'Coaster Basic',
        images: ['/images/coaster.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Finishing', value: 'Natural marmer' },
          { label: 'Ukuran',   value: '±10 cm diameter' },
          { label: 'Tebal',    value: '±8 mm' },
          { label: 'Kegunaan', value: 'Merchandise, meja kerja' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Coaster Basic. Bisa info lebih lanjut?',
      },
      {
        id: 'coaster-engrave',
        name: 'Coaster Engrave',
        images: ['/images/coaster.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Finishing', value: 'Ukiran logo / teks custom' },
          { label: 'Ukuran',   value: '±10 cm diameter' },
          { label: 'Tebal',    value: '±8 mm' },
          { label: 'Kegunaan', value: 'Corporate gift, event kit' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Coaster Engrave. Bisa info lebih lanjut?',
      },
      {
        id: 'coaster-uv',
        name: 'Coaster Print UV',
        images: ['/images/coaster.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Finishing', value: 'Print full color UV' },
          { label: 'Ukuran',   value: '±10 cm diameter' },
          { label: 'Tebal',    value: '±8 mm' },
          { label: 'Kegunaan', value: 'Merchandise brand, souvenir' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Coaster Print UV. Bisa info lebih lanjut?',
      },
    ],
  },
  {
    id: 'beads',
    label: 'Beads',
    coverImage: '/images/beads.jpg',
    tagline: 'Material craft unik dari HDPE daur ulang',
    variants: [
      {
        id: 'beads-8mm',
        name: 'Beads 8mm',
        images: ['/images/beads.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Ukuran',   value: '8 mm' },
          { label: 'Pola',     value: 'Marmer unik, tidak ada yang sama' },
          { label: 'Kegunaan', value: 'Gelang, craft, aksesori' },
          { label: 'MOQ',      value: 'Hubungi kami' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Beads 8mm. Bisa info lebih lanjut?',
      },
      {
        id: 'beads-6mm',
        name: 'Beads 6mm',
        images: ['/images/beads.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Ukuran',   value: '6 mm' },
          { label: 'Pola',     value: 'Marmer unik, tidak ada yang sama' },
          { label: 'Kegunaan', value: 'Gelang tipis, craft halus' },
          { label: 'MOQ',      value: 'Hubungi kami' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Beads 6mm. Bisa info lebih lanjut?',
      },
    ],
  },
  {
    id: 'bracelet',
    label: 'Bracelet',
    coverImage: '/images/gelang.jpg',
    tagline: 'Dirangkai handmade, satu gelang = 4gr plastik diselamatkan',
    variants: [
      {
        id: 'bracelet-single',
        name: 'Single Knot Bracelet',
        images: ['/images/gelang.jpg'],
        specs: [
          { label: 'Material',  value: 'Beads HDPE daur ulang' },
          { label: 'Tipe',     value: 'Simpul tunggal, adjustable' },
          { label: 'Ukuran',   value: 'Free size (adjustable)' },
          { label: 'Kegunaan', value: 'Corporate gift, retail, souvenir' },
          { label: 'Dampak',   value: '±4 gram plastik/pcs' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Single Knot Bracelet. Bisa info lebih lanjut?',
      },
      {
        id: 'bracelet-double',
        name: 'Double Knot Bracelet',
        images: ['/images/gelang.jpg'],
        specs: [
          { label: 'Material',  value: 'Beads HDPE daur ulang' },
          { label: 'Tipe',     value: 'Simpul ganda, lebih kokoh' },
          { label: 'Ukuran',   value: 'Free size (adjustable)' },
          { label: 'Kegunaan', value: 'Premium gift, CSR event' },
          { label: 'Dampak',   value: '±4 gram plastik/pcs' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Double Knot Bracelet. Bisa info lebih lanjut?',
      },
    ],
  },
  {
    id: 'custom',
    label: 'Custom',
    coverImage: '/images/coaster.jpg',
    tagline: 'Merchandise daur ulang sesuai identitas brand kamu',
    variants: [
      {
        id: 'custom-button',
        name: 'Recycle Plastic Button',
        images: ['/images/coaster.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Finishing', value: 'Custom warna & pola' },
          { label: 'Ukuran',   value: 'Custom sesuai kebutuhan' },
          { label: 'Kegunaan', value: 'Fashion, merchandise brand' },
          { label: 'MOQ',      value: 'Hubungi kami' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Recycle Plastic Button custom. Bisa info lebih lanjut?',
      },
      {
        id: 'custom-trophy',
        name: 'Recycle Plastic Trophy',
        images: ['/images/coaster.jpg'],
        specs: [
          { label: 'Material',  value: 'HDPE daur ulang' },
          { label: 'Finishing', value: 'Custom ukiran / cetak logo' },
          { label: 'Ukuran',   value: 'Custom sesuai kebutuhan' },
          { label: 'Kegunaan', value: 'Award event perusahaan, CSR' },
          { label: 'MOQ',      value: 'Hubungi kami' },
        ],
        waMsg: 'Halo Notic, saya tertarik pesan Recycle Plastic Trophy. Bisa info lebih lanjut?',
      },
    ],
  },
]

// ── Komponen carousel gambar per variant ──
function VariantCarousel({ variant }: { variant: Variant }) {
  const [imgIdx, setImgIdx] = useState(0)
  const waUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(variant.waMsg)}`

  const prev = () => setImgIdx((i) => (i - 1 + variant.images.length) % variant.images.length)
  const next = () => setImgIdx((i) => (i + 1) % variant.images.length)

  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>

      {/* Gambar */}
      <div className="relative bg-gray-50" style={{ minHeight: 300, aspectRatio: '1' }}>
        <Image
          src={variant.images[imgIdx]}
          alt={variant.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 420px"
        />
        {variant.images.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
              style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1A1A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
              style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#1A1A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {variant.images.map((_, i) => (
                <button key={i} onClick={() => setImgIdx(i)} aria-label={`Gambar ${i + 1}`}
                  style={{ width: i === imgIdx ? 20 : 7, height: 7, borderRadius: 99, background: i === imgIdx ? '#1D978E' : 'rgba(255,255,255,0.7)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.25s' }} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Spesifikasi */}
      <div className="p-8 flex flex-col justify-between" style={{ background: '#fff' }}>
        <div>
          <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 20 }}>
            {variant.name}
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {variant.specs.map((s) => (
                <tr key={s.label} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 600, color: '#1A1A18', padding: '11px 0', width: '38%', verticalAlign: 'top' }}>
                    {s.label}
                  </td>
                  <td style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 13, color: '#4A4A45', padding: '11px 0 11px 12px', lineHeight: 1.6 }}>
                    {s.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="mt-7 flex items-center justify-center gap-2 rounded-full transition-all hover:-translate-y-0.5"
          style={{ background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 14, padding: '13px 24px', textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}

// ── Detail view: tab variant + carousel ──
function CategoryDetail({ cat, onBack }: { cat: Category; onBack: () => void }) {
  const [activeVariant, setActiveVariant] = useState(0)

  return (
    <div>
      {/* Sub-header */}
      <div className="px-6 py-8" style={{ background: '#F7F4EF', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb / back */}
          <button onClick={onBack}
            className="flex items-center gap-2 mb-5 text-sm font-medium transition-colors hover:text-[#1D978E] bg-transparent border-none cursor-pointer p-0"
            style={{ fontFamily: 'Montserrat,sans-serif', color: '#4A4A45' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Kembali ke Semua Produk
          </button>
          <p className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
            Produk
          </p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, color: '#1A1A18', margin: '0 0 6px' }}>
            {cat.label}
          </h2>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 15, color: '#4A4A45', margin: 0 }}>
            {cat.tagline}
          </p>
        </div>
      </div>

      {/* Variant tabs */}
      <div className="px-6 py-4 sticky top-16 z-40"
        style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-5xl mx-auto flex gap-2 flex-wrap">
          {cat.variants.map((v, i) => (
            <button key={v.id} onClick={() => setActiveVariant(i)}
              style={{
                fontFamily: 'Poppins,sans-serif',
                fontWeight: 600,
                fontSize: 13,
                padding: '9px 20px',
                borderRadius: 99,
                border: activeVariant === i ? 'none' : '1.5px solid rgba(0,0,0,0.12)',
                background: activeVariant === i ? '#1D978E' : 'transparent',
                color: activeVariant === i ? '#fff' : '#4A4A45',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active variant detail */}
      <div className="px-6 py-12" style={{ background: '#fff', minHeight: '50vh' }}>
        <div className="max-w-5xl mx-auto">
          <VariantCarousel variant={cat.variants[activeVariant]} />
        </div>
      </div>
    </div>
  )
}

// ── Grid card untuk setiap kategori ──
function CategoryCard({ cat, onClick }: { cat: Category; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="group text-left w-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', padding: 0 }}>
      {/* Cover image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={cat.coverImage}
          alt={cat.label}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
          className="group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: 'rgba(29,151,142,0.55)' }}>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: '#fff', color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
            Lihat Produk
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </div>
      {/* Label */}
      <div className="px-5 py-4" style={{ background: '#F7F4EF', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 16, fontWeight: 700, color: '#1A1A18', margin: '0 0 3px' }}>
          {cat.label}
        </p>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 12, color: '#4A4A45', margin: 0, lineHeight: 1.5 }}>
          {cat.tagline}
        </p>
      </div>
    </button>
  )
}

// ── Main page ──
export default function ProductPage() {
  const [selected, setSelected] = useState<string | null>(null)

  // Baca kategori dari navbar dropdown
  useEffect(() => {
    const cat = sessionStorage.getItem('notic_product_cat')
    if (cat) {
      setSelected(cat)
      sessionStorage.removeItem('notic_product_cat')
    }
  }, [])
  const activeCat = categories.find((c) => c.id === selected)

  return (
    <main>
      <Navbar />

      {/* Page header — selalu tampil */}
      <section className="px-6 py-16 text-center" style={{ background: '#F7F4EF', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.12em' }}>
          Produk Kami
        </p>
        <h1 style={{
          fontFamily: 'Poppins,sans-serif',
          fontSize: 'clamp(28px,4vw,50px)',
          fontWeight: 700,
          color: '#1A1A18',
          lineHeight: 1.15,
          marginBottom: 12,
          letterSpacing: '-0.5px',
        }}>
          Semua Produk Notic
        </h1>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 15, color: '#4A4A45', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
          {selected ? 'Pilih varian untuk melihat spesifikasi dan langsung pesan.' : 'Pilih kategori produk untuk melihat detail dan varian yang tersedia.'}
        </p>
      </section>

      {/* Konten: grid atau detail */}
      {!selected || !activeCat ? (
        /* Grid kategori */
        <section className="px-6 py-14" style={{ background: '#fff', minHeight: '60vh' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} onClick={() => {
                setSelected(cat.id)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }} />
            ))}
          </div>
        </section>
      ) : (
        /* Detail kategori */
        <CategoryDetail cat={activeCat} onBack={() => {
          setSelected(null)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} />
      )}

      <Footer />
    </main>
  )
}

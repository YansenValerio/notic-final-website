import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'

const missions = [
  {
    icon: '✦',
    title: 'Crafts & Empowers',
    desc: 'Setiap produk Notic dibuat tangan oleh pengrajin lokal, memberdayakan komunitas sambil menghasilkan karya yang bermakna.',
  },
  {
    icon: '♻️',
    title: '100% Daur Ulang',
    desc: 'Seluruh bahan baku berasal dari sampah plastik HDPE rumah tangga yang diselamatkan sebelum menjadi polutan.',
  },
  {
    icon: '🌿',
    title: 'Green Merchandise',
    desc: 'Solusi sustainable untuk perusahaan yang ingin corporate gift dan merchandise yang punya dampak nyata bagi lingkungan.',
  },
]

const values = [
  { num: '500+', label: 'Kg Plastik Diselamatkan' },
  { num: '2.000+', label: 'Produk Terjual' },
  { num: '20+', label: 'Brand Partner' },
  { num: '2023', label: 'Tahun Berdiri' },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Plastic is Fantastic"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14,112,106,0.55) 0%, rgba(14,112,106,0.75) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#A8E0DC', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.12em' }}>
            Tentang Kami
          </p>
          <h1 style={{
            fontFamily: 'Poppins,sans-serif',
            fontSize: 'clamp(36px,5vw,68px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            color: '#fff',
            maxWidth: 700,
          }}>
            Plastic is<br />
            <span style={{ color: '#A8E0DC', fontStyle: 'italic' }}>Fantastic.</span>
          </h1>
          <p className="mt-5" style={{
            fontFamily: 'Montserrat,sans-serif',
            fontSize: 17,
            color: 'rgba(255,255,255,0.82)',
            maxWidth: 520,
            lineHeight: 1.7,
          }}>
            Kami percaya sampah bukan akhir cerita — melainkan awal dari sesuatu yang indah dan bermakna.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="px-6 py-20" style={{ background: '#F7F4EF' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
              Siapa Notic
            </p>
            <h2 style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(26px,3vw,40px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#1A1A18',
              marginBottom: 20,
            }}>
              Brand Lokal yang Mengubah<br />Sampah Jadi Karya
            </h2>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, color: '#4A4A45', lineHeight: 1.8, marginBottom: 16 }}>
              Notic adalah brand Indonesia yang berfokus pada pengolahan sampah plastik HDPE menjadi produk fungsional — beads, gelang, coaster, hingga merchandise custom.
            </p>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, color: '#4A4A45', lineHeight: 1.8, marginBottom: 28 }}>
              Setiap produk mengandung nilai keberlanjutan dan memiliki dampak langsung terhadap pengurangan sampah plastik. Notic hadir dengan misi menjadikan limbah sebagai material bernilai tinggi, dengan tampilan modern dan tetap estetis.
            </p>
            <Link href="/how-we-make"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 15, padding: '13px 26px', borderRadius: 99, textDecoration: 'none' }}>
              Lihat Cara Kami Membuat
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.label} className="rounded-2xl p-7 flex flex-col gap-2"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: '#1D978E', lineHeight: 1 }}>
                  {v.num}
                </span>
                <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 13, color: '#4A4A45' }}>
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-6 py-20" style={{ background: '#E6F7F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
              Misi Kami
            </p>
            <h2 style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(26px,3vw,40px)',
              fontWeight: 700,
              color: '#1A1A18',
              lineHeight: 1.2,
            }}>
              Tiga Pilar yang Menggerakkan Notic
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {missions.map((m) => (
              <div key={m.title} className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ background: '#fff', boxShadow: '0 4px 24px rgba(29,151,142,0.08)', border: '1px solid rgba(29,151,142,0.12)' }}>
                <span style={{ fontSize: 32 }}>{m.icon}</span>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 18, fontWeight: 700, color: '#1A1A18', margin: 0 }}>{m.title}</h3>
                <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, color: '#4A4A45', lineHeight: 1.75, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="px-6 py-20" style={{ background: '#1A1A18' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: '#3DBDB4', fontFamily: 'Poppins,sans-serif' }}>
            Arah 2026
          </p>
          <h2 style={{
            fontFamily: 'Poppins,sans-serif',
            fontSize: 'clamp(26px,3vw,42px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Dari B2B Menuju<br />
            <span style={{ color: '#3DBDB4', fontStyle: 'italic' }}>Lifestyle Brand</span>
          </h2>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 32px' }}>
            Mulai 2026, Notic memperkuat penetrasi pasar B2C dengan produk yang lebih variatif dan relevan untuk konsumen individu — retail, penjualan online, dan identitas visual sebagai lifestyle brand.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 99, textDecoration: 'none' }}>
            Kolaborasi dengan Kami
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

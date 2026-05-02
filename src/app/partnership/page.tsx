'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/utils'

const testimonials = [
  {
    id: 't1',
    image: '/images/gelang.jpg',
    quote: 'Gelangnya cantik banget dan unik! Tim Notic sangat responsif dan hasilnya melampaui ekspektasi kami. Pasti akan order lagi untuk event CSR berikutnya.',
    name: 'Rayhan S.',
    role: 'ESG Team, Bank Mandiri',
  },
  {
    id: 't2',
    image: '/images/coaster.jpg',
    quote: 'Coaster daur ulang dari Notic jadi conversation starter di restoran kami. Tamu-tamu selalu penasaran dan terkesan saat tahu dibuat dari sampah plastik.',
    name: 'Rayhan, Owner',
    role: 'Lima Cafe, Lampung',
  },
  {
    id: 't3',
    image: '/images/beads.jpg',
    quote: 'Kami pakai bracelet Notic untuk souvenir event sustainability kami. Peserta senang karena ada nilai cerita di balik setiap gelang yang mereka bawa pulang.',
    name: 'Dian R.',
    role: 'CSR Officer, Mandiri Capital',
  },
  {
    id: 't4',
    image: '/images/gelang.jpg',
    quote: 'Notic bantu brand kami bikin merchandise yang truly meaningful. Klien kami terkesan karena ada dampak nyata lingkungan di setiap produk yang kami berikan.',
    name: 'Rizky A.',
    role: 'Marketing Manager, Liberty Society',
  },
  {
    id: 't5',
    image: '/images/coaster.jpg',
    quote: 'Custom coaster dengan logo kami terlihat premium dan bercerita. Kualitasnya di luar ekspektasi — tebal, kuat, dan motif marmernya unik setiap lembarnya.',
    name: 'Bagas P.',
    role: 'Brand Manager, ACC Astra',
  },
]

const partners = [
  'Bank BRI', 'Liverpool FC x EA FC Mobile', 'Mandiri Capital', 'Bank Mandiri',
  'Liberty Society', 'ACC (Astra)', 'UGM', 'Chandra Asri', 'HayHoo Coffee',
  'Bukit Karya Jawa', 'CESGS', 'Ocean Integrity', 'Wonderful Indonesia', 'REEF',
  'Lima Cafe', 'Arhotel', 'Sedekah Energi', 'Earthsensial', 'Umat Semesta',
  'Moksha Coffee Space',
]

const doubled = [...testimonials, ...testimonials]

export default function PartnershipPage() {
  const [testiPaused, setTestiPaused] = useState(false)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 text-center" style={{ background: '#F7F4EF' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.12em' }}>
          Kemitraan
        </p>
        <h1 style={{
          fontFamily: 'Poppins,sans-serif',
          fontSize: 'clamp(32px,5vw,60px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-1px',
          color: '#1A1A18',
          marginBottom: 16,
        }}>
          Bergabung dalam<br />
          <span style={{ color: '#1D978E', fontStyle: 'italic' }}>Gerakan Hijau</span>
        </h1>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 17, color: '#4A4A45', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Bergabunglah bersama 50+ brand dan perusahaan yang sudah menjadikan Notic mitra green merchandise mereka.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 99, textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Ajak Kerjasama
        </a>
      </section>

      {/* Testimonials rolling */}
      <section className="py-20 overflow-hidden" style={{ background: '#1D978E' }}>
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#A8E0DC', fontFamily: 'Poppins,sans-serif' }}>
            Kata Mereka
          </p>
          <h2 style={{
            fontFamily: 'Poppins,sans-serif',
            fontSize: 'clamp(26px,3vw,40px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
          }}>
            What They Say About Notic
          </h2>
        </div>

        <div style={{ overflow: 'hidden' }}
          onMouseEnter={() => setTestiPaused(true)}
          onMouseLeave={() => setTestiPaused(false)}>
          <div style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            paddingLeft: 24,
            animation: 'scrollLeft 40s linear infinite',
            animationPlayState: testiPaused ? 'paused' : 'running',
          }}>
            {doubled.map((t, i) => (
              <div key={`${t.id}-${i}`}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: 320, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                {/* Product photo */}
                <div style={{ width: '100%', height: 200, position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                {/* Review */}
                <div className="p-5">
                  <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 13.5, lineHeight: 1.75, color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', marginBottom: 14 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 12 }}>
                    <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', margin: 0 }}>{t.name}</p>
                    <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 12, color: '#A8E0DC', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scrollLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollLeftSlow {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRightSlow {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* Our Partners — gambar banner */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
              Klien & Mitra
            </p>
            <h2 style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(22px,2.5vw,34px)',
              fontWeight: 700,
              color: '#1A1A18',
              lineHeight: 1.2,
            }}>
              Our Partners
            </h2>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 15, color: '#4A4A45', marginTop: 10 }}>
              Brand & perusahaan yang sudah mempercayakan green merchandise mereka kepada Notic.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: '#F7F2EE', padding: '48px 56px', boxShadow: '0 2px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <Image
              src="/images/partner-logos.png"
              alt="Partner Notic: Bank BRI, Liverpool FC x EA, Mandiri Capital, Mandiri, UGM, ACC Astra, Liberty Society, HayHoo Coffee, CESGS, Bukit Karya Jawa, Wonderful Indonesia, Chandra Asri, Ocean Integrity, Arhotel, Earthsensial, Sedekah Energi, REEF, Lima, Morsha, Wakaf Hutan"
              width={1800}
              height={670}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
              sizes="(max-width: 768px) 100vw, 960px"
            />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="px-6 py-20" style={{ background: '#F7F4EF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
              Keunggulan Kerjasama
            </p>
            <h2 style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(24px,3vw,38px)',
              fontWeight: 700,
              color: '#1A1A18',
              lineHeight: 1.2,
            }}>
              Kenapa Pilih Notic?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: '🎨', title: 'Full Custom', desc: 'Desain, warna, ukuran, dan finishing bisa disesuaikan penuh dengan kebutuhan dan identitas brand Anda.' },
              { icon: '🌿', title: 'Nilai Sustainability', desc: 'Setiap produk punya cerita dampak lingkungan yang bisa jadi bagian dari narasi CSR dan branding Anda.' },
              { icon: '⚡', title: 'Responsif & Tepat Waktu', desc: 'Tim Notic siap konsultasi dari awal hingga pengiriman. Proses transparan dan on-schedule.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-8"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: 36, display: 'block', marginBottom: 16 }}>{f.icon}</span>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 17, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, color: '#4A4A45', lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

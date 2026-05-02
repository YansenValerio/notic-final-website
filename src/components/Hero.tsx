import HeroPhotoStack from './HeroPhotoStack'
import { WHATSAPP_URL } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center px-6 py-16 gap-12 relative overflow-hidden" style={{ background: '#F7F4EF' }}>
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: '#E6F7F6', opacity: 0.7 }} />
      <div className="absolute -bottom-20 left-1/3 w-[260px] h-[260px] rounded-full pointer-events-none" style={{ background: '#A8E0DC', opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 relative z-10">
        {/* Text — 45% width */}
        <div style={{ flex: '0 0 42%' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#E6F7F6' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#1D978E' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#0E706A', fontFamily: 'Poppins,sans-serif' }}>
              Notic Plastic Recycler
            </span>
          </div>

          <h1 className="mb-5 text-balance" style={{
            fontFamily: 'Poppins,sans-serif',
            fontSize: 'clamp(36px,4.5vw,60px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: '#1A1A18',
          }}>
            Sampah Plastik<br />
            Jadi Karya yang{' '}
            <span style={{ color: '#1D978E', fontStyle: 'italic' }}>Bermakna</span>
          </h1>

          <p className="mb-8 leading-relaxed" style={{
            fontFamily: 'Montserrat,sans-serif',
            fontSize: 16,
            color: '#4A4A45',
            maxWidth: 420,
          }}>
            Brand lokal yang mengolah sampah plastik HDPE dari rumah tangga menjadi produk daur ulang yang stylish dan penuh cerita.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#produk" style={{ background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 99, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}>
              Lihat Produk
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#1A1A18', fontFamily: 'Poppins,sans-serif', fontWeight: 500, fontSize: 15, padding: '14px 28px', borderRadius: 99, border: '1.5px solid rgba(0,0,0,0.15)', textDecoration: 'none', transition: 'all 0.2s' }}>
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Slideshow — full width di mobile, 55% di desktop */}
        <div className="w-full md:w-auto" style={{ flex: '0 0 55%' }}>
          <HeroPhotoStack />
        </div>
      </div>
    </section>
  )
}

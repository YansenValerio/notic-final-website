'use client'

import { useState } from 'react'
import { testimonials } from '@/data/testimonials'

const doubled = [...testimonials, ...testimonials]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5C842">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function TestiCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-4 p-6 rounded-2xl"
      style={{ width: 300, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.13)' }}
    >
      <StarRating rating={t.rating} />
      <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', flex: 1 }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: 36, height: 36, background: '#3DBDB4', fontFamily: 'Poppins,sans-serif', fontSize: 12, fontWeight: 600, color: '#0E706A' }}>
          {t.initials}
        </div>
        <div>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 600, color: '#fff', margin: 0 }}>{t.name}</p>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false)
  const row2 = [...doubled].reverse()

  return (
    <section id="testimoni" className="py-20 overflow-hidden" style={{ background: '#1D978E' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#A8E0DC', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.1em' }}>
            Kata Mereka
          </p>
          <h2 className="mb-4" style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 700, lineHeight: 1.15, color: '#fff' }}>
            Dipercaya Oleh Banyak<br />Pelanggan & Brand
          </h2>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 440, margin: '0 auto' }}>
            Dari individual hingga perusahaan — semua merasakan dampak nyata produk Notic.
          </p>
        </div>
      </div>

      {/* Rolling Row 1 → */}
      <div className="mb-4" style={{ overflow: 'hidden' }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div style={{
          display: 'flex', gap: 16, width: 'max-content', paddingLeft: 24,
          animation: 'scrollLeft 35s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}>
          {doubled.map((t, i) => <TestiCard key={`r1-${i}`} t={t} />)}
        </div>
      </div>

      {/* Rolling Row 2 ← */}
      <div style={{ overflow: 'hidden' }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div style={{
          display: 'flex', gap: 16, width: 'max-content', paddingLeft: 24,
          animation: 'scrollRight 35s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}>
          {row2.map((t, i) => <TestiCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

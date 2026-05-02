import Image from 'next/image'

export default function About() {
  const values = [
    { title: 'Crafts & Empowers.', desc: 'Setiap produk dibuat tangan, memberdayakan pengrajin lokal.' },
    { title: '100% Daur Ulang.',   desc: 'Tidak ada bahan baru — hanya plastik HDPE yang diselamatkan.' },
    { title: 'Green Merchandise.', desc: 'Solusi sustainable untuk corporate gift, CSR, dan event kit.' },
  ]

  return (
    <section id="about" className="px-6 py-20" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* ── Visual ── */}
        <div className="flex-1 relative w-full">
          {/* Main photo */}
          <div className="w-full rounded-3xl overflow-hidden relative" style={{ aspectRatio: '1' }}>
            <Image
              src="/images/about-hero.jpg"
              alt="Plastic is Fantastic — Notic"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            {/* Overlay gradient bottom */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)' }} />
            {/* Tagline overlay */}
            <div className="absolute bottom-6 left-6">
              <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>
                #noticenvironment
              </p>
            </div>
          </div>

          {/* Floating year badge */}
          <div className="absolute bottom-5 right-6 px-5 py-3 rounded-2xl" style={{ background: '#1D978E', color: '#fff' }}>
            <span className="block font-bold" style={{ fontFamily: 'Poppins,sans-serif', fontSize: 28, lineHeight: 1 }}>2023</span>
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 13, color: '#A8E0DC' }}>Berdiri sejak</span>
          </div>
        </div>

        {/* ── Text ── */}
        <div className="flex-[1.2]">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.1em' }}>
            Tentang Notic
          </p>
          <h2 className="mb-4" style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.5px', color: '#1A1A18' }}>
            Misi Kami: Jadikan<br />Limbah Bernilai Tinggi
          </h2>
          <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, color: '#4A4A45' }}>
            Notic hadir dari keresahan terhadap sampah plastik yang terus menumpuk. Kami membuktikan bahwa dengan kreativitas, limbah bisa diubah menjadi produk modern dan estetis — bagi manusia dan lingkungan.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#1D978E' }} />
                <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 15, color: '#4A4A45', lineHeight: 1.6 }}>
                  <strong style={{ color: '#1A1A18', fontFamily: 'Poppins,sans-serif' }}>{v.title}</strong> {v.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#cta"
            style={{
              background: '#1D978E', color: '#fff',
              fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 15,
              padding: '14px 28px', borderRadius: 99,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'all 0.2s',
            }}
          >
            Kolaborasi Bersama Kami →
          </a>
        </div>
      </div>
    </section>
  )
}

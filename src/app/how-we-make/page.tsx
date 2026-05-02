import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/utils'

// Tambahkan path gambar di field `image` setiap step saat foto sudah tersedia.
// Jika image: null, ditampilkan placeholder abu-abu dengan label.
const steps = [
  {
    step: '01',
    title: 'Pengumpulan Plastik',
    subtitle: 'Collection',
    desc: 'Plastik HDPE dikumpulkan dari masyarakat sekitar dan mitra pengepul terpercaya. Kami menerima botol sampo, kemasan detergen, dan plastik rumah tangga jenis lainnya.',
    detail: 'Jenis plastik: HDPE (kode #2)',
    image: null as string | null,   // ganti dengan: '/images/proses/01-koleksi.jpg'
    color: '#E6F7F6',
    accent: '#1D978E',
  },
  {
    step: '02',
    title: 'Sortir & Pilah Warna',
    subtitle: 'Sorting',
    desc: 'Plastik disortir secara manual berdasarkan jenis dan warna. Proses ini krusial — pemilahan warna yang tepat menghasilkan pola marmer yang khas pada setiap produk.',
    detail: 'Dikerjakan manual dengan tangan',
    image: null as string | null,
    color: '#F7F4EF',
    accent: '#0E706A',
  },
  {
    step: '03',
    title: 'Pencucian & Pengeringan',
    subtitle: 'Cleaning',
    desc: 'Setiap plastik dicuci bersih untuk menghilangkan kotoran, sisa produk, dan kontaminan. Setelah dicuci, dijemur hingga benar-benar kering sebelum masuk proses berikutnya.',
    detail: 'Tanpa bahan kimia keras',
    image: null as string | null,
    color: '#E6F7F6',
    accent: '#1D978E',
  },
  {
    step: '04',
    title: 'Pencacahan',
    subtitle: 'Shredding',
    desc: 'Plastik yang sudah bersih dicacah menjadi serpihan kecil menggunakan mesin pencacah. Ukuran serpihan dikontrol untuk memastikan hasil akhir yang konsisten.',
    detail: 'Serpihan 3–5mm',
    image: null as string | null,
    color: '#F7F4EF',
    accent: '#0E706A',
  },
  {
    step: '05',
    title: 'Pelelehan & Pewarnaan',
    subtitle: 'Melting',
    desc: 'Serpihan plastik dimasukkan ke dalam cetakan dan dipanaskan hingga melebur. Di sinilah keajaiban terjadi — warna-warna berpadu membentuk pola marmer yang unik dan tak bisa diulang.',
    detail: 'Suhu 160–200°C',
    image: null as string | null,
    color: '#E6F7F6',
    accent: '#1D978E',
  },
  {
    step: '06',
    title: 'Pembentukan Produk',
    subtitle: 'Forming',
    desc: 'Plastik yang masih panas dibentuk sesuai cetakan — bulat untuk beads, lingkaran pipih untuk coaster. Setiap produk didinginkan perlahan agar tidak retak dan mempertahankan bentuknya.',
    detail: 'Setiap produk unik',
    image: null as string | null,
    color: '#F7F4EF',
    accent: '#0E706A',
  },
  {
    step: '07',
    title: 'Finishing & QC',
    subtitle: 'Quality Check',
    desc: 'Setiap produk diperiksa secara manual — permukaan diamplas halus, diseleksi berdasarkan kualitas, dan dipastikan aman untuk digunakan sehari-hari.',
    detail: '100% cek manual',
    image: null as string | null,
    color: '#E6F7F6',
    accent: '#1D978E',
  },
  {
    step: '08',
    title: 'Perakitan & Kemas',
    subtitle: 'Assembly',
    desc: 'Beads dirangkai menjadi gelang secara handmade, coaster dikemas dengan tag daur ulang. Setiap produk siap dikirim ke tangan pelanggan dengan kemasan yang juga ramah lingkungan.',
    detail: 'Packaging sustainable',
    image: null as string | null,
    color: '#F7F4EF',
    accent: '#0E706A',
  },
]

function StepImageSlot({ image, step, accent }: { image: string | null; step: string; accent: string }) {
  if (image) {
    return (
      <div className="rounded-2xl overflow-hidden flex-shrink-0"
        style={{ width: '100%', maxWidth: 380, aspectRatio: '4/3', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
        <Image src={image} alt={`Step ${step}`} fill style={{ objectFit: 'cover' }} sizes="380px" />
      </div>
    )
  }
  // Placeholder — akan diganti saat foto tersedia
  return (
    <div className="rounded-2xl flex-shrink-0 flex flex-col items-center justify-center gap-3"
      style={{
        width: '100%',
        maxWidth: 380,
        aspectRatio: '4/3',
        background: `${accent}10`,
        border: `2px dashed ${accent}40`,
      }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 12, color: `${accent}80`, textAlign: 'center', lineHeight: 1.5, padding: '0 16px' }}>
        Foto step {step}<br />
        <span style={{ fontWeight: 400, fontSize: 11 }}>Tambahkan path gambar di<br /><code style={{ fontSize: 10 }}>how-we-make/page.tsx</code></span>
      </span>
    </div>
  )
}

export default function HowWeMakePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 text-center" style={{ background: '#1D978E' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#A8E0DC', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.12em' }}>
          Proses Produksi
        </p>
        <h1 style={{
          fontFamily: 'Poppins,sans-serif',
          fontSize: 'clamp(34px,5vw,64px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-1px',
          color: '#fff',
          marginBottom: 20,
        }}>
          How We Make
        </h1>
        <p style={{
          fontFamily: 'Montserrat,sans-serif',
          fontSize: 17,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: 520,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Dari sampah plastik rumah tangga hingga produk estetis siap pakai — setiap langkah dikerjakan dengan tangan dan penuh perhatian.
        </p>
      </section>

      {/* Steps */}
      <section className="py-2" style={{ background: '#fff' }}>
        {steps.map((s, i) => (
          <div key={s.step} className="px-6 py-14" style={{ background: s.color }}>
            <div className="max-w-5xl mx-auto">

              {/* Top row: step number + label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{ width: 60, height: 60, background: s.accent }}>
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>
                    {s.step}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: s.accent, fontFamily: 'Poppins,sans-serif', marginBottom: 2 }}>
                    {s.subtitle}
                  </p>
                  <h2 style={{
                    fontFamily: 'Poppins,sans-serif',
                    fontSize: 'clamp(18px,2.2vw,26px)',
                    fontWeight: 700,
                    color: '#1A1A18',
                    lineHeight: 1.25,
                    margin: 0,
                  }}>
                    {s.title}
                  </h2>
                </div>
              </div>

              {/* Bottom row: image (left) + text (right) — alternating per step */}
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>

                {/* Image slot */}
                <div style={{ flex: '0 0 42%' }}>
                  <StepImageSlot image={s.image} step={s.step} accent={s.accent} />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }} className="flex flex-col justify-center gap-5">
                  <p style={{
                    fontFamily: 'Montserrat,sans-serif',
                    fontSize: 15,
                    color: '#4A4A45',
                    lineHeight: 1.85,
                    margin: 0,
                  }}>
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold self-start"
                    style={{ background: `${s.accent}15`, color: s.accent, fontFamily: 'Poppins,sans-serif' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.accent, display: 'inline-block', flexShrink: 0 }} />
                    {s.detail}
                  </span>

                  {/* Connector to next step */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex items-center gap-2 mt-2" style={{ color: `${s.accent}50` }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7"/>
                      </svg>
                      <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 12 }}>
                        Lanjut ke step {steps[i + 1].step}
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center" style={{ background: '#1A1A18' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#3DBDB4', fontFamily: 'Poppins,sans-serif' }}>
          Custom Order
        </p>
        <h2 style={{
          fontFamily: 'Poppins,sans-serif',
          fontSize: 'clamp(24px,3vw,40px)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: 16,
          lineHeight: 1.2,
        }}>
          Tertarik Memesan Produk Custom?
        </h2>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.7 }}>
          Kami siap mengerjakan merchandise daur ulang sesuai identitas brand Anda — dari desain hingga pengiriman.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 99, textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Diskusi via WhatsApp
        </a>
      </section>

      <Footer />
    </main>
  )
}

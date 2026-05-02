import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from '@/lib/utils'

const channels = [
  {
    id: 'wa',
    label: 'WhatsApp',
    handle: '+62 851-5755-2617',
    desc: 'Chat langsung untuk konsultasi produk, custom order, dan pertanyaan lainnya.',
    href: WHATSAPP_URL,
    btnText: 'Chat Sekarang',
    color: '#25D366',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id: 'ig',
    label: 'Instagram',
    handle: '@notic_id',
    desc: 'Lihat portofolio produk terbaru, behind-the-scenes, dan update brand Notic.',
    href: INSTAGRAM_URL,
    btnText: 'Follow & DM',
    color: '#E1306C',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@notic_id',
    desc: 'Tonton video proses produksi, cara daur ulang, dan konten edukasi lingkungan dari Notic.',
    href: 'https://tiktok.com/@notic_id',
    btnText: 'Tonton di TikTok',
    color: '#010101',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    handle: EMAIL,
    desc: 'Untuk inquiry partnership, proposal kerjasama, atau pertanyaan formal lainnya.',
    href: `mailto:${EMAIL}`,
    btnText: 'Kirim Email',
    color: '#1D978E',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

const hours = [
  { day: 'Senin – Jumat', time: '09.00 – 17.00 WIB' },
  { day: 'Sabtu', time: '09.00 – 14.00 WIB' },
  { day: 'Minggu', time: 'Libur' },
]

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 text-center" style={{ background: '#1D978E' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#A8E0DC', fontFamily: 'Poppins,sans-serif', letterSpacing: '0.12em' }}>
          Kontak
        </p>
        <h1 style={{
          fontFamily: 'Poppins,sans-serif',
          fontSize: 'clamp(38px,6vw,72px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          color: '#fff',
          marginBottom: 16,
        }}>
          Hit Me Up 👋
        </h1>
        <p style={{
          fontFamily: 'Montserrat,sans-serif',
          fontSize: 17,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: 460,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Ada pertanyaan, mau diskusi produk custom, atau sekadar mau say hi? Kami siap!
        </p>
      </section>

      {/* Social cards */}
      <section className="px-6 py-20" style={{ background: '#F7F4EF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {channels.map((c) => (
              <div key={c.id} className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-2xl"
                    style={{ width: 56, height: 56, background: `${c.color}15`, color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 16, fontWeight: 700, color: '#1A1A18', margin: 0 }}>{c.label}</p>
                    <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 13, color: '#4A4A45', margin: 0 }}>{c.handle}</p>
                  </div>
                </div>
                <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, color: '#4A4A45', lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {c.desc}
                </p>
                <a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: c.color,
                    color: '#fff',
                    fontFamily: 'Poppins,sans-serif',
                    padding: '11px 20px',
                    textDecoration: 'none',
                  }}>
                  {c.btnText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Hours */}
      <section className="px-6 py-20" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
              Lokasi
            </p>
            <h2 style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(22px,2.5vw,32px)',
              fontWeight: 700,
              color: '#1A1A18',
              marginBottom: 16,
              lineHeight: 1.2,
            }}>
              Temukan Kami di<br />Pekalongan, Jawa Tengah
            </h2>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, color: '#4A4A45', marginBottom: 20, lineHeight: 1.7 }}>
              Studio & workshop produksi Notic berlokasi di Pekalongan — kota batik yang kini juga jadi rumah bagi produk daur ulang estetis.
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.08)', height: 320 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.747638600433!2d109.6500564!3d-6.9207431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7026b1b0309db1%3A0x177d3a252394f00c!2sNotic%20workshop!5e0!3m2!1sid!2sid!4v1777721950861!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Notic - Pekalongan"
              />
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
              Jam Operasional
            </p>
            <h2 style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(22px,2.5vw,32px)',
              fontWeight: 700,
              color: '#1A1A18',
              marginBottom: 20,
              lineHeight: 1.2,
            }}>
              Kapan Kami Bisa<br />Dihubungi?
            </h2>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {hours.map((h, i) => (
                <div key={h.day}
                  className="flex items-center justify-between px-6 py-4"
                  style={{
                    borderBottom: i < hours.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    background: i % 2 === 0 ? '#fff' : '#F7F4EF',
                  }}>
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 14, fontWeight: 600, color: '#1A1A18' }}>{h.day}</span>
                  <span style={{
                    fontFamily: 'Montserrat,sans-serif',
                    fontSize: 14,
                    color: h.time === 'Libur' ? '#999' : '#1D978E',
                    fontWeight: h.time === 'Libur' ? 400 : 500,
                  }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl p-6" style={{ background: '#E6F7F6', border: '1px solid rgba(29,151,142,0.2)' }}>
              <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 14, fontWeight: 600, color: '#0E706A', marginBottom: 6 }}>
                💬 Respons Cepat via WhatsApp
              </p>
              <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 13, color: '#4A4A45', lineHeight: 1.7, margin: 0 }}>
                Untuk respon tercepat, chat kami via WhatsApp. Kami biasanya membalas dalam 1–2 jam di hari kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Image from 'next/image'
import { products } from '@/data/products'
import { WHATSAPP_URL } from '@/lib/utils'

export default function Products() {
  return (
    <section id="produk" className="px-6 py-20" style={{background:'#fff'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color:'#1D978E', fontFamily:'Poppins,sans-serif', letterSpacing:'0.1em'}}>Koleksi Kami</p>
          <h2 className="mb-4" style={{fontFamily:'Poppins,sans-serif', fontSize:'clamp(28px,3.5vw,42px)', fontWeight:700, lineHeight:1.15, letterSpacing:'-0.5px', color:'#1A1A18'}}>
            Dari Plastik Bekas,<br />Lahir Produk Istimewa
          </h2>
          <p style={{fontFamily:'Montserrat,sans-serif', fontSize:16, color:'#4A4A45', maxWidth:520, margin:'0 auto'}}>
            Setiap produk dibuat dari 100% plastik HDPE daur ulang — tanpa mengorbankan estetika dan kualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.11)]"
              style={{border:'1px solid rgba(0,0,0,0.08)', background:'#fff'}}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{aspectRatio:'4/3'}}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold" style={{background:'#1D978E', color:'#fff', fontFamily:'Poppins,sans-serif'}}>
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide mb-1.5" style={{color:'#1D978E', fontFamily:'Poppins,sans-serif'}}>
                  {product.category}
                </p>
                <h3 className="mb-2 font-semibold" style={{fontFamily:'Poppins,sans-serif', fontSize:16, color:'#1A1A18'}}>
                  {product.name}
                </h3>
                <p className="mb-4 leading-relaxed" style={{fontFamily:'Montserrat,sans-serif', fontSize:13, color:'#6B6B62'}}>
                  {product.description}
                </p>
                <a
                  href={product.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3 no-underline"
                  style={{color:'#1D978E', fontFamily:'Poppins,sans-serif'}}
                >
                  {product.ctaLabel}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

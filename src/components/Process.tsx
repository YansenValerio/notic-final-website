import { processSteps } from '@/data/content'

export default function Process() {
  return (
    <section id="proses" className="px-6 py-20" style={{background:'#E6F7F6'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color:'#1D978E', fontFamily:'Poppins,sans-serif', letterSpacing:'0.1em'}}>Cara Kerja</p>
          <h2 className="mb-4" style={{fontFamily:'Poppins,sans-serif', fontSize:'clamp(28px,3.5vw,42px)', fontWeight:700, lineHeight:1.15, letterSpacing:'-0.5px', color:'#1A1A18'}}>
            Dari Sampah ke Produk,<br />Begini Prosesnya
          </h2>
          <p style={{fontFamily:'Montserrat,sans-serif', fontSize:16, color:'#4A4A45', maxWidth:520, margin:'0 auto'}}>
            Setiap langkah dikerjakan dengan tangan — memastikan setiap produk memiliki karakter uniknya sendiri.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute" style={{top:24, left:'calc(12.5% + 12px)', right:'calc(12.5% + 12px)', height:'1.5px', background:'#A8E0DC'}} />
          {processSteps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold relative z-10 flex-shrink-0" style={{background:'#1D978E', color:'#fff', fontFamily:'Poppins,sans-serif'}}>
                {s.step}
              </div>
              <div>
                <h3 className="mb-1 font-semibold" style={{fontFamily:'Poppins,sans-serif', fontSize:14, color:'#1A1A18'}}>{s.title}</h3>
                <p style={{fontFamily:'Montserrat,sans-serif', fontSize:13, color:'#4A4A45', lineHeight:1.6}}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

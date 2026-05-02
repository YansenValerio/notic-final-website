import { stats } from '@/data/content'

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3" style={{borderTop:'1px solid rgba(0,0,0,0.08)', borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
      {stats.map((stat, i) => (
        <div key={stat.label} className="py-10 px-8 text-center" style={{borderRight: i < stats.length-1 ? '1px solid rgba(0,0,0,0.08)' : 'none'}}>
          <div className="mb-2" style={{fontFamily:'Poppins,sans-serif', fontSize:'clamp(36px,4vw,52px)', fontWeight:700, color:'#1D978E', lineHeight:1}}>
            {stat.value}
          </div>
          <div style={{fontFamily:'Montserrat,sans-serif', fontSize:14, color:'#8A8A82'}}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

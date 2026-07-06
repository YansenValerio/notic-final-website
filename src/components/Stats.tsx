'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/data/content'

// Pisahkan "500+" / "2.000+" menjadi prefix, angka target, dan suffix.
function parseStat(value: string) {
  const m = value.match(/^([^\d]*)([\d.]+)(.*)$/)
  if (!m) return { prefix: '', target: 0, suffix: value }
  return {
    prefix: m[1],
    target: parseInt(m[2].replace(/\./g, ''), 10) || 0,
    suffix: m[3],
  }
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

function CountUp({ value, active }: { value: string; active: boolean }) {
  const { prefix, target, suffix } = parseStat(value)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    started.current = true

    // Hormati preferensi reduced-motion: langsung tampilkan angka akhir.
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(target)
      return
    }

    const duration = 1600
    let raf = 0
    let start: number | null = null
    const tick = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setDisplay(Math.round(easeOutExpo(p) * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return (
    <>
      {prefix}
      {display.toLocaleString('id-ID')}
      {suffix}
    </>
  )
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="py-10 px-8 text-center"
          style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}
        >
          <div
            className="mb-2"
            style={{
              fontFamily: 'Poppins,sans-serif',
              fontSize: 'clamp(36px,4vw,52px)',
              fontWeight: 700,
              color: '#1D978E',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            <CountUp value={stat.value} active={active} />
          </div>
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, color: '#6B6B62' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

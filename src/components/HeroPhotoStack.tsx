'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const photos = [
  { src: '/images/gelang.jpg',  alt: 'Gelang Manik Daur Ulang' },
  { src: '/images/beads.jpg',   alt: 'Beads Plastik Daur Ulang' },
  { src: '/images/coaster.jpg', alt: 'Coaster Daur Ulang' },
]

export default function HeroPhotoStack() {
  const [current, setCurrent] = useState(0)
  const [next, setNext]       = useState<number | null>(null)
  const [sliding, setSliding] = useState(false)
  const timerRef              = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Mulai slide ke index tertentu
  const slideTo = (target: number) => {
    if (sliding || target === current) return
    setNext(target)
    setSliding(true)
    // Setelah animasi selesai, commit
    timerRef.current = setTimeout(() => {
      setCurrent(target)
      setNext(null)
      setSliding(false)
    }, 420)
  }

  // Auto-play
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((prev) => {
        const target = (prev + 1) % photos.length
        setNext(target)
        setSliding(true)
        timerRef.current = setTimeout(() => {
          setCurrent(target)
          setNext(null)
          setSliding(false)
        }, 420)
        return prev // tetap prev sampai timeout selesai
      })
    }, 3800)
    return () => {
      clearInterval(iv)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '3/2', borderRadius: 20, boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}
    >
      {/* Slide saat ini — bergerak keluar ke kiri saat sliding */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: sliding ? 'translateX(-100%)' : 'translateX(0)',
          transition: sliding ? 'transform 0.42s cubic-bezier(0.4,0,0.2,1)' : 'none',
          willChange: 'transform',
          zIndex: 1,
        }}
      >
        <Image
          src={photos[current].src}
          alt={photos[current].alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 600px"
          priority={current === 0}
        />
      </div>

      {/* Slide berikutnya — masuk dari kanan */}
      {next !== null && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: sliding ? 'translateX(0)' : 'translateX(100%)',
            transition: sliding ? 'transform 0.42s cubic-bezier(0.4,0,0.2,1)' : 'none',
            willChange: 'transform',
            zIndex: 2,
          }}
        >
          <Image
            src={photos[next].src}
            alt={photos[next].alt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      )}

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
          zIndex: 10,
        }}
      >
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => slideTo(i)}
            aria-label={`Foto ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 99,
              background: i === current ? '#fff' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

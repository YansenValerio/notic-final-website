'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { WHATSAPP_URL } from '@/lib/utils'

const productDropdown = [
  { label: 'Coaster',  id: 'coaster'  },
  { label: 'Beads',    id: 'beads'    },
  { label: 'Bracelet', id: 'bracelet' },
  { label: 'Custom',   id: 'custom'   },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobProd, setMobProd]   = useState(false)
  const pathname                = usePathname()
  const router                  = useRouter()
  const dropRef                 = useRef<HTMLLIElement>(null)
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDrop  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropOpen(true) }
  const closeDrop = () => { closeTimer.current = setTimeout(() => setDropOpen(false), 120) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  // Klik item dropdown: simpan kategori ke sessionStorage lalu navigate ke /product
  const goToCategory = (id: string) => {
    sessionStorage.setItem('notic_product_cat', id)
    router.push('/product')
    setDropOpen(false)
    setOpen(false)
  }

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'} border-b border-black/[0.06]`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image src="/images/logo.png" alt="Notic" width={40} height={40} className="w-full h-full object-cover" />
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {[
              { label: 'About Us',    href: '/about' },
              { label: 'How We Make', href: '/how-we-make' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  className="text-sm font-medium no-underline transition-colors"
                  style={{ fontFamily: 'Montserrat,sans-serif', color: isActive(l.href) ? '#1D978E' : '#4A4A45' }}>
                  {l.label}
                </Link>
              </li>
            ))}

            {/* ── Product dropdown ── */}
            <li
              ref={dropRef}
              className="relative"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <Link
                href="/product"
                className="flex items-center gap-1 text-sm font-medium no-underline select-none"
                style={{ fontFamily: 'Montserrat,sans-serif', color: pathname.startsWith('/product') ? '#1D978E' : '#4A4A45' }}
              >
                Product
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  style={{
                    transition: 'transform 0.2s',
                    transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: pathname.startsWith('/product') ? '#1D978E' : '#4A4A45',
                  }}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Bridge gap agar mouse bisa pindah ke dropdown tanpa menutup */}
              {dropOpen && (
                <div
                  style={{ position: 'absolute', top: '100%', left: '-20px', right: '-20px', height: 12, zIndex: 49 }}
                  onMouseEnter={openDrop}
                  onMouseLeave={closeDrop}
                />
              )}

              {/* Dropdown panel */}
              {dropOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 py-2 rounded-xl bg-white"
                  style={{ top: 'calc(100% + 12px)', minWidth: 140, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.07)', zIndex: 50 }}
                  onMouseEnter={openDrop}
                  onMouseLeave={closeDrop}
                >
                  {productDropdown.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => goToCategory(item.id)}
                      className="w-full text-left px-5 py-2.5 text-sm bg-transparent border-none cursor-pointer transition-colors hover:text-[#1D978E]"
                      style={{ fontFamily: 'Montserrat,sans-serif', color: '#4A4A45', display: 'block' }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </li>

            {[
              { label: 'Partnership', href: '/partnership' },
              { label: 'Contact',     href: '/contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  className="text-sm font-medium no-underline transition-colors"
                  style={{ fontFamily: 'Montserrat,sans-serif', color: isActive(l.href) ? '#1D978E' : '#4A4A45' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full no-underline transition-all hover:-translate-y-0.5"
            style={{ background: '#1D978E', color: '#fff', fontFamily: 'Poppins,sans-serif' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setOpen(!open)} aria-label="menu"
          >
            <span className={`block w-[22px] h-0.5 rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: '#1A1A18' }} />
            <span className={`block w-[22px] h-0.5 rounded transition-all ${open ? 'opacity-0' : ''}`} style={{ background: '#1A1A18' }} />
            <span className={`block w-[22px] h-0.5 rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: '#1A1A18' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-white border-b border-black/[0.07] px-6 pb-4" style={{ fontFamily: 'Montserrat,sans-serif' }}>
          {[
            { label: 'About Us',    href: '/about' },
            { label: 'How We Make', href: '/how-we-make' },
          ].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-3 text-sm no-underline"
              style={{ color: isActive(l.href) ? '#1D978E' : '#4A4A45', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              {l.label}
            </Link>
          ))}

          {/* Mobile product */}
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <button
              onClick={() => setMobProd(!mobProd)}
              className="w-full flex items-center justify-between py-3 text-sm bg-transparent border-none cursor-pointer"
              style={{ color: pathname.startsWith('/product') ? '#1D978E' : '#4A4A45', fontFamily: 'Montserrat,sans-serif' }}
            >
              Product
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                style={{ transform: mobProd ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobProd && (
              <div className="pl-4 flex flex-col pb-2">
                {productDropdown.map((item) => (
                  <button key={item.id}
                    onClick={() => { goToCategory(item.id); setMobProd(false) }}
                    className="py-2.5 text-sm text-left bg-transparent border-none cursor-pointer"
                    style={{ color: '#4A4A45', fontFamily: 'Montserrat,sans-serif' }}>
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'Partnership', href: '/partnership' },
            { label: 'Contact',     href: '/contact' },
          ].map((l, i, arr) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-3 text-sm no-underline"
              style={{ color: isActive(l.href) ? '#1D978E' : '#4A4A45', borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
              {l.label}
            </Link>
          ))}

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="mt-3 text-sm font-semibold no-underline" style={{ color: '#1D978E', fontFamily: 'Poppins,sans-serif' }}>
            WhatsApp Kami →
          </a>
        </div>
      )}
    </>
  )
}

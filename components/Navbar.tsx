'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-deep-espresso transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-24 h-24">
            <Image
              src="/images/logo-navbar.png"
              alt="STAYLOOM"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link font-jost font-400 text-sm tracking-widest uppercase text-ivory/80 hover:text-ivory ${
                pathname === l.href ? 'active text-ivory' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-taupe text-deep-espresso font-jost font-500 text-sm tracking-widest uppercase hover:bg-ivory transition-colors duration-200"
          >
            Get a Free Assessment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-transform duration-300 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-opacity duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-transform duration-300 ${
              open ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-deep-espresso border-t border-taupe/20 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 py-6' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-jost text-sm tracking-widest uppercase text-ivory/80 hover:text-ivory py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-6 py-3 bg-taupe text-deep-espresso font-jost font-500 text-sm tracking-widest uppercase text-center hover:bg-ivory transition-colors duration-200"
          >
            Get a Free Assessment
          </Link>
        </div>
      </div>
    </header>
  )
}

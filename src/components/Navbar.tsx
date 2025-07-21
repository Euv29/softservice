'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/cacimbo', label: 'CACIMBO' },
    { href: '/contactos', label: 'Contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-sm shadow-md border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center justify-center group-hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/logo.svg"
                alt="SoftService Logo"
                width={160}
                height={50}
                className="h-6 w-auto sm:h-7 md:h-8"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium text-sm uppercase tracking-wide transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-[#01a0e2]'
                    : 'text-gray-700 hover:text-[#01a0e2]'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#01a0e2]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contactos"
              className="bg-[#0190d2] text-white px-6 py-2.5 rounded font-medium text-sm uppercase tracking-wide hover:bg-[#01a0e2] transition-colors duration-200"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#01a0e2] transition-colors duration-200"
            aria-label="Abrir menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-medium text-sm uppercase tracking-wide transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-[#01a0e2] bg-gray-50'
                    : 'text-gray-700 hover:text-[#01a0e2] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link
                href="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#0190d2] text-white px-4 py-3 rounded font-medium text-sm uppercase tracking-wide hover:bg-[#01a0e2] transition-colors duration-200"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastYRef = useRef(0)

  const navItems = [
    { label: 'Home', href: '/#home', width: 70 },
    { label: 'Solution', href: '/#solution', width: 83 },
    { label: 'Contact', href: '/#contact', width: 82 },
    { label: 'White Paper', href: '/mysite/white-paper', width: 111 },
  ]

  const pathname = usePathname()
  const router = useRouter()
  const [activeLabel, setActiveLabel] = useState<string>('Home')

  // scroll hide/show behavior: slide up on scroll down, slide in on scroll up
  useEffect(() => {
    const heroEnd = () => {
      // The hero content block height = title(238) + subtitle row(155) + top margin(16) + bottom(3) = 412
      // Plus header height (75) to know when hero fully passed under header
      return 412
    }

    const onScroll = () => {
      const y = window.scrollY || 0
      // Background change starts immediately when y > 0
      setIsScrolled(y > 0)
      if (y > lastYRef.current + 4) {
        setIsHidden(true)
      } else if (y < lastYRef.current - 4) {
        setIsHidden(false)
      }
      // Ensure we don't hide until the hero block has been crossed once
      if (y < heroEnd()) {
        setIsHidden(false)
      }
      lastYRef.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Update active label based on route and scroll
  useEffect(() => {
    if (pathname === '/mysite/white-paper') {
      setActiveLabel('White Paper')
      return
    }
    if (pathname === '/') {
      const sectionIds = [
        { id: 'home', label: 'Home' },
        { id: 'solution', label: 'Solution' },
        { id: 'contact', label: 'Contact' },
        { id: 'whitepaper', label: 'White Paper' },
      ]
      const handler = () => {
        for (const s of sectionIds) {
          const el = document.getElementById(s.id)
          if (!el) continue
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveLabel(s.label)
            break
          }
        }
      }
      handler()
      window.addEventListener('scroll', handler, { passive: true })
      return () => window.removeEventListener('scroll', handler)
    }
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // For anchors, route via query param when navigating from other pages.
    if (href.startsWith('/#')) {
      e.preventDefault()
      const anchor = href.split('#')[1] || 'home'
      if (pathname === '/') {
        const el = document.getElementById(anchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.replaceState(null, '', `/#${anchor}`)
        }
      } else {
        router.push(`/?scrollTo=${anchor}`)
      }
    }
  }

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 h-[75px] header-slide ${isHidden ? 'header-hidden' : ''} ${isScrolled ? 'header-scrolled' : ''}`} style={{ backgroundColor: '#f5f5f5' }}>
          {/* Header large side paddings ~110px at desktop */}
      <div className="h-full px-110">
        <nav className="flex items-center h-full w-full justify-between">
          {/* Left Brand: 33px circle + SORATECH (15px / 23px line-height) - light weight */}
          <Link href="/" className="flex items-center text-black" aria-label="SoraTech Home" style={{ marginLeft: 12, width: 368 }}>
            {/* Vector logo: concentric circles (outer #010203, inner #ffffff), 33x33 */}
            <svg
              viewBox="20 20 160 160"
              width={33}
              height={33}
              aria-hidden="true"
              focusable="false"
              style={{ display: 'block', marginRight: 21 }}
            >
              <g>
                <path fill="#010203" d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80" />
                <path fill="#ffffff" d="M160 100c0 33.137-26.863 60-60 60s-60-26.863-60-60 26.863-60 60-60 60 26.863 60 60" />
              </g>
            </svg>
            <span className="font-normal" style={{ fontSize: 15, lineHeight: '23px', letterSpacing: 0, fontWeight: 400 }}>
              SORATECH
            </span>
          </Link>

          {/* Desktop Navigation - right column fixed 1104px; menu block 701x30 centered vertically */}
          <div className="hidden md:flex items-center justify-end w-1104" style={{ marginLeft: 'auto' }}>
            <div className="w-701" style={{ height: 30, marginTop: 14, marginBottom: 15, display: 'flex', justifyContent: 'flex-end', overflow: 'hidden' }}>
            {navItems.map((item) => {
              const isActive = activeLabel === item.label
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className="transition-colors"
                  style={{
                    width: item.width,
                    height: 30,
                    display: 'inline-block',
                    color: activeLabel === item.label ? '#545454' : '#000000',
                  }}
                >
                   <div style={{ paddingLeft: 5, paddingRight: 5, width: item.width - 10, height: 30 }}>
                    <div style={{ width: item.width - 10, height: 30 }}>
                        <span
                          className="hover:text-[#545454] font-normal"
                          style={{
                            fontSize: 15,
                            lineHeight: '30px',
                            paddingLeft: 10,
                            paddingRight: 10,
                            display: 'inline-block',
                            width: (item.width - 10),
                            boxSizing: 'border-box',
                            whiteSpace: 'nowrap',
                            textAlign: 'right',
                            fontWeight: 400,
                          }}
                        >
                        {item.label}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
            {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-black hover:text-gray-600 transition-colors duration-200"
                style={{ fontSize: 15, lineHeight: 1, padding: '0 5px' }}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  handleNavClick(e, item.href)
                  setIsMenuOpen(false)
                }}
              >
                <span className="px-2.5">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
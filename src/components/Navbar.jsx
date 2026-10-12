import { useState, useEffect } from 'react'
import { NAV } from '../data'

// True once the page has scrolled down a little
function useScrolled() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 30)
    check()
    window.addEventListener('scroll', check)
    return () => window.removeEventListener('scroll', check)
  }, [])

  return scrolled
}

const ICON_OPEN = 'M5 5l14 14M19 5L5 19'
const ICON_CLOSED = 'M3 7h18M3 12h18M3 17h18'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  const background = scrolled || menuOpen ? 'border-b border-line bg-bg/90 backdrop-blur' : ''

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${background}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-2xl font-extrabold tracking-tighter text-ink">
          AK<span className="text-blue">.</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden gap-7 font-mono text-[11px] uppercase tracking-[.16em] text-mute md:flex">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="p-2 text-ink md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d={menuOpen ? ICON_OPEN : ICON_CLOSED} />
          </svg>
        </button>
      </nav>

      {/* Mobile menu list */}
      {menuOpen && (
        <ul className="px-5 pb-4 md:hidden">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line py-3 font-mono text-xs uppercase tracking-[.16em] text-mute"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
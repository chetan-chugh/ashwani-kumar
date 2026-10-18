import { useState, useEffect } from 'react'
import { Link } from '../router'
import { useLang, useT } from '../i18n'

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


export const NAV = [
  ['/', 'home'],
  ['/books', 'books'],
  ['/groups', 'groups'],
  ['/contact', 'contact'],
]

// A route is active for its own path and for nested ones (e.g. /books/slug)
const isActive = (route, path) => (route === '/' ? path === '/' : path === route || path.startsWith(route + '/'))

function LangToggle() {
  const { lang, setLang } = useLang()
  const t = useT()
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
      aria-label={t.langLabel}
      className="flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-blue/60"
    >
      <span className="h-2 w-2 rounded-full bg-cyan" />
      {t.langName}
    </button>
  )
}

export default function Navbar({ path }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const t = useT()

  useEffect(() => setMenuOpen(false), [path])

  // Escape closes the open menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const showBar = scrolled || menuOpen
  const pill = (route) =>
    `rounded-full border px-4 py-1.5 text-[15px] transition-colors ${
      isActive(route, path)
        ? 'border-blue/40 bg-blue/10 font-medium text-ink'
        : 'border-transparent text-mute hover:text-ink'
    }`

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      {/* Header background fades in instead of switching on */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 border-b border-line bg-bg/80 backdrop-blur-xl transition-opacity duration-300 motion-reduce:transition-none ${
          showBar ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan font-extrabold text-[#15091f] shadow-[0_0_20px_rgba(167,123,242,.5)]">
            {t.brand}
          </span>
          <span className="hidden sm:inline">{t.brandName}</span>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {NAV.map(([route, key]) => (
            <li key={route}>
              <Link to={route} aria-current={isActive(route, path) ? 'page' : undefined} className={pill(route)}>
                {t.nav[key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            className="relative h-9 w-9 text-ink md:hidden"
            aria-label={t.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Menu and close icons swap with a quarter turn */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              className={`absolute inset-0 m-auto transition-all duration-300 motion-reduce:transition-none ${menuOpen ? 'rotate-90 scale-50 opacity-0' : ''}`}>
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              className={`absolute inset-0 m-auto transition-all duration-300 motion-reduce:transition-none ${menuOpen ? '' : '-rotate-90 scale-50 opacity-0'}`}>
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Always mounted so it can slide: the grid row grows from 0fr to 1fr */}
      <div
        id="mobile-menu"
        inert={menuOpen ? undefined : ''}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-1 px-5 pb-4 pt-1">
            {NAV.map(([route, key], i) => (
              <li
                key={route}
                className={`transition-all duration-300 ease-out motion-reduce:transition-none ${
                  menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : '0ms' }}
              >
                <Link to={route} className={`block ${pill(route)}`}>
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
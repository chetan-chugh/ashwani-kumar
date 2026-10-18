import { useEffect, useState } from 'react'
import { useT } from '../i18n'
import { ArrowUpIcon } from './ui'

// Round "Go to top" button in the bottom-right corner; appears once the page is scrolled down
export default function ScrollTop() {
  const t = useT()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const check = () => setShow(window.scrollY > 200)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  const goTop = () => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label={t.toTop}
      title={t.toTop}
      tabIndex={show ? 0 : -1}
      className={`btn-primary scroll-top-button fixed z-40 flex h-12 w-12 items-center justify-center rounded-full ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right, 0px))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <ArrowUpIcon />
    </button>
  )
}

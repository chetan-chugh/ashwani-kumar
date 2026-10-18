import { useEffect, useRef, useState } from 'react'
import { Link } from '../router'

const ICON = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" {...ICON}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" {...ICON}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8" /></svg>
)
export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" {...ICON}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
)
export const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" {...ICON}><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
)
export const CartIcon = () => (
  <svg viewBox="0 0 24 24" {...ICON}><path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" /><circle cx="10" cy="21" r="1" /><circle cx="18" cy="21" r="1" /></svg>
)

export function Eyebrow({ children, center }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[.2em] text-cyan ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-7 bg-mute/60" />
      {children}
    </p>
  )
}

// Rounded label tinted with one color (hex, e.g. "#b79bf5")
export function Pill({ children, c = '#9893a8' }) {
  return (
    <span
      className="inline-block rounded-full border px-3 py-1 text-xs font-medium"
      style={{ color: c, borderColor: c + '44', background: c + '14' }}
    >
      {children}
    </span>
  )
}

export function Tag({ children }) {
  return (
    <span className="inline-block rounded-full border border-line bg-white/[.04] px-3 py-1.5 text-xs text-mute">
      {children}
    </span>
  )
}

// True once the element has scrolled into view (or been scrolled past). Fires once.
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setSeen(true)
          watcher.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    watcher.observe(node)
    return () => watcher.disconnect()
  }, [threshold])

  return [ref, seen]
}

// Splits a title into words that rise one after another from behind a mask.
// With onView the words wait until the title scrolls into view.
export function AnimatedTitle({ text, className = '', as: Tag = 'h1', onView = false }) {
  const [ref, seen] = useInView(0.5)
  const words = text.split(' ')
  const mode = onView ? `on-view ${seen ? 'is-in' : ''}` : ''
  return (
    <Tag ref={ref} className={`${className} ${mode}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="word-mask" aria-hidden="true">
            <span className="word" style={{ '--i': i }}>{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}

// Fades and slides its children up the first time they scroll into view
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} className={`reveal ${seen ? 'is-visible' : ''} ${className}`} style={{ '--d': `${delay}ms` }}>
      {children}
    </div>
  )
}

// Centered section: eyebrow, bold title, grey subtitle, content, optional action below.
// Title words rise and the rest fades in as the section scrolls into view.
export function Section({ id, eyebrow, title, sub, children, tint, action }) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-28 ${tint ? 'bg-card/50' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal><Eyebrow center>{eyebrow}</Eyebrow></Reveal>
          <AnimatedTitle
            key={title}
            as="h2"
            onView
            text={title}
            className="mt-4 text-4xl font-extrabold leading-[1.2] tracking-tight text-ink sm:text-6xl"
          />
          {sub && (
            <Reveal delay={250}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-mute">{sub}</p>
            </Reveal>
          )}
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
        {action && <Reveal className="mt-10 flex justify-center">{action}</Reveal>}
      </div>
    </section>
  )
}

// Top of an inner page (Books, Literary Group, Contact)
export function PageHeader({ eyebrow, title, sub }) {
  return (
    <header className="px-5 pb-14 pt-32 text-center sm:px-8 sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <div className="rise"><Eyebrow center>{eyebrow}</Eyebrow></div>
        <AnimatedTitle
          key={title}
          text={title}
          className="font-display mt-4 text-5xl font-extrabold leading-[1.2] tracking-tight text-ink sm:text-7xl"
        />
        {sub && (
          <p className="rise mx-auto mt-5 max-w-2xl text-lg text-mute sm:text-xl" style={{ animationDelay: '.6s' }}>
            {sub}
          </p>
        )}
      </div>
    </header>
  )
}

const BTN = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold'
export const BTN_PRIMARY = `${BTN} btn-primary`
export const BTN_GHOST = `${BTN} btn-ghost`

export function ButtonLink({ to, children, primary = true }) {
  return (
    <Link to={to} className={primary ? BTN_PRIMARY : BTN_GHOST}>
      {children}
    </Link>
  )
}

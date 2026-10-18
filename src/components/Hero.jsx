import { IMG } from '../data'
import { useLang, useT } from '../i18n'
import { ArrowIcon, MailIcon, BTN_GHOST } from './ui'
import { Link } from '../router'
import { useEffect, useState } from 'react'

const delay = (seconds) => ({ animationDelay: seconds })

const SWAP_EVERY = 3200 // ms each line stays on screen

// Cycles through short lines about the author. Every line sits in the same grid cell, so the
// box is as tall as the longest line. The active line rises in from below while the previous
// one leaves upward. Only this box moves; the name above stays put.
function RotatingTagline({ lines }) {
  const [state, setState] = useState({ active: 0, leaving: null })

  useEffect(() => {
    setState({ active: 0, leaving: null })
  }, [lines])

  useEffect(() => {
    const swap = setInterval(() => {
      setState(({ active }) => ({ active: (active + 1) % lines.length, leaving: active }))
    }, SWAP_EVERY)
    return () => clearInterval(swap)
  }, [lines])

  return (
    <p className="tagline mt-6 font-mono text-[clamp(1.25rem,2.6vw,2rem)] font-bold leading-snug text-ink">
      {lines.map(([lead, rest], i) => {
        const mode = i === state.active ? 'is-active' : i === state.leaving ? 'is-leaving' : 'is-waiting'
        return (
          <span key={lead} className={`tagline-line ${mode}`} aria-hidden={i !== state.active}>
            <span className="text-blue">{lead}</span> {rest}
          </span>
        )
      })}
    </p>
  )
}

function Intro() {
  const t = useT().hero
  const { lang } = useLang()
  const nameSize = lang === 'hi' ? 'text-[clamp(2.8rem,7.5vw,5.8rem)] leading-[1.25]' : 'text-[clamp(2.7rem,6.6vw,5.6rem)] leading-[1.05]'

  return (
    <div>
      <p className="rise inline-block rounded-full border border-line bg-card/60 px-6 py-3 font-mono text-xs uppercase tracking-[.35em] text-blue/80" style={delay('.05s')}>
        {t.eyebrow}
      </p>

      <h1 className={`rise name-glow mt-8 font-mono font-bold tracking-tight ${nameSize}`} style={delay('.15s')}>
        {t.first} {t.last}
      </h1>

      <div className="rise" style={delay('.3s')}>
        <RotatingTagline lines={t.tags} />
      </div>

      <p className="rise mt-9 max-w-lg font-mono text-[15px] leading-8 text-mute" style={delay('.45s')}>
        {t.intro}
      </p>

      <div className="rise mt-9 flex flex-wrap gap-3" style={delay('.6s')}>
        <Link to="/contact" className={`${BTN_GHOST} font-mono`}>
          <MailIcon /> {t.contactBtn}
        </Link>
        <Link to="/books" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-mono text-sm font-semibold text-mute transition hover:text-ink">
          {t.readBooks} <ArrowIcon />
        </Link>
      </div>

      <p className="rise mt-12 max-w-lg border-l-2 border-cyan pl-4 font-mono text-sm italic leading-7 text-dim" style={delay('.75s')}>
        {t.quote}
      </p>
    </div>
  )
}

// The author's photograph sits where the reference design has its 3D robot
function Portrait() {
  const t = useT().hero
  return (
    <div className="rise relative mx-auto w-full max-w-sm lg:max-w-md" style={delay('.4s')}>
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(167,100,240,.35),transparent)] blur-2xl" />
      <div className="float relative">
        <div className="rounded-[2rem] border border-blue/40 bg-card p-2 shadow-[0_0_80px_-10px_rgba(167,123,242,.45)]">
          <img
            src={IMG.profile}
            alt={t.photoAlt}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
          />
        </div>
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-bg/90 px-4 py-2 font-mono text-xs font-bold text-ink backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {t.badge}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen overflow-x-clip items-center px-5 pb-16 pt-32 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <Intro />
        <Portrait />
      </div>
    </section>
  )
}

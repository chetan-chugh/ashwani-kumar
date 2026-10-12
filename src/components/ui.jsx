export function Eyebrow({ children }) {
  return (
    <p className="font-mono text-[11px] font-bold uppercase tracking-[.18em] text-blue">
      {children}
    </p>
  )
}

// Rounded label tinted with one color (hex, e.g. "#6e86ff")
export function Pill({ children, c = '#8b8ba7' }) {
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
    <span className="inline-block rounded-lg border border-line bg-white/[.04] px-3 py-1.5 text-xs text-mute">
      {children}
    </span>
  )
}

export function Section({ id, eyebrow, title, sub, children, tint }) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-28 ${tint ? 'bg-card/60' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-6xl">{title}</h2>
        {sub && <p className="mt-4 max-w-xl text-lg text-mute">{sub}</p>}
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
import { JOURNEY } from '../data'
import { useL, useT } from '../i18n'
import { Section } from './ui'

function JourneyStep({ period, heading, text }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-line bg-bg p-6 md:grid-cols-[200px_1fr] md:gap-10">
      <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-blue">{period}</p>
      <div>
        <h3 className="text-xl font-semibold text-ink">{heading}</h3>
        <p className="mt-2 leading-relaxed text-mute">{text}</p>
      </div>
    </div>
  )
}

export default function Journey() {
  const t = useT().journey
  const L = useL()
  return (
    <Section id="journey" tint eyebrow={t.eyebrow} title={t.title} sub={t.sub}>
      <div className="space-y-5">
        {JOURNEY.map((j) => (
          <JourneyStep key={j.period.en} period={L(j.period)} heading={L(j.heading)} text={L(j.text)} />
        ))}
      </div>
    </Section>
  )
}

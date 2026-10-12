import { JOURNEY } from '../data'
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
  return (
    <Section
      id="journey"
      tint
      eyebrow="Journey"
      title="Writing journey"
      sub="From Kaithal to Chandigarh, verse to prose."
    >
      <div className="space-y-5">
        {JOURNEY.map(([period, heading, text]) => (
          <JourneyStep key={period} period={period} heading={heading} text={text} />
        ))}
      </div>
    </Section>
  )
}
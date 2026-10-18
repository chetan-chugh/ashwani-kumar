import Events from './Events'
import { FEATURE_STYLE } from '../data'
import { useT } from '../i18n'
import { Section, Reveal } from './ui'

const Bold = ({ children }) => <b className="font-semibold text-ink">{children}</b>

// Renders ['plain', 'bold', 'plain', 'bold', ...] with every second piece in bold
function Para({ parts }) {
  return (
    <p>
      {parts.map((piece, i) => (i % 2 ? <Bold key={i}>{piece}</Bold> : piece))}
    </p>
  )
}

function FeatureCard({ icon, title, text, color }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-line bg-card p-5">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
        style={{ background: color + '22' }}
      >
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-ink">{title}</h3>
        <p className="text-sm text-mute">{text}</p>
      </div>
    </div>
  )
}

export default function About() {
  const t = useT()
  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6 text-lg leading-[1.8] text-mute">
          <Reveal><Para parts={t.about.p1} /></Reveal>
          <Reveal delay={120}><Para parts={t.about.p2} /></Reveal>
          <Reveal delay={240}><Para parts={t.about.p3} /></Reveal>
        </div>

        <div className="space-y-4">
          {t.about.features.map(([title, text], i) => (
            <Reveal key={title} delay={i * 100}>
              <FeatureCard icon={FEATURE_STYLE[i][0]} color={FEATURE_STYLE[i][1]} title={title} text={text} />
            </Reveal>
          ))}
        </div>
      </div>

      <Events />
    </Section>
  )
}

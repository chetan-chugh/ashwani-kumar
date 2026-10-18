import { CAL_URL, MAP_URL, EVENT_DATE, COMMUNITY, STAT_COLORS } from '../data'
import { useL, useT } from '../i18n'
import { Pill, Tag, Reveal, AnimatedTitle } from './ui'

const LABEL = 'font-mono text-[10px] uppercase tracking-[.2em] text-dim'

const daysLeft = () => Math.ceil((new Date(EVENT_DATE) - new Date()) / 864e5)

function Detail({ label, value }) {
  return (
    <div>
      <dt className={LABEL}>{label}</dt>
      <dd className="mt-1 font-medium text-ink">{value}</dd>
    </div>
  )
}

function CountdownPill() {
  const t = useT().events
  const left = daysLeft()
  if (left < 0) return null
  const text = left === 0 ? t.today : `${left} ${left === 1 ? t.dayLeft : t.daysLeft}`
  return <Pill c="#f0a8f5">{text}</Pill>
}

function UpcomingEvent() {
  const t = useT().events
  return (
    <article className="grid items-center gap-8 rounded-3xl border border-blue/40 bg-card p-6 sm:p-10 md:grid-cols-[150px_1fr]">
      <div className="mx-auto w-32 rounded-2xl border border-blue/30 bg-blue/10 py-6 text-center md:w-full">
        <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-blue">{t.month}</p>
        <p className="my-1 text-6xl font-extrabold leading-none text-ink">07</p>
        <p className="font-mono text-xs tracking-[.2em] text-mute">2026</p>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Pill c="#d764f0">{t.upcoming}</Pill>
          <CountdownPill />
        </div>

        <h3 className="mt-5 text-3xl font-extrabold leading-snug text-ink sm:text-4xl">
          {t.name} <span className="font-semibold text-mute">{t.nameHi}</span>
        </h3>

        <dl className="mt-5 grid max-w-xl gap-4 sm:grid-cols-2">
          <Detail label={t.date} value={t.dateValue} />
          <Detail label={t.venue} value={t.venueValue} />
        </dl>

        <p className="mt-5 max-w-xl leading-relaxed text-mute">{t.desc}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={CAL_URL} target="_blank" rel="noopener" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
            {t.addCal}
          </a>
          <a href={MAP_URL} target="_blank" rel="noopener" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
            {t.directions}
          </a>
        </div>
      </div>
    </article>
  )
}

function StatCard({ number, title, text, color }) {
  return (
    <div className="h-full rounded-2xl border border-line bg-card p-6">
      <p className="text-5xl font-extrabold" style={{ color }}>{number}</p>
      <h3 className="mt-3 font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">{text}</p>
    </div>
  )
}

export default function Events() {
  const t = useT().events
  const L = useL()
  return (
    <div id="events" className="mt-20 border-t border-line pt-16">
      <AnimatedTitle
        key={t.title}
        as="h3"
        onView
        text={t.title}
        className="text-3xl font-extrabold leading-snug text-ink sm:text-4xl"
      />
      <Reveal delay={200}>
        <p className="mb-10 mt-3 max-w-xl text-lg text-mute">{t.sub}</p>
      </Reveal>

      <Reveal><UpcomingEvent /></Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {t.stats.map((s, i) => (
          <Reveal key={s.title} delay={i * 120} className="h-full">
            <StatCard {...s} color={STAT_COLORS[i]} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`${LABEL} mr-2`}>{t.community}</span>
          {COMMUNITY.map((g) => (
            <Tag key={g.en}>{L(g)}</Tag>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

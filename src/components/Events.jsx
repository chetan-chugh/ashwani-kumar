import { Pill, Tag } from './ui'

const EVENT_DATE = '2026-11-07T00:00:00'
const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kavi+Sammelan&dates=20261107/20261108&location=Library,+Sector+17,+Chandigarh'
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Library+Sector+17+Chandigarh'

const STATS = [
  { number: '50+', title: 'Events organised', text: 'Literary and cultural events managed across Chandigarh, Panchkula and Mohali.', color: '#4f6ef7' },
  { number: '100+', title: 'Kavi Sammelans attended', text: 'Poetry gatherings where poets share verse, ideas and the joy of literature.', color: '#8b5cf6' },
  { number: '3', title: 'Cities of the Tricity', text: 'Chandigarh, Panchkula and Mohali, home ground for his events.', color: '#10b981' },
]

const COMMUNITY = ['Abhivyakti', 'Manthan', 'Kidar Adabi Trust', 'Haryana Sahitya Akademi']

const LABEL = 'font-mono text-[10px] uppercase tracking-[.2em] text-dim'

function daysLeft() {
  return Math.ceil((new Date(EVENT_DATE) - new Date()) / 864e5)
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className={LABEL}>{label}</dt>
      <dd className="mt-1 font-medium text-ink">{value}</dd>
    </div>
  )
}

function CountdownPill() {
  const left = daysLeft()
  if (left < 0) return null
  const text = left === 0 ? 'Today' : `${left} ${left === 1 ? 'day' : 'days'} to go`
  return <Pill c="#f59e0b">{text}</Pill>
}

function UpcomingEvent() {
  return (
    <article className="grid items-center gap-8 rounded-3xl border border-blue/40 bg-card p-6 sm:p-10 md:grid-cols-[150px_1fr]">
      <div className="mx-auto w-32 rounded-2xl border border-blue/30 bg-blue/10 py-6 text-center md:w-full">
        <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-blue">Nov</p>
        <p className="my-1 text-6xl font-extrabold leading-none text-ink">07</p>
        <p className="font-mono text-xs tracking-[.2em] text-mute">2026</p>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Pill c="#22b5e8">Upcoming event</Pill>
          <CountdownPill />
        </div>

        <h3 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
          Kavi Sammelan <span className="font-semibold text-mute">· कवि सम्मेलन</span>
        </h3>

        <dl className="mt-5 grid max-w-xl gap-4 sm:grid-cols-2">
          <Detail label="Date" value="Saturday, 7 November 2026" />
          <Detail label="Venue" value="The Library, Sector 17, Chandigarh" />
        </dl>

        <p className="mt-5 max-w-xl leading-relaxed text-mute">
          An evening where poets gather to share their poetry, voice their thoughts and celebrate
          literature. Everyone who loves words is welcome.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={CALENDAR_URL} target="_blank" rel="noopener" className="rounded-xl bg-blue px-5 py-3 text-sm font-semibold text-white hover:brightness-110">
            Add to calendar
          </a>
          <a href={MAP_URL} target="_blank" rel="noopener" className="rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-blue/60">
            Get directions
          </a>
        </div>
      </div>
    </article>
  )
}

function StatCard({ number, title, text, color }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <p className="text-5xl font-extrabold" style={{ color }}>{number}</p>
      <h3 className="mt-3 font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">{text}</p>
    </div>
  )
}

export default function Events() {
  return (
    <div id="events" className="mt-20 border-t border-line pt-16">
      <h3 className="text-3xl font-extrabold text-ink sm:text-4xl">Events and literary achievements</h3>
      <p className="mb-10 mt-3 max-w-xl text-lg text-mute">
        Organising and joining poetry gatherings across the Tricity and beyond.
      </p>

      <UpcomingEvent />

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {STATS.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className={`${LABEL} mr-2`}>Community</span>
        {COMMUNITY.map((name) => (
          <Tag key={name}>{name}</Tag>
        ))}
      </div>
    </div>
  )
}
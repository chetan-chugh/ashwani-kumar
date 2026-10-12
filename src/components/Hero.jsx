import { IMG, CAL_URL, EMAIL } from '../data'

const STATS = [
  ['4', 'Books published'],
  ['50+', 'Events organised'],
  ['100+', 'Sammelans attended']
]

const delay = (seconds) => ({ animationDelay: seconds })

const BUTTON = 'rounded-xl px-6 py-3.5 text-sm font-semibold transition'
const SMALL_LABEL = 'font-mono text-[10px] font-bold uppercase tracking-[.18em] text-blue'
const SMALL_BUTTON = 'mt-auto block rounded-xl px-2 py-2.5 text-center text-[10px] font-semibold transition sm:text-xs'

function Heading() {
  return (
    <h1 className="text-[clamp(3.4rem,11vw,8.5rem)] font-extrabold leading-[.95] tracking-tighter">
      <span className="rise block text-ink" style={delay('.1s')}>Ashwani</span>
      <span className="rise ghost block" style={delay('.3s')}>Kumar</span>
      <span
        className="rise block bg-gradient-to-r from-blue to-cyan bg-clip-text pb-2 text-transparent"
        style={delay('.5s')}
      >
        Poet &amp; Writer.
      </span>
    </h1>
  )
}

function Intro() {
  return (
    <div>
      <Heading />
      <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-mute sm:text-xl" style={delay('.7s')}>
        अश्वनी कुमार 'भीम'. I write Hindi poetry, satire and stories — from the first light of a
        poem to the last page of a book.
      </p>
      <div className="rise mt-9 flex flex-wrap gap-3" style={delay('.9s')}>
        <a href="#books" className={`${BUTTON} bg-blue text-white hover:brightness-110`}>
          Read my books →
        </a>
        <a href="#contact" className={`${BUTTON} border border-line text-ink hover:border-blue/60`}>
          Get in touch
        </a>
      </div>
    </div>
  )
}

function EventTeaser() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-blue/40 bg-card p-3 sm:p-4">
      <p className={SMALL_LABEL}>Upcoming · 7 Nov 2026</p>
      <p className="font-semibold text-ink">Kavi Sammelan</p>
      <p className="text-xs text-mute">The Library, Sector 17, Chandigarh</p>
      <a href={CAL_URL} target="_blank" rel="noopener" className={`${SMALL_BUTTON} bg-blue text-white hover:brightness-110`}>
        Add to calendar
      </a>
    </div>
  )
}

function NextBookTeaser() {
  const mail = `mailto:${EMAIL}?subject=Notify me about the next book`
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-3 sm:p-4 lg:mt-4">
      <p className={SMALL_LABEL}>Next book · Coming soon</p>
      <p className="text-xs text-mute">Title and cover to be announced.</p>
      <a href={mail} className={`${SMALL_BUTTON} border border-line text-ink hover:border-blue/60`}>
        Notify me at launch
      </a>
    </div>
  )
}

function ProfileColumn() {
  return (
    <div className="rise w-full max-w-sm justify-self-center lg:w-72 lg:justify-self-end" style={delay('.6s')}>
      <div className="rounded-3xl border border-line bg-card p-2">
        <img
          src={IMG.profile}
          alt="Ashwani Kumar 'Bheem'"
          className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 lg:block">
        <EventTeaser />
        <NextBookTeaser />
      </div>
    </div>
  )
}

function StatsRow() {
  return (
    <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col-reverse justify-between gap-8 sm:flex-row sm:items-end">
      <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[.2em] text-dim">
        <span className="h-px w-12 bg-dim" />
        Scroll to explore
      </div>
      <dl className="grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:gap-10 lg:gap-14">
        {STATS.map(([number, label]) => (
          <div key={label} className="sm:text-center">
            <dt className="text-4xl font-extrabold text-ink">{number}</dt>
            <dd className="mt-1 font-mono text-[10px] uppercase tracking-[.16em] text-dim">{label}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="grid-bg orb flex min-h-screen flex-col px-5 pb-10 pt-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 lg:grid-cols-[1.35fr_.65fr]">
        <Intro />
        <ProfileColumn />
      </div>
      <StatsRow />
    </section>
  )
}
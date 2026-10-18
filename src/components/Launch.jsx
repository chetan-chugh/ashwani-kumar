import { BOOKS, IMG } from '../data'
import { Section } from './ui'
import sapnoLaunch from '../assets/sapno-launch.jpg'
import aadmiShwanLaunch from '../assets/aadmi-shwan-launch.jpg'
import kabhiLaunch from '../assets/kabhi-launch.jpg'

// Launch photo and year for each book, keyed by English title
const LAUNCHES = {
  'Kabhi To Subah Aayegi': { image: kabhiLaunch, year: '2014' },
  'Bahan Kahti Thi': { image: IMG.launch, year: '2023' },
  'Sapnon Ka Hona Zaroori Hai': { image: sapnoLaunch, year: '2023' },
  'Aadmi, Shwan Aur Rajneeti': { image: aadmiShwanLaunch, year: '2021' },
}

const pad = (n) => String(n).padStart(2, '0')

function LaunchImage({ book, launch, number }) {
  if (!launch) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg border border-blue/30 bg-card text-center">
        <span className="font-mono text-xs text-blue">{pad(number)}</span>
        <span className="mt-3 font-semibold text-ink">Coming soon</span>
      </div>
    )
  }
  return (
    <img
      src={launch.image}
      alt={`Launch of ${book.en}`}
      loading="lazy"
      className="max-h-[32rem] w-full rounded-lg border border-line bg-black/20 object-contain"
    />
  )
}

function LaunchCard({ book, number }) {
  const launch = LAUNCHES[book.en]
  const label = launch ? `Book launch · ${launch.year}` : 'Launch date · To be announced'

  return (
    <article className="grid gap-6 rounded-3xl border border-line bg-card p-6 sm:p-8 lg:grid-cols-[1fr_40%] lg:items-center">
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <span className="rounded-md border border-blue/25 bg-blue/10 px-2 py-1 font-mono text-[11px] text-blue">
            {pad(number)}
          </span>
          <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{book.title}</h3>
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-blue">{label}</p>

        {launch && (
          <a href="#books" className="inline-block text-sm font-semibold text-blue">
            View Book →
          </a>
        )}
      </div>

      <LaunchImage book={book} launch={launch} number={number} />
    </article>
  )
}

export default function Launch() {
  return (
    <Section id="launch" eyebrow="Book launch" title="Book launches" sub="Books in publication order.">
      <div className="space-y-6">
        {BOOKS.map((book, i) => (
          <LaunchCard key={book.en} book={book} number={i + 1} />
        ))}
      </div>
    </Section>
  )
}
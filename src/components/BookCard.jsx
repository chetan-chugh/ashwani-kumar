import { Pill } from './ui'

const COLORS = ['#6e86ff', '#22b5e8', '#8b5cf6']

// Same size for every cover, so image and placeholder always match
const COVER = 'aspect-[3/4] w-full rounded-lg border border-line'

function Cover({ book }) {
  if (!book.img) {
    return (
      <div className={`${COVER} flex items-center justify-center bg-card text-ink`}>
        Coming soon
      </div>
    )
  }
  return <img src={book.img} alt={`Cover of ${book.en}`} className={`${COVER} object-cover`} />
}

function Info({ book, number }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md border border-blue/25 bg-blue/10 px-2 py-1 font-mono text-[11px] text-blue">
          {String(number).padStart(2, '0')}
        </span>
        {book.tags.map((tag, i) => (
          <Pill key={tag} c={COLORS[i % 3]}>{tag}</Pill>
        ))}
      </div>

      <h3 className="mt-5 text-3xl font-extrabold text-ink lg:text-4xl">{book.title}</h3>
      <p className="mt-1 text-mute lg:text-lg">{book.en}</p>
      <p className="mt-4 text-mute lg:text-lg">{book.text}</p>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
        {book.feats.map((feat) => (
          <span key={feat} className="rounded-lg border border-line px-3 py-1.5 text-xs text-mute">
            {feat}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function BookCard({ b, n }) {
  return (
    <article className="rounded-3xl border border-line bg-card p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_16rem] lg:items-center lg:gap-x-16 lg:p-12">
      <Info book={b} number={n} />

      {/* Cover and button share one width, so the button lines up with the cover */}
      <div className="mt-8 w-full sm:mx-auto sm:w-52 lg:mt-0 lg:w-full">
        <Cover book={b} />
        {b.img && (
          <a
            href="#launch"
            className="mt-4 block rounded-xl bg-blue py-3 text-center text-sm font-semibold text-white"
          >
            View book →
          </a>
        )}
      </div>
    </article>
  )
}
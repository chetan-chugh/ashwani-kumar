import { Link } from '../router'
import { useL, useT } from '../i18n'
import { Pill } from './ui'

const COLORS = ['#b79bf5', '#d764f0', '#8b5cf6']

// Same size for every cover, so image and placeholder always match
const COVER = 'aspect-[3/4] w-full rounded-lg border border-line'

export function Cover({ book, className = '' }) {
  const t = useT().books
  const L = useL()
  if (!book.img) {
    return (
      <div className={`${COVER} ${className} flex items-center justify-center bg-card text-center text-ink`}>
        {t.comingSoon}
      </div>
    )
  }
  return (
    <img
      src={book.img}
      alt={`${t.coverOf} ${book.roman}`}
      loading="lazy"
      className={`${COVER} ${className} object-cover`}
    />
  )
}

export default function BookCard({ b, n }) {
  const t = useT().books
  const L = useL()
  const title = L(b.title)
  const roman = L(b.roman)
  const tags = L(b.tags)
  const feats = L(b.feats)

  return (
    <article className="rounded-3xl border border-line bg-card p-6 transition hover:border-blue/40 sm:p-8 lg:grid lg:grid-cols-[1fr_16rem] lg:items-center lg:gap-x-16 lg:p-12">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-blue/25 bg-blue/10 px-2 py-1 font-mono text-[11px] text-blue">
            {String(n).padStart(2, '0')}
          </span>
          {tags.map((tag, i) => (
            <Pill key={tag} c={COLORS[i % 3]}>{tag}</Pill>
          ))}
        </div>

        <h3 className="mt-5 text-3xl font-extrabold leading-snug text-ink lg:text-4xl">{title}</h3>
        <p className="mt-1 text-mute lg:text-lg">{roman}</p>
        <p className="mt-4 text-mute lg:text-lg">{L(b.text)}</p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {feats.map((feat) => (
            <span key={feat} className="rounded-lg border border-line px-3 py-1.5 text-xs text-mute">
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Cover and button share one width, so the button lines up with the cover */}
      <div className="mt-8 w-full sm:mx-auto sm:w-52 lg:mt-0 lg:w-full">
        <Cover book={b} />
        {b.comingSoon ? (
          <span className="mt-4 block rounded-xl border border-line py-3 text-center text-sm font-semibold text-dim">
            {t.comingSoonBtn}
          </span>
        ) : (
          <Link
            to={`/books/${b.slug}`}
            className="mt-4 block btn-primary rounded-full py-3 text-center text-sm font-semibold"
          >
            {t.details}
          </Link>
        )}
      </div>
    </article>
  )
}

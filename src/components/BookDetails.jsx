import { BOOKS, EMAIL } from '../data'
import { Link } from '../router'
import { useL, useT } from '../i18n'
import { Pill, ButtonLink, BTN_PRIMARY, AnimatedTitle, Reveal, CartIcon } from './ui'
import { Cover } from './BookCard'

const LABEL = 'font-mono text-[10px] uppercase tracking-[.2em] text-dim'

function Row({ label, value }) {
  if (!value) return null
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:gap-6">
      <dt className={`${LABEL} sm:w-44 sm:pt-1`}>{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  )
}

export default function BookDetails({ slug }) {
  const t = useT().books
  const L = useL()
  const published = BOOKS.filter((b) => !b.comingSoon)
  const index = published.findIndex((b) => b.slug === slug)

  if (index === -1) {
    return (
      <section className="px-5 pb-24 pt-40 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-ink">{t.notFound}</h1>
          <p className="mt-4 text-mute">{t.notFoundText}</p>
          <div className="mt-8"><ButtonLink to="/books">{t.back}</ButtonLink></div>
        </div>
      </section>
    )
  }

  const book = published[index]
  const prev = published[index - 1]
  const next = published[index + 1]
  const title = L(book.title)
  // Store link when one is set for the book, otherwise an order email to the author
  const buyHref =
    book.buyUrl ||
    `mailto:${EMAIL}?subject=${encodeURIComponent(`${t.buySubject ?? 'Order request:'} ${book.roman}`)}&body=${encodeURIComponent(t.buyBody ?? 'Hello, I would like to buy this book. Please tell me how to order it.')}`
  const buyExternal = Boolean(book.buyUrl)

  return (
    <article className="px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Link to="/books" className="font-mono text-xs uppercase tracking-[.16em] text-mute hover:text-ink">
          {t.back}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:mx-0">
            <Cover book={book} />
          </Reveal>

          <div>
            <div className="flex flex-wrap gap-2">
              {L(book.tags).map((tag) => (
                <Pill key={tag} c="#d764f0">{tag}</Pill>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-snug text-ink sm:text-6xl">{title}</h1>
            <p className="mt-2 text-lg text-mute">{book.roman}</p>

            <Reveal delay={150}>
              <h2 className={`${LABEL} mt-10`}>{t.about}</h2>
              <p className="mt-3 max-w-2xl text-lg leading-[1.8] text-mute">{L(book.text)}</p>
            </Reveal>

            <Reveal>
              <h2 className={`${LABEL} mt-10`}>{t.info}</h2>
              <dl className="mt-2 max-w-2xl border-t border-line">
                <Row label={t.year} value={book.year} />
                <Row label={t.publisher} value={L(book.publisher)} />
                <Row label={t.format} value={L(book.form)} />
                <Row label={t.language} value={t.languageValue} />
              </dl>
            </Reveal>

            <Reveal>
              <h2 className={`${LABEL} mt-10`}>{t.highlights}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {L(book.feats).map((f) => (
                  <span key={f} className="rounded-full border border-line px-3 py-1.5 text-sm text-mute">{f}</span>
                ))}
              </div>
              <a
                href={buyHref}
                target={buyExternal ? '_blank' : undefined}
                rel={buyExternal ? 'noopener' : undefined}
                className={`${BTN_PRIMARY} mt-10`}
              >
                <CartIcon /> {t.buy ?? 'Purchase this book'}
              </a>
            </Reveal>
          </div>
        </div>

        {book.launchImg && (
          <Reveal className="mt-16 border-t border-line pt-12">
            <h2 className={LABEL}>{t.launch} · {book.year}</h2>
            <img
              src={book.launchImg}
              alt={`${t.launchOf} ${book.roman}`}
              loading="lazy"
              className="mt-5 max-h-[34rem] w-full rounded-2xl border border-line bg-black/20 object-contain"
            />
          </Reveal>
        )}

        <Reveal className="mt-16">
        <nav className="flex justify-between gap-4 border-t border-line pt-8 text-sm font-semibold">
          {prev ? <Link to={`/books/${prev.slug}`} className="text-mute hover:text-ink">{t.prev} {L(prev.title)}</Link> : <span />}
          {next ? <Link to={`/books/${next.slug}`} className="text-right text-mute hover:text-ink">{L(next.title)} {t.next}</Link> : <span />}
        </nav>
        </Reveal>
      </div>
    </article>
  )
}
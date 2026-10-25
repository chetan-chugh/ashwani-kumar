import { BOOKS } from '../data'
import { useL, useT } from '../i18n'
import { Eyebrow, Reveal, AnimatedTitle } from './ui'
import { Link } from '../router'

const Bold = ({ children }) => <b className="font-semibold text-ink">{children}</b>

// Renders ['plain', 'bold', 'plain', 'bold', ...] with every second piece in bold
function Para({ parts }) {
  return (
    <p>
      {parts.map((piece, i) => (i % 2 ? <Bold key={i}>{piece}</Bold> : piece))}
    </p>
  )
}

function RecentBookCard({ book }) {
  const L = useL()
  const t = useT().books
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-line bg-card p-4 transition hover:border-blue/40">
      <img
        src={book.img}
        alt=""
        loading="lazy"
        className="h-20 w-16 shrink-0 rounded-lg border border-line object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-ink">{L(book.title)}</h3>
        <p className="mt-1 text-sm text-mute">कविता संग्रह</p>
        <p className="mt-1 font-mono text-xs text-blue">{book.year}</p>
      </div>
      <Link
        to={`/books/${book.slug}`}
        className="ml-auto shrink-0 btn-primary rounded-full px-4 py-2 text-xs font-semibold"
      >
        {t.details}
      </Link>
    </div>
  )
}

export default function About() {
  const t = useT()
  const recentBooks = BOOKS.filter((book) => !book.comingSoon).slice(-3).reverse()
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal><Eyebrow>{t.about.eyebrow}</Eyebrow></Reveal>
          <AnimatedTitle
            key={t.about.title}
            as="h2"
            onView
            text={t.about.title}
            className="mt-4 text-4xl font-extrabold leading-[1.2] tracking-tight text-ink sm:text-5xl"
          />
          <div className="mt-8 space-y-6 text-lg leading-[1.8] text-mute">
            <Reveal><Para parts={t.about.p1} /></Reveal>
            <Reveal delay={120}><Para parts={t.about.p2} /></Reveal>
            <Reveal delay={240}><Para parts={t.about.p3} /></Reveal>
          </div>
        </div>

        <div>
          <Reveal><Eyebrow>{t.books.eyebrow}</Eyebrow></Reveal>
          <AnimatedTitle
            key={t.books.eyebrow}
            as="h2"
            onView
            text={t.books.eyebrow}
            className="mt-4 text-4xl font-extrabold leading-[1.2] tracking-tight text-ink sm:text-5xl"
          />
          <div className="mt-8 space-y-4">
            {recentBooks.map((book, i) => (
              <Reveal key={book.slug} delay={i * 100}>
                <RecentBookCard book={book} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

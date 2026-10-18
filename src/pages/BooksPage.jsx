import { BOOKS } from '../data'
import { useT } from '../i18n'
import { PageHeader, Reveal } from '../components/ui'
import BookCard from '../components/BookCard'
import BookDetails from '../components/BookDetails'

export default function BooksPage({ slug }) {
  const t = useT().books
  if (slug) return <BookDetails key={slug} slug={slug} />
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-6">
          {BOOKS.map((book, i) => (
            <Reveal key={book.slug}>
              <BookCard b={book} n={i + 1} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

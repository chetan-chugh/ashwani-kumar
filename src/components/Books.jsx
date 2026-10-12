import { BOOKS } from '../data'
import { Section } from './ui'
import BookCard from './BookCard'

export default function Books() {
  return (
    <Section
      id="books"
      eyebrow="Books"
      title="Things I've written"
      sub="Poetry, satire and short fiction, in order of publication."
    >
      <div className="space-y-6">
        {BOOKS.map((book, i) => (
          <BookCard key={book.en} b={book} n={i + 1} />
        ))}
      </div>
    </Section>
  )
}
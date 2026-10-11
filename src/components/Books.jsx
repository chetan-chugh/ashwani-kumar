import { BOOKS } from '../data'
import { Section } from './ui'
import BookCard from './BookCard'

const Books=()=>(<Section id="books" eyebrow="Books" title="Things I've written" sub="Poetry, satire and short fiction, in order of publication."><div className="space-y-6">{BOOKS.map((b,i)=><BookCard key={b.en} b={b} n={i+1}/>)}</div></Section>);

export default Books

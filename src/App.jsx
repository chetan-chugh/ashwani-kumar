import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Craft from './components/Craft'
import Books from './components/Books'
import Launch from './components/Launch'
import Journey from './components/Journey'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 font-mono text-[11px] uppercase tracking-[.14em] text-dim sm:flex-row">
        <span>© {new Date().getFullYear()} Ashwani Kumar 'Bheem'</span>
        <span>Poet &amp; Writer · Chandigarh</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Craft />
        <Books />
        <Launch />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
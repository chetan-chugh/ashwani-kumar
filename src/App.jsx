import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Craft from './components/Craft'
import Books from './components/Books'
import Launch from './components/Launch'
import Journey from './components/Journey'
import Contact from './components/Contact'

const App=()=>(<><Navbar/><main><Hero/><About/><Craft/><Books/><Launch/><Journey/><Contact/></main>
 <footer className="border-t border-line px-5 sm:px-8 py-8"><div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] tracking-[.14em] uppercase text-dim"><span>© {new Date().getFullYear()} Ashwani Kumar 'Bheem'</span><span>Poet &amp; Writer · Chandigarh</span></div></footer></>);

export default App

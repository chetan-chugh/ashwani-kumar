import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideRail from './components/SideRail'
import ScrollTop from './components/Scrollbar'
import Home from './pages/Home'
import BooksPage from './pages/BooksPage'
import GroupsPage from './pages/GroupsPage'
import ContactPage from './pages/ContactPage'
import { useRoute } from './router'

function Page({ path }) {
  if (path === '/books') return <BooksPage />
  if (path.startsWith('/books/')) return <BooksPage slug={path.slice('/books/'.length)} />
  if (path === '/groups') return <GroupsPage />
  if (path === '/contact') return <ContactPage />
  return <Home />
}

export default function App() {
  const path = useRoute()
  return (
    <>
      <Navbar path={path} />
      <SideRail />
      <main>
        <Page path={path} />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

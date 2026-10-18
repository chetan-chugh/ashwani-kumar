import { useT } from '../i18n'
import { PageHeader } from '../components/ui'
import Contact from '../components/Contact'

export default function ContactPage() {
  const t = useT().contact
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <Contact />
    </>
  )
}

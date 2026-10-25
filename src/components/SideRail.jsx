import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from '../data'
import { useT } from '../i18n'
import { MailIcon, FacebookIcon, InstagramIcon } from './ui'

// Floating vertical contact rail on the left (wide screens only, so it never covers content)
export default function SideRail() {
  const t = useT().contact
  const item = 'flex h-9 w-9 items-center justify-center rounded-full text-mute transition hover:text-ink hover:bg-blue/15'
  return (
    <aside
      aria-label={t.form}
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-line bg-bg/70 px-2 py-4 backdrop-blur-xl min-[1360px]:flex"
    >
      <a href={`mailto:${EMAIL}`} aria-label={t.email} title={EMAIL} className={item}><MailIcon /></a>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label={t.facebook} className={item}><FacebookIcon /></a>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label={t.instagram} title="Instagram" className={item}><InstagramIcon /></a>
    </aside>
  )
}

import { useT, useLang } from '../i18n'
import { EMAIL, FACEBOOK_URL } from '../data'
import { MailIcon, FacebookIcon } from './ui'

export default function Footer() {
  const t = useT()
  const { lang } = useLang()
  const name = lang === 'hi' ? 'अश्वनी मल्होत्रा "भीम"' : "Ashwani Malhotra 'Bheem'"
  const icon = 'flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition hover:border-blue/60 hover:text-ink'

  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-mute">© {new Date().getFullYear()} {name} — {t.footer.built}</p>
          <p className="mt-1 text-sm text-dim">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${EMAIL}`} className="mr-2 break-all text-sm text-mute hover:text-ink">{EMAIL}</a>
          <a href={`mailto:${EMAIL}`} aria-label={t.contact.email} className={icon}><MailIcon /></a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label={t.contact.facebook} className={icon}><FacebookIcon /></a>
        </div>
      </div>
    </footer>
  )
}

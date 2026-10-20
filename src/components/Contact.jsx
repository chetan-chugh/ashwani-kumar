import { useState } from 'react'
import { EMAIL, FACEBOOK_URL } from '../data'
import { useLang, useL, useT } from '../i18n'

// Fill and border are clearly lighter than the page so the boxes show before they are tapped
const INPUT =
  'w-full rounded-xl border bg-[#14111f] px-4 py-3.5 text-base text-ink placeholder-mute/60 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/30'
const BORDER_OK = 'border-[#3d3558]'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function ContactCard({ label, text, href, external }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-dim">{label}</p>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener' : undefined}
          className="break-all font-medium text-ink hover:text-blue"
        >
          {text}
        </a>
      ) : (
        <p className="font-medium text-ink">{text}</p>
      )}
    </div>
  )
}

function validate(values, t) {
  const errors = {}
  if (!values.name.trim()) errors.name = t.errName
  if (!values.email.trim()) errors.email = t.errEmail
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = t.errEmailBad
  if (!values.subject.trim()) errors.subject = t.errSubject
  if (!values.message.trim()) errors.message = t.errMessage
  else if (values.message.trim().length < 10) errors.message = t.errMessageShort
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-mute">{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-rose-400">{error}</p>
      )}
    </div>
  )
}

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const t = useT().contact
  const { lang } = useLang()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | error | opened

  const set = (key) => (e) => {
    setValues({ ...values, [key]: e.target.value })
    if (errors[key]) setErrors({ ...errors, [key]: undefined })
  }

  // There is no backend or email service in this project, so the form hands the message to the
  // visitor's own email app. We cannot know whether they send it, so we never claim it was sent.
  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values, t)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus('error')
      return
    }
    const body = `${values.message.trim()}\n\n${t.mailFrom}: ${values.name.trim()} <${values.email.trim()}>`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    setStatus('opened')
  }

  const border = (key) => (errors[key] ? 'border-rose-400' : BORDER_OK)
  const aria = (key) => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  return (
    <section className="px-5 pb-24 pt-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-4">
          <ContactCard label={t.email} text={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactCard label={t.location} text={t.locationValue} />
          <ContactCard
            label={t.facebook}
            text={lang === 'hi' ? 'अश्वनी मल्होत्रा "भीम"' : "Ashwani Malhotra 'Bheem'"}
            href={FACEBOOK_URL}
            external
          />
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-line bg-card p-5 sm:p-8">
          <h2 className="text-2xl font-extrabold text-ink">{t.form}</h2>

          {status === 'error' && (
            <p role="alert" className="rounded-xl border border-rose-400/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
              {t.errorSummary}
            </p>
          )}
          {status === 'opened' && (
            <p role="status" className="rounded-xl border border-blue/40 bg-blue/10 px-4 py-3 text-sm leading-relaxed text-ink">
              {t.opened}
            </p>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label={t.name} error={errors.name}>
              <input id="name" name="name" autoComplete="name" value={values.name} onChange={set('name')} className={`${INPUT} ${border('name')}`} placeholder={t.phName} {...aria('name')} />
            </Field>
            <Field id="email" label={t.emailField} error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} className={`${INPUT} ${border('email')}`} placeholder={t.phEmail} {...aria('email')} />
            </Field>
          </div>
          <Field id="subject" label={t.subject} error={errors.subject}>
            <input id="subject" name="subject" value={values.subject} onChange={set('subject')} className={`${INPUT} ${border('subject')}`} placeholder={t.phSubject} {...aria('subject')} />
          </Field>
          <Field id="message" label={t.message} error={errors.message}>
            <textarea id="message" name="message" rows="6" value={values.message} onChange={set('message')} className={`${INPUT} ${border('message')}`} placeholder={t.phMessage} {...aria('message')} />
          </Field>

          <button className="btn-primary rounded-full px-6 py-3.5 text-sm font-semibold">
            {t.send}
          </button>
        </form>
      </div>
    </section>
  )
}
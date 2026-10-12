import { EMAIL, PHONE, FACEBOOK_URL } from '../data'
import { Section } from './ui'

const CONTACTS = [
  { label: 'Email', text: EMAIL, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`, external: true },
  { label: 'Phone', text: `+91 ${PHONE}`, href: `tel:+91${PHONE}` },
  { label: 'Facebook', text: "Ashwani Kumar 'Bheem'", href: FACEBOOK_URL, external: true },
]

const INPUT = 'w-full rounded-xl border border-line bg-card px-4 py-3.5 text-ink placeholder-dim outline-none focus:border-blue'

function ContactCard({ label, text, href, external }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-dim">{label}</p>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener' : undefined}
        className="break-all font-medium text-ink hover:text-blue"
      >
        {text}
      </a>
    </div>
  )
}

// Opens the visitor's mail app with the message filled in
function sendByMail(e) {
  e.preventDefault()
  const form = new FormData(e.target)
  const subject = encodeURIComponent(`Message from ${form.get('n')}`)
  const body = encodeURIComponent(form.get('m'))
  location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      sub="For readings, reviews, invitations or just to say hello."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          {CONTACTS.map((c) => (
            <ContactCard key={c.label} {...c} />
          ))}
        </div>

        <form onSubmit={sendByMail} className="space-y-4">
          <input name="n" required placeholder="Your name" className={INPUT} />
          <textarea name="m" required rows="6" placeholder="Your message" className={INPUT} />
          <button className="rounded-xl bg-blue px-6 py-3.5 text-sm font-semibold text-white hover:brightness-110">
            Send message →
          </button>
        </form>
      </div>
    </Section>
  )
}
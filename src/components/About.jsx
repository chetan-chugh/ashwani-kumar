import Events from './Events'
import { FEATURES } from '../data'
import { Section } from './ui'

// Bold highlighted text inside a paragraph
const Bold = ({ children }) => <b className="font-semibold text-ink">{children}</b>

function FeatureCard({ icon, title, text, color }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-line bg-card p-5">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
        style={{ background: color + '22' }}
      >
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-ink">{title}</h3>
        <p className="text-sm text-dim">{text}</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Poet, satirist, storyteller">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6 text-lg leading-[1.8] text-mute">
          <p>
            I'm <Bold>Ashwani Kumar 'Bheem'</Bold>, a Hindi poet and writer born in Kaithal,
            Haryana, now living in Chandigarh. I have published <Bold>four books</Bold> and a
            fifth is on the way.
          </p>
          <p>
            By day I work at the <Bold>Punjab and Haryana High Court</Bold>. By night, and in the
            margins of the day, I write — gentle verse, pointed satire and stories about ordinary
            lives.
          </p>
          <p>
            My work has been supported by the <Bold>Haryana Sahitya Akademi</Bold>, and I am a
            member of Abhivyakti, Manthan and Kidar Adabi Trust.
          </p>
        </div>

        <div className="space-y-4">
          {FEATURES.map(([icon, title, text, color]) => (
            <FeatureCard key={title} icon={icon} title={title} text={text} color={color} />
          ))}
        </div>
      </div>

      <Events />
    </Section>
  )
}
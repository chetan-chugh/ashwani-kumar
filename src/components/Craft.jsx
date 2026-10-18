import { SKILLS } from '../data'
import { useL, useT } from '../i18n'
import { Section, Reveal } from './ui'
import Icon from './icons'

function SkillCard({ item }) {
  const L = useL()
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-card/70 p-4 transition hover:border-blue/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg text-blue">
        <Icon name={item.icon} />
      </span>
      <div className="min-w-0">
        <h3 className="font-mono text-sm font-bold text-ink">{L(item.title)}</h3>
        <p className="mt-0.5 text-sm text-mute">{L(item.text)}</p>
      </div>
    </div>
  )
}

// Rings of icons that turn slowly around a centre badge. Each item sits on its ring by
// rotate + translate; the item's inner span turns back so the icon stays upright.
const RINGS = [
  { radius: 172, duration: 90, icons: ['book', 'feather', 'mic', 'bookmark', 'sun', 'pen', 'star', 'quote'] },
  { radius: 122, duration: 70, reverse: true, icons: ['moon', 'award', 'pin', 'calendar', 'file', 'users'] },
  { radius: 74, duration: 50, icons: ['quote', 'book', 'feather', 'sun'] },
]

function Orbit() {
  return (
    <div className="flex h-[300px] w-full min-w-0 items-center justify-center overflow-hidden sm:h-[372px] lg:w-[372px]" aria-hidden="true">
      <div className="relative h-[372px] w-[372px] shrink-0 origin-center scale-[.8] sm:scale-100">
        {RINGS.map((ring, ri) => (
          <div key={ri}>
            <div
              className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-line"
              style={{ width: ring.radius * 2, height: ring.radius * 2, transform: 'translate(-50%,-50%)' }}
            />
            <div
              className="orbit-ring absolute inset-0"
              style={{ animationDuration: `${ring.duration}s`, animationDirection: ring.reverse ? 'reverse' : 'normal' }}
            >
              {ring.icons.map((name, i) => {
                const angle = (360 / ring.icons.length) * i + ri * 20
                return (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] h-9 w-9"
                    style={{ transform: `rotate(${angle}deg) translateY(-${ring.radius}px) rotate(-${angle}deg)` }}
                  >
                    <span
                      className="orbit-item flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-card text-blue"
                      style={{ animationDuration: `${ring.duration}s`, animationDirection: ring.reverse ? 'normal' : 'reverse' }}
                    >
                      <Icon name={name} size={16} />
                    </span>
                  </span>
                )
              })}
            </div>
          </div>
        ))}
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-card text-blue shadow-[0_0_40px_rgba(167,123,242,.3)]">
          <Icon name="pen" size={22} />
        </span>
      </div>
    </div>
  )
}

export default function Craft() {
  const t = useT().craft
  return (
    <Section id="craft" tint eyebrow={t.eyebrow} title={t.title} sub={t.sub}>
      <div className="grid grid-cols-1 items-center gap-6 rounded-[2.5rem] border border-line bg-gradient-to-b from-card/40 to-transparent p-5 sm:p-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:p-10 [&>*]:min-w-0">
        <div className="space-y-4">
          {SKILLS.left.map((item, i) => (
            <Reveal key={item.icon} delay={i * 110}><SkillCard item={item} /></Reveal>
          ))}
        </div>
        <Reveal delay={100}><Orbit /></Reveal>
        <div className="space-y-4">
          {SKILLS.right.map((item, i) => (
            <Reveal key={item.icon} delay={i * 110 + 150}><SkillCard item={item} /></Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

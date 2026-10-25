import Hero from '../components/Hero'
import About from '../components/About'
import { useT } from '../i18n'
import { Link } from '../router'
import { ArrowIcon, BTN_PRIMARY, AnimatedTitle, Reveal } from '../components/ui'

export default function Home() {
  const t = useT()
  return (
    <>
      <Hero />
      <About />

      <section className="px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <AnimatedTitle
            key={t.cta.title}
            as="h2"
            onView
            text={t.cta.title}
            className="text-4xl font-extrabold leading-[1.2] tracking-tight text-ink sm:text-6xl"
          />
          <Reveal delay={250}>
            <p className="mt-5 text-lg text-mute">{t.cta.text}</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className={BTN_PRIMARY}>{t.cta.contact} <ArrowIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

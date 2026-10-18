import { GROUPS } from '../data'
import { useT } from '../i18n'
import { PageHeader, Reveal } from '../components/ui'
import GroupCard from '../components/GroupCard'

export default function GroupsPage() {
  const t = useT().groups
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {GROUPS.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 3) * 90} className={`h-full lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}>
              <GroupCard g={g} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
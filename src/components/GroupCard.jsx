import { useL, useT } from '../i18n'

export default function GroupCard({ g }) {
  const t = useT().groups
  const L = useL()
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 transition hover:border-blue/40 sm:p-8">
      {/* No logos are documented for these groups, so a monogram stands in */}
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-extrabold"
        style={{ background: g.color + '22', color: g.color }}
      >
        {L(g.initial)}
      </span>
      <h3 className="mt-6 text-2xl font-extrabold leading-snug text-ink">{L(g.name)}</h3>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[.2em] text-dim">{t.role}</p>
      <p className="mt-1 font-medium text-ink">{L(g.role)}</p>
    </article>
  )
}

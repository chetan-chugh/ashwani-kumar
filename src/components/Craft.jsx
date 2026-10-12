import { CRAFT } from '../data'
import { Tag, Section } from './ui'

function CraftCard({ title, icon, color, tags }) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-6">
      <div className="flex items-center gap-4 border-b border-line pb-5">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ background: color + '22', color }}
        >
          {icon}
        </span>
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[.14em]" style={{ color }}>
            {title}
          </h3>
          <p className="text-xs text-dim">{tags.length} items</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export default function Craft() {
  return (
    <Section
      id="craft"
      tint
      eyebrow="The craft"
      title="What I write"
      sub="Forms, themes and the people behind the books."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CRAFT.map(([title, icon, color, tags]) => (
          <CraftCard key={title} title={title} icon={icon} color={color} tags={tags} />
        ))}
      </div>
    </Section>
  )
}
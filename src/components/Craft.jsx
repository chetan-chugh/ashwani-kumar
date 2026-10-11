import { CRAFT } from '../data'
import { Tag, Section } from './ui'

const Craft=()=>(
 <Section id="craft" tint eyebrow="The craft" title="What I write" sub="Forms, themes and the people behind the books.">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{CRAFT.map(([t,i,c,tags])=><div key={t} className="rounded-2xl border border-line bg-bg p-6">
   <div className="flex items-center gap-4 pb-5 border-b border-line"><span className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:c+"22",color:c}}>{i}</span>
    <div><h3 className="font-mono text-xs font-bold tracking-[.14em] uppercase" style={{color:c}}>{t}</h3><p className="text-dim text-xs">{tags.length} items</p></div></div>
   <div className="flex flex-wrap gap-2 pt-5">{tags.map(x=><Tag key={x}>{x}</Tag>)}</div></div>)}</div>
 </Section>);

export default Craft

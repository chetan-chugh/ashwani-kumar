import { JOURNEY } from '../data'
import { Section } from './ui'

const Journey=()=>(
 <Section id="journey" tint eyebrow="Journey" title="Writing journey" sub="From Kaithal to Chandigarh, verse to prose.">
  <div className="space-y-5">{JOURNEY.map(([p,h,t])=><div key={p} className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 p-6 rounded-2xl border border-line bg-bg">
   <p className="font-mono text-xs tracking-[.14em] uppercase text-blue font-bold">{p}</p>
   <div><h3 className="text-ink font-semibold text-xl">{h}</h3><p className="text-mute mt-2 leading-relaxed max-w-2xl">{t}</p></div></div>)}</div>
 </Section>);

export default Journey

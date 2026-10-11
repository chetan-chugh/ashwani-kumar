import { Pill } from './ui'

const BookCard=({b,n})=>(
 <article className="relative overflow-hidden rounded-3xl border border-line border-l-[3px] border-l-blue/60 bg-card p-6 sm:p-8">
  <div>
   <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-[11px] px-2 py-1 rounded-md bg-blue/10 text-blue border border-blue/25">{String(n).padStart(2,"0")}</span>
    {b.tags.map((t,i)=><Pill key={t} c={["#6e86ff","#22b5e8","#8b5cf6"][i%3]}>{t}</Pill>)}</div>
   <h3 className="text-3xl font-extrabold tracking-tight text-ink mt-5">{b.title}</h3>
   <p className="text-mute mt-1">{b.en}</p>
   <p className="text-mute leading-relaxed mt-4 max-w-xl">{b.text}</p>
   <div className="border-t border-line mt-6 pt-5"><p className="font-mono text-[10px] tracking-[.2em] uppercase text-dim mb-3">Key details</p>
    <div className="flex flex-wrap gap-2">{b.feats.map(f=><span key={f} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-mute bg-white/[.04] border border-line"><i className="w-1.5 h-1.5 rounded-full bg-blue"/>{f}</span>)}</div></div>
  </div>
  <div className="mt-6">
   {b.img
    ? <img src={b.img} alt={"Cover of "+b.en} className="block w-full max-h-[80vh] rounded-lg border border-line object-contain object-center shadow-2xl"/>
    : <div aria-label="Fifth book coming soon" className="flex min-h-64 w-full flex-col items-center justify-center rounded-lg border border-blue/30 bg-gradient-to-br from-blue/20 via-card to-card p-4 text-center"><span className="font-mono text-xs tracking-[.2em] text-blue">05</span><span className="mt-3 font-semibold text-ink">Coming soon</span></div>}
   <a href="#launch" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">View book <span aria-hidden="true">→</span></a>
  </div>
 </article>);

export default BookCard

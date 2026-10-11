export const Eyebrow=({children})=><p className="font-mono text-[11px] tracking-[.18em] uppercase text-blue font-bold">{children}</p>;

export const Pill=({children,c="#8b8ba7"})=><span className="inline-block px-3 py-1 rounded-full text-xs font-medium border" style={{color:c,borderColor:c+"44",background:c+"14"}}>{children}</span>;

export const Tag=({children})=><span className="inline-block px-3 py-1.5 rounded-lg text-xs text-mute bg-white/[.04] border border-line">{children}</span>;

export const Section=({id,eyebrow,title,sub,children,tint})=>(
 <section id={id} className={"px-5 sm:px-8 py-20 sm:py-28 "+(tint?"bg-card/60":"")}>
  <div className="max-w-6xl mx-auto">
   <Eyebrow>{eyebrow}</Eyebrow>
   <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink mt-3">{title}</h2>
   {sub&&<p className="text-mute text-lg mt-4 max-w-xl">{sub}</p>}
   <div className="mt-12 sm:mt-16">{children}</div>
  </div>
 </section>);

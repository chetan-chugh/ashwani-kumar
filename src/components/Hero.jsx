import { IMG, CAL_URL, EMAIL } from '../data'

const Hero=()=>(
 <section id="top" className="grid-bg orb min-h-screen px-5 sm:px-8 pt-28 pb-10 flex flex-col">
  <div className="max-w-6xl mx-auto w-full flex-1 grid lg:grid-cols-[1.35fr_.65fr] gap-10 items-center">
   <div>
    <h1 className="font-extrabold tracking-tighter leading-[.95] text-[clamp(3.4rem,11vw,8.5rem)]">
     <span className="rise block text-ink" style={{animationDelay:".1s"}}>Ashwani</span>
     <span className="rise block ghost" style={{animationDelay:".3s"}}>Kumar</span>
     <span className="rise block bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent pb-2" style={{animationDelay:".5s"}}>Poet &amp; Writer.</span></h1>
    <p className="rise text-mute text-lg sm:text-xl leading-relaxed mt-7 max-w-xl" style={{animationDelay:".7s"}}>अश्वनी कुमार 'भीम'. I write Hindi poetry, satire and stories — from the first light of a poem to the last page of a book.</p>
    <div className="rise flex flex-wrap gap-3 mt-9" style={{animationDelay:".9s"}}>
     <a href="#books" className="px-6 py-3.5 bg-blue text-white text-sm font-semibold rounded-xl hover:brightness-110 transition">Read my books →</a>
     <a href="#contact" className="px-6 py-3.5 border border-line text-ink text-sm font-semibold rounded-xl hover:border-blue/60 transition">Get in touch</a></div>
   </div>
   <div className="rise justify-self-center lg:justify-self-end w-full max-w-sm lg:w-72" style={{animationDelay:".6s"}}>
    <div className="rounded-3xl border border-line bg-card p-2"><img src={IMG.profile} alt="Ashwani Kumar 'Bheem'" className="w-full aspect-[3/4] object-cover object-top rounded-2xl"/></div>
    <div className="mt-4 grid grid-cols-2 gap-4 lg:block">
     <div className="flex flex-col gap-3 rounded-2xl border border-blue/40 bg-card p-3 sm:p-4"><p className="font-mono text-[10px] tracking-[.18em] uppercase text-blue font-bold">Upcoming · 7 Nov 2026</p><p className="text-ink font-semibold mt-1">Kavi Sammelan</p><p className="text-mute text-xs mt-0.5">The Library, Sector 17, Chandigarh</p><a href={CAL_URL} target="_blank" rel="noopener" className="mt-auto block text-center px-2 py-2.5 bg-blue text-white text-[10px] sm:text-xs font-semibold rounded-xl hover:brightness-110 transition">Add to calendar</a></div>
     <div className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-3 lg:mt-4 sm:p-4"><p className="font-mono text-[10px] tracking-[.18em] uppercase text-blue font-bold">Next book · Coming soon</p><p className="text-mute text-xs mt-1">Title and cover to be announced.</p><a href={"mailto:"+EMAIL+"?subject=Notify me about the next book"} className="mt-auto block text-center px-2 py-2.5 border border-line text-ink text-[10px] sm:text-xs font-semibold rounded-xl hover:border-blue/60 transition">Notify me at launch</a></div>
    </div>
   </div>
  </div>
  <div className="max-w-6xl mx-auto w-full mt-14 flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-8">
   <div className="flex items-center gap-4 font-mono text-[10px] tracking-[.2em] uppercase text-dim"><span className="w-12 h-px bg-dim"/>Scroll to explore</div>
   <dl className="grid grid-cols-2 sm:flex gap-x-10 gap-y-6 sm:gap-10 lg:gap-14">{[["4","Books published"],["50+","Events organised"],["100+","Sammelans attended"],["1","Coming soon"]].map(([a,b])=><div key={b} className="sm:text-center"><dt className="text-4xl font-extrabold text-ink">{a}</dt><dd className="font-mono text-[10px] tracking-[.16em] uppercase text-dim mt-1">{b}</dd></div>)}</dl>
  </div>
 </section>);

export default Hero

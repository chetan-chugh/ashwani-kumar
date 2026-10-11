import { Pill, Tag } from './ui'

const Events=()=>{
 const left=Math.ceil((new Date("2026-11-07T00:00:00")-new Date())/864e5);
 const cal="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kavi+Sammelan&dates=20261107/20261108&location=Library,+Sector+17,+Chandigarh";
 const map="https://www.google.com/maps/search/?api=1&query=Library+Sector+17+Chandigarh";
 return(
 <div id="events" className="mt-20 pt-16 border-t border-line">
  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Events and literary achievements</h3>
  <p className="text-mute text-lg mt-3 mb-10 max-w-xl">Organising and joining poetry gatherings across the Tricity and beyond.</p>
  <article className="relative overflow-hidden rounded-3xl border border-blue/40 bg-card p-6 sm:p-10 grid md:grid-cols-[150px_1fr] gap-8 items-center">
   <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(60% 80% at 100% 0%,rgba(79,110,247,.18),transparent 70%)"}}/>
   <div className="relative w-32 md:w-full mx-auto text-center rounded-2xl border border-blue/30 bg-blue/10 py-6">
    <p className="font-mono text-xs tracking-[.2em] uppercase text-blue font-bold">Nov</p>
    <p className="text-6xl font-extrabold text-ink leading-none my-1">07</p>
    <p className="font-mono text-xs tracking-[.2em] text-mute">2026</p>
   </div>
   <div className="relative">
    <div className="flex flex-wrap items-center gap-2"><Pill c="#22b5e8">Upcoming event</Pill>{left>0&&<Pill c="#f59e0b">{left} {left===1?"day":"days"} to go</Pill>}{left===0&&<Pill c="#f59e0b">Today</Pill>}</div>
    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mt-5">Kavi Sammelan <span className="text-mute font-semibold">· कवि सम्मेलन</span></h3>
    <dl className="mt-5 grid sm:grid-cols-2 gap-4 max-w-xl">
     <div><dt className="font-mono text-[10px] tracking-[.2em] uppercase text-dim">Date</dt><dd className="text-ink font-medium mt-1">Saturday, 7 November 2026</dd></div>
     <div><dt className="font-mono text-[10px] tracking-[.2em] uppercase text-dim">Venue</dt><dd className="text-ink font-medium mt-1">The Library, Sector 17, Chandigarh</dd></div>
    </dl>
    <p className="text-mute leading-relaxed mt-5 max-w-xl">An evening where poets gather to share their poetry, voice their thoughts and celebrate literature. Everyone who loves words is welcome.</p>
    <div className="flex flex-wrap gap-3 mt-7">
     <a href={cal} target="_blank" rel="noopener" className="px-5 py-3 bg-blue text-white text-sm font-semibold rounded-xl hover:brightness-110 transition">Add to calendar</a>
     <a href={map} target="_blank" rel="noopener" className="px-5 py-3 border border-line text-ink text-sm font-semibold rounded-xl hover:border-blue/60 transition">Get directions</a>
    </div>
   </div>
  </article>
  <div className="grid sm:grid-cols-3 gap-5 mt-6">
   {[["50+","Events organised","Literary and cultural events managed across Chandigarh, Panchkula and Mohali.","#4f6ef7"],["100+","Kavi Sammelans attended","Poetry gatherings where poets share verse, ideas and the joy of literature.","#8b5cf6"],["3","Cities of the Tricity","Chandigarh, Panchkula and Mohali, home ground for his events.","#10b981"]].map(([n,t,d,c])=>
    <div key={t} className="rounded-2xl border border-line bg-card p-6">
     <p className="text-5xl font-extrabold tracking-tight" style={{color:c}}>{n}</p>
     <h3 className="text-ink font-semibold mt-3">{t}</h3>
     <p className="text-mute text-sm leading-relaxed mt-2">{d}</p></div>)}
  </div>
  <div className="flex flex-wrap items-center gap-2 mt-8"><span className="font-mono text-[10px] tracking-[.2em] uppercase text-dim mr-2">Community</span>{["Abhivyakti","Manthan","Kidar Adabi Trust","Haryana Sahitya Akademi"].map(x=><Tag key={x}>{x}</Tag>)}</div>
 </div>);};

export default Events

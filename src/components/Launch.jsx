import { BOOKS, IMG } from '../data'
import { Section } from './ui'
import sapnoLaunch from '../assets/sapno-launch.jpg'
import aadmiShwanLaunch from '../assets/aadmi-shwan-launch.jpg'
import kabhiLaunch from '../assets/kabhi-launch.jpg'

const Launch=()=>(
 <Section id="launch" eyebrow="Book launch" title="Book launches" sub="Books in publication order.">
  <div className="space-y-6">
   {BOOKS.map((book,index)=>{
    const kabhiLaunchBook=book.en==="Kabhi To Subah Aayegi";
    const launchPhoto=book.en==="Bahan Kahti Thi";
    const featuredLaunch=book.en==="Sapnon Ka Hona Zaroori Hai";
    const aadmiLaunch=book.en==="Aadmi, Shwan Aur Rajneeti";
    const upcoming=!book.img;
    const hasLaunchDetails=kabhiLaunchBook||launchPhoto||featuredLaunch||aadmiLaunch||upcoming;
    const image=kabhiLaunchBook?kabhiLaunch:featuredLaunch?sapnoLaunch:aadmiLaunch?aadmiShwanLaunch:launchPhoto?IMG.launch:book.img;
    return(
     <article key={book.en} className={`relative grid overflow-hidden rounded-3xl border border-line border-l-[3px] border-l-blue/60 bg-card p-6 sm:p-8 ${hasLaunchDetails?"gap-5 sm:gap-6":"gap-6 sm:gap-8 sm:grid-cols-[1fr_190px] sm:items-center"}`}>
      <div className={`flex items-center gap-4 ${hasLaunchDetails?"sm:col-span-2":""}`}>
       <span className="shrink-0 rounded-md border border-blue/25 bg-blue/10 px-2 py-1 font-mono text-[11px] text-blue">{String(index+1).padStart(2,"0")}</span>
       <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{book.title}</h3>
      </div>
      {hasLaunchDetails&&<p className="font-mono text-xs tracking-[.16em] uppercase text-blue sm:col-span-2">{upcoming?"Launch date · To be announced":`Book launch · ${kabhiLaunchBook?"2014":featuredLaunch?"2023":aadmiLaunch?"2021":"2023"}`}</p>}
      {image
       ? <img src={image} alt={hasLaunchDetails?`Launch of ${book.en}`:`Cover of ${book.en}`} loading="lazy" className={hasLaunchDetails?"max-h-[80vh] w-full rounded-lg border border-line bg-black/20 object-contain shadow-2xl sm:col-span-2":`w-40 justify-self-center self-start rounded-lg border border-line shadow-2xl sm:w-full object-contain`}/>
       : <div aria-label="Fifth book launch coming soon" className={`flex w-full flex-col items-center justify-center rounded-lg border border-blue/30 bg-gradient-to-br from-blue/20 via-card to-card p-4 text-center ${hasLaunchDetails?"aspect-[4/3] sm:aspect-video sm:col-span-2":"aspect-[3/4] w-40 justify-self-center self-start sm:w-full"}`}><span className="font-mono text-xs tracking-[.2em] text-blue">{String(index+1).padStart(2,"0")}</span><span className="mt-3 font-semibold text-ink">Coming soon</span></div>}
      {hasLaunchDetails&&<a href="#books" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue transition hover:brightness-125 sm:col-span-2">View Book <span aria-hidden="true">→</span></a>}
     </article>
    )
   })}
  </div>
 </Section>
);

export default Launch

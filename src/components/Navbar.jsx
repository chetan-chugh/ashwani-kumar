import { useState, useEffect } from 'react'
import { NAV } from '../data'

const Navbar=()=>{
 const [open,setOpen]=useState(false),[sc,setSc]=useState(false);
 useEffect(()=>{const f=()=>setSc(scrollY>30);f();addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
 return(<header className={"fixed top-0 inset-x-0 z-50 transition-colors "+(sc||open?"bg-bg/90 backdrop-blur border-b border-line":"")} style={{paddingTop:"env(safe-area-inset-top,0px)"}}>
  <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
   <a href="#top" className="text-2xl font-extrabold tracking-tighter text-ink">AK<span className="text-blue">.</span></a>
   <ul className="hidden md:flex gap-7 font-mono text-[11px] tracking-[.16em] uppercase text-mute">{NAV.map(([i,l])=><li key={i}><a className="hover:text-ink transition-colors" href={"#"+i}>{l}</a></li>)}</ul>
   <button className="md:hidden text-ink p-2" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={open?"M5 5l14 14M19 5L5 19":"M3 7h18M3 12h18M3 17h18"}/></svg></button>
  </nav>
  {open&&<ul className="md:hidden px-5 pb-4">{NAV.map(([i,l])=><li key={i}><a onClick={()=>setOpen(false)} className="block py-3 font-mono text-xs tracking-[.16em] uppercase text-mute border-b border-line" href={"#"+i}>{l}</a></li>)}</ul>}
 </header>);
};

export default Navbar

import { EMAIL, PHONE, FACEBOOK_URL } from '../data'
import { Section } from './ui'

const Contact=()=>(
 <Section id="contact" eyebrow="Contact" title="Let's talk" sub="For readings, reviews, invitations or just to say hello.">
  <div className="grid md:grid-cols-2 gap-10">
   <div className="space-y-4">{[["Email",EMAIL,"https://mail.google.com/mail/?view=cm&fs=1&to="+EMAIL],["Phone","+91 "+PHONE,"tel:+91"+PHONE],["Facebook","Ashwani Kumar 'Bheem'",FACEBOOK_URL]].map(([a,b,h])=><div key={a} className="p-5 rounded-2xl border border-line bg-card"><p className="font-mono text-[10px] tracking-[.2em] uppercase text-dim">{a}</p>{h?<a href={h} {...(h.startsWith("http")?{target:"_blank",rel:"noopener"}:{})} className="text-ink font-medium break-all hover:text-blue">{b}</a>:<p className="text-ink font-medium">{b}</p>}</div>)}</div>
   <form className="space-y-4" onSubmit={e=>{e.preventDefault();const d=new FormData(e.target);location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Message from "+d.get("n"))}&body=${encodeURIComponent(d.get("m"))}`}}>
    <input name="n" required placeholder="Your name" className="w-full bg-card border border-line rounded-xl px-4 py-3.5 text-ink placeholder-dim focus:border-blue outline-none"/>
    <textarea name="m" required rows="6" placeholder="Your message" className="w-full bg-card border border-line rounded-xl px-4 py-3.5 text-ink placeholder-dim focus:border-blue outline-none"/>
    <button className="px-6 py-3.5 bg-blue text-white text-sm font-semibold rounded-xl hover:brightness-110 transition">Send message →</button>
   </form>
  </div>
 </Section>);

export default Contact

import Events from './Events'
import { FEATURES } from '../data'
import { Section } from './ui'

const About=()=>(
 <Section id="about" eyebrow="About me" title="Poet, satirist, storyteller">
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
   <div className="space-y-6 text-mute text-lg leading-[1.8]">
    <p>I'm <b className="text-ink font-semibold">Ashwani Kumar 'Bheem'</b>, a Hindi poet and writer born in Kaithal, Haryana, now living in Chandigarh. I have published <b className="text-ink font-semibold">four books</b> and a fifth is on the way.</p>
    <p>By day I work at the <b className="text-ink font-semibold">Punjab and Haryana High Court</b>. By night, and in the margins of the day, I write — gentle verse, pointed satire and stories about ordinary lives.</p>
    <p>My work has been supported by the <b className="text-ink font-semibold">Haryana Sahitya Akademi</b>, and I am a member of Abhivyakti, Manthan and Kidar Adabi Trust.</p>
   </div>
   <div className="space-y-4">{FEATURES.map(([i,t,d,c])=><div key={t} className="flex items-center gap-5 p-5 rounded-2xl border border-line bg-card">
    <span className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl" style={{background:c+"22"}}>{i}</span>
    <div><h3 className="text-ink font-semibold">{t}</h3><p className="text-dim text-sm">{d}</p></div></div>)}</div>
  </div>
  <Events/>
 </Section>);

export default About

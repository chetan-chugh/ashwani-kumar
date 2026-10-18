import launch from './assets/launch.jpg'
import profile from './assets/profile.jpg'
import c1 from './assets/c1.jpg'
import c2 from './assets/c2.jpg'
import c3 from './assets/c3.jpg'
import c4 from './assets/c4.jpg'
import sapnoLaunch from './assets/sapno-launch.jpg'
import aadmiShwanLaunch from './assets/aadmi-shwan-launch.jpg'
import kabhiLaunch from './assets/kabhi-launch.jpg'

export const IMG = { launch, profile, c1, c2, c3, c4 }

// Bilingual values are { en, hi } pairs; read them with the useL() hook from i18n.jsx.

// ---------- Contact ----------
export const EMAIL = 'akm4967hc@gmail.com'
// NOTE: this is the generic Facebook address that was already in the project, not a personal profile.
export const FACEBOOK_URL = 'https://www.facebook.com/'
export const CAL_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kavi+Sammelan&dates=20261107/20261108&location=Library,+Sector+17,+Chandigarh'
export const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Library+Sector+17+Chandigarh'
export const EVENT_DATE = '2026-11-07T00:00:00'

// ---------- Books (the last one has no cover yet, so it shows "Coming soon") ----------
const PUB_SRISHTI = { en: 'Srishti Prakashan', hi: 'सृष्टि प्रकाशन' }

export const BOOKS = [
  {
    slug: 'kabhi-to-subah-aayegi',
    img: IMG.c1,
    launchImg: kabhiLaunch,
    title: 'कभी तो सुबह आयेगी',
    roman: 'Kabhi To Subah Aayegi',
    year: '2014',
    publisher: { en: 'Enkay Enterprises, Chandigarh', hi: 'एनके एंटरप्राइजेज, चंडीगढ़' },
    form: { en: 'Poetry collection', hi: 'काव्य संग्रह' },
    tags: {
      en: ['Poetry', 'Debut', '2014'],
      hi: ['कविता', 'पहली पुस्तक', '2014'],
    },
    text: {
      en: 'His first collection, published with the support of the Haryana Sahitya Akademi. Poems on nature, longing and the hope that the night will end.',
      hi: 'उनका पहला संग्रह, जो हरियाणा साहित्य अकादमी के सहयोग से प्रकाशित हुआ। प्रकृति, विरह और इस उम्मीद पर कविताएँ कि रात कटेगी।',
    },
    feats: {
      en: ['Haryana Sahitya Akademi grant', 'Enkay Enterprises, Chandigarh', 'Hindi verse'],
      hi: ['हरियाणा साहित्य अकादमी अनुदान', 'एनके एंटरप्राइजेज, चंडीगढ़', 'हिंदी काव्य'],
    },
  },
  {
    slug: 'aadmi-shwan-aur-rajneeti',
    img: IMG.c2,
    launchImg: aadmiShwanLaunch,
    title: 'आदमी, श्वान और राजनीति',
    roman: 'Aadmi, Shwan Aur Rajneeti',
    year: '2021',
    publisher: PUB_SRISHTI,
    form: { en: 'Satirical novel', hi: 'व्यंग्य उपन्यास' },
    tags: {
      en: ['Satirical novel', 'Satire', '2021'],
      hi: ['व्यंग्य उपन्यास', 'व्यंग्य', '2021'],
    },
    text: {
      en: 'A sharp satire in which dogs and men share one throne room. Humour with a bite, aimed at power and those who chase it.',
      hi: 'एक तीखा व्यंग्य जिसमें कुत्ते और आदमी एक ही सिंहासन-कक्ष साझा करते हैं। काटने वाला हास्य, जिसका निशाना सत्ता और उसके पीछे दौड़ने वाले हैं।',
    },
    feats: {
      en: ['Political satire', 'Srishti Prakashan', 'Hindi fiction'],
      hi: ['राजनीतिक व्यंग्य', 'सृष्टि प्रकाशन', 'हिंदी कथा'],
    },
  },
  {
    slug: 'bahan-kahti-thi',
    img: IMG.c3,
    launchImg: IMG.launch,
    title: 'बहन कहती थी',
    roman: 'Bahan Kahti Thi',
    year: '2023',
    publisher: PUB_SRISHTI,
    form: { en: 'Story collection', hi: 'कहानी संग्रह' },
    tags: {
      en: ['Story collection', 'Fiction', '2023'],
      hi: ['कहानी संग्रह', 'कथा साहित्य', '2023'],
    },
    text: {
      en: 'Stories drawn from everyday life, family bonds and social questions, written in simple language that stays with the reader.',
      hi: 'रोज़मर्रा की ज़िंदगी, पारिवारिक रिश्तों और सामाजिक सवालों से निकली कहानियाँ, सरल भाषा में, जो पाठक के साथ रह जाती हैं।',
    },
    feats: {
      en: ['Social realism', 'Srishti Prakashan', 'Hindi short stories'],
      hi: ['सामाजिक यथार्थ', 'सृष्टि प्रकाशन', 'हिंदी कहानियाँ'],
    },
  },
  {
    slug: 'sapnon-ka-hona-zaroori-hai',
    img: IMG.c4,
    launchImg: sapnoLaunch,
    title: 'सपनों का होना जरूरी है',
    roman: 'Sapnon Ka Hona Zaroori Hai',
    year: '2023',
    publisher: PUB_SRISHTI,
    form: null, // genre is not documented in the project files
    tags: {
      en: ['Latest release', 'Srishti Prakashan'],
      hi: ['नवीनतम', 'सृष्टि प्रकाशन'],
    },
    text: {
      en: 'His most recent book. A reminder, in his dusk-lit imagery, that a life without dreams is an unfinished one.',
      hi: 'उनकी सबसे नई पुस्तक। साँझ के रंगों वाली छवियों में एक याद दिलाती है कि सपनों के बिना जीवन अधूरा है।',
    },
    feats: {
      en: ['Newest title', 'Srishti Prakashan'],
      hi: ['नवीनतम पुस्तक', 'सृष्टि प्रकाशन'],
    },
  },
  {
    slug: 'coming-soon',
    comingSoon: true,
    title: { en: 'Coming Soon', hi: 'जल्द आ रही है' },
    roman: { en: 'Fifth book in progress', hi: 'पाँचवीं पुस्तक पर काम जारी' },
    tags: { en: ['Coming soon'], hi: ['जल्द आ रही है'] },
    text: {
      en: 'The fifth book is in progress. Its title and cover will be announced soon.',
      hi: 'पाँचवीं पुस्तक पर काम चल रहा है। इसका शीर्षक और आवरण शीघ्र घोषित किया जाएगा।',
    },
    feats: {
      en: ['Fifth book in progress', 'Title and cover to be announced'],
      hi: ['पाँचवीं पुस्तक पर काम जारी', 'शीर्षक और आवरण की घोषणा शीघ्र'],
    },
  },
]

// ---------- Literary groups (only names and associations are documented in the project) ----------
export const GROUPS = [
  {
    slug: 'abhivyakti',
    name: { en: 'Abhivyakti', hi: 'अभिव्यक्ति' },
    initial: { en: 'A', hi: 'अ' },
    role: { en: 'Member', hi: 'सदस्य' },
    color: '#a77bf2',
  },
  {
    slug: 'manthan',
    name: { en: 'Manthan', hi: 'मंथन' },
    initial: { en: 'M', hi: 'म' },
    role: { en: 'Member', hi: 'सदस्य' },
    color: '#8b5cf6',
  },
  {
    slug: 'kidar-adabi-trust',
    name: { en: 'Kidar Adabi Trust', hi: 'किदर अदबी ट्रस्ट' },
    initial: { en: 'K', hi: 'कि' },
    role: { en: 'Member', hi: 'सदस्य' },
    color: '#7c6cf0',
  },
  {
    slug: 'haryana-sahitya-akademi',
    name: { en: 'Haryana Sahitya Akademi', hi: 'हरियाणा साहित्य अकादमी' },
    initial: { en: 'H', hi: 'ह' },
    role: {
      en: 'Book publication grant for his first collection (2013–2014)',
      hi: 'पहले संग्रह के लिए पुस्तक प्रकाशन अनुदान (2013–2014)',
    },
    color: '#f0a8f5',
  },
]

// ---------- About ----------
export const FEATURE_STYLE = [
  ['📖', '#a77bf2'],
  ['🎭', '#8b5cf6'],
  ['✍️', '#f0a8f5'],
  ['🏛️', '#7c6cf0'],
]

export const COMMUNITY = [
  { en: 'Abhivyakti', hi: 'अभिव्यक्ति' },
  { en: 'Manthan', hi: 'मंथन' },
  { en: 'Kidar Adabi Trust', hi: 'किदर अदबी ट्रस्ट' },
  { en: 'Haryana Sahitya Akademi', hi: 'हरियाणा साहित्य अकादमी' },
]

export const STAT_COLORS = ['#a77bf2', '#8b5cf6', '#7c6cf0']

// ---------- Craft panel on Home: cards left and right of the icon orbit (all facts from the project files) ----------
export const SKILLS = {
  left: [
    { icon: 'book', title: { en: 'Hindi Poetry', hi: 'हिंदी कविता' }, text: { en: 'Debut collection, 2014', hi: 'पहला संग्रह, 2014' } },
    { icon: 'quote', title: { en: 'Satire', hi: 'व्यंग्य' }, text: { en: 'Satirical novel, 2021', hi: 'व्यंग्य उपन्यास, 2021' } },
    { icon: 'pen', title: { en: 'Short Stories', hi: 'कहानियाँ' }, text: { en: 'Story collection, 2023', hi: 'कहानी संग्रह, 2023' } },
    { icon: 'file', title: { en: 'Articles', hi: 'लेख' }, text: { en: 'Magazines and journals', hi: 'पत्रिकाएँ और जर्नल' } },
  ],
  right: [
    { icon: 'globe', title: { en: 'Languages', hi: 'भाषाएँ' }, text: { en: 'Hindi, Khadi Boli, Punjabi', hi: 'हिंदी, खड़ी बोली, पंजाबी' } },
    { icon: 'calendar', title: { en: 'Event Organiser', hi: 'आयोजक' }, text: { en: '50+ events across the Tricity', hi: 'ट्राईसिटी में 50+ कार्यक्रम' } },
    { icon: 'mic', title: { en: 'Kavi Sammelans', hi: 'कवि सम्मेलन' }, text: { en: '100+ attended', hi: '100+ में सहभागिता' } },
    { icon: 'users', title: { en: 'Literary Circles', hi: 'साहित्यिक मंडलियाँ' }, text: { en: 'Abhivyakti, Manthan, Kidar Adabi Trust', hi: 'अभिव्यक्ति, मंथन, किदर अदबी ट्रस्ट' } },
  ],
}

// ---------- Journey: { period, heading, text } ----------
export const JOURNEY = [
  {
    period: { en: 'Today', hi: 'आज' },
    heading: { en: 'Punjab & Haryana High Court', hi: 'पंजाब एवं हरियाणा उच्च न्यायालय' },
    text: {
      en: 'Works in Chandigarh and writes in the hours around a working day, which is where most of his poems begin.',
      hi: 'चंडीगढ़ में कार्यरत हैं और कामकाजी दिन के आस-पास के घंटों में लिखते हैं, जहाँ से उनकी अधिकतर कविताएँ शुरू होती हैं।',
    },
  },
  {
    period: { en: '2013–2014', hi: '2013–2014' },
    heading: { en: 'First collection', hi: 'पहला संग्रह' },
    text: {
      en: 'Receives the Haryana Sahitya Akademi book publication grant and publishes Kabhi To Subah Aayegi.',
      hi: 'हरियाणा साहित्य अकादमी से पुस्तक प्रकाशन अनुदान मिला और "कभी तो सुबह आयेगी" प्रकाशित हुई।',
    },
  },
  {
    period: { en: '2021–2023', hi: '2021–2023' },
    heading: { en: 'Turn to prose', hi: 'गद्य की ओर' },
    text: {
      en: 'A satirical novel, then a collection of stories. His voice widens from verse to the fabric of society.',
      hi: 'पहले एक व्यंग्य उपन्यास, फिर कहानियों का संग्रह। उनकी आवाज़ कविता से समाज के ताने-बाने तक फैलती है।',
    },
  },
]

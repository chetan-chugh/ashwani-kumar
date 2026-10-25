import launch from './assets/launch.jpg'
import profile from './assets/profile.jpg'
import c1 from './assets/c1.jpg'
import c2 from './assets/c2.jpg'
import c3 from './assets/c3.jpg'
import c4 from './assets/c4.jpg'
import sapnoLaunch from './assets/sapno-launch.jpg'
import aadmiShwanLaunch from './assets/aadmi-shwan-launch.jpg'
import kabhiLaunch from './assets/kabhi-launch.jpg'
import aadhiUmarCover from './assets/aadhi-umar-poori-jawani.jpg'
import aadhiUmarLaunch from './assets/aadhi-umar-poori-jawani-launch.jpg'

export const IMG = { launch, profile, c1, c2, c3, c4, aadhiUmarCover }

// Bilingual values are { en, hi } pairs; read them with the useL() hook from i18n.jsx.

// ---------- Contact ----------
export const EMAIL = 'akm4967hc@gmail.com'
// NOTE: this is the generic Facebook address that was already in the project, not a personal profile.
export const FACEBOOK_URL = 'https://www.facebook.com/'
export const INSTAGRAM_URL = 'https://www.instagram.com/'
export const CAL_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kavi+Sammelan&dates=20261111/20261112&location=Library,+Sector+17,+Chandigarh'
export const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Library+Sector+17+Chandigarh'
export const EVENT_DATE = '2026-11-11T00:00:00'

// Each book can carry a `buyUrl` (its store page). While it is empty the Buy button opens an order email to the author.
// ---------- Books ----------
const PUB_SRISHTI = { en: 'Srishti Prakashan', hi: 'सृष्टि प्रकाशन' }

export const BOOKS = [
  {
    slug: 'kabhi-to-subah-aayegi',
    buyUrl: '',
    img: IMG.c1,
    launchImg: kabhiLaunch,
    title: 'कभी तो सुबह आयेगी',
    roman: 'Kabhi To Subah Aayegi',
    year: '2014',
    publisher: { en: 'Enkay Enterprises, Chandigarh', hi: 'एनके एंटरप्राइजेज, चंडीगढ़' },
    form: { en: 'Poetry collection', hi: 'काव्य संग्रह' },
    tags: {
      en: ['Debut', '2014'],
      hi: ['पहली पुस्तक', '2014'],
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
    buyUrl: '',
    img: IMG.c2,
    launchImg: aadmiShwanLaunch,
    title: 'आदमी, श्वान और राजनीति',
    roman: 'Aadmi, Shwan Aur Rajneeti',
    year: '2021',
    publisher: PUB_SRISHTI,
    form: { en: 'Humorous satirical novel', hi: 'हास्य व्यंग्य उपन्यास' },
    tags: {
      en: ['Satire', '2021'],
      hi: ['व्यंग्य', '2021'],
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
    buyUrl: '',
    img: IMG.c3,
    launchImg: IMG.launch,
    title: 'बहन कहती थी',
    roman: 'Bahan Kahti Thi',
    year: '2023',
    publisher: PUB_SRISHTI,
    form: { en: 'Story collection', hi: 'कहानी संग्रह' },
    tags: {
      en: ['Fiction', '2023'],
      hi: ['कथा साहित्य', '2023'],
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
    buyUrl: '',
    img: IMG.c4,
    launchImg: sapnoLaunch,
    title: 'सपनों का होना जरूरी है',
    roman: 'Sapnon Ka Hona Zaroori Hai',
    year: '2023',
    publisher: PUB_SRISHTI,
    form: { en: 'कविता संग्रह', hi: 'कविता संग्रह' },
    tags: {
      en: ['Poetry collection', 'Srishti Prakashan'],
      hi: ['कविता संग्रह', 'सृष्टि प्रकाशन'],
    },
    text: {
      en: 'A reminder, in his dusk-lit imagery, that a life without dreams is an unfinished one.',
      hi: 'साँझ के रंगों वाली छवियों में यह याद दिलाती है कि सपनों के बिना जीवन अधूरा है।',
    },
    feats: {
      en: ['Poetry collection', 'Srishti Prakashan'],
      hi: ['कविता संग्रह', 'सृष्टि प्रकाशन'],
    },
  },
  {
    slug: 'aadhi-umar-poori-jawani',
    buyUrl: '',
    img: aadhiUmarCover,
    launchImg: aadhiUmarLaunch,
    launchYear: '2026',
    year: '2026',
    title: 'आधी उम्र पूरी जवानी',
    roman: 'Aadhi Umar Poori Jawani',
    tags: {
      en: ['Fifth book'],
      hi: ['पाँचवीं पुस्तक'],
    },
    text: {
      en: 'A reflection on age and the youthful spirit that keeps life full of hope, dreams, and possibility.',
      hi: 'उम्र बढ़ने पर भी जवानी के उत्साह, उम्मीदों और सपनों को जीवित रखने वाली एक सोच।',
    },
    feats: {
      en: ["Fifth book by Ashwani Malhotra 'Bheem'"],
      hi: ['अश्वनी मल्होत्रा "भीम" की पाँचवीं पुस्तक'],
    },
  },
]

// ---------- Literary groups the author has joined (list and cities as supplied by the author) ----------
export const GROUPS = [
  {
    slug: 'abhivyakti',
    name: { en: 'Abhivyakti', hi: 'अभिव्यक्ति' },
    initial: { en: 'A', hi: 'अ' },
    place: { en: 'Chandigarh', hi: 'चंडीगढ़' },
    color: '#a77bf2',
  },
  {
    slug: 'manthan',
    name: { en: 'Manthan', hi: 'मंथन' },
    initial: { en: 'M', hi: 'म' },
    place: { en: 'Chandigarh', hi: 'चंडीगढ़' },
    color: '#d764f0',
  },
  {
    slug: 'kavya-kadam',
    name: { en: 'Kavya Kadam', hi: 'काव्य कदम' },
    initial: { en: 'K', hi: 'का' },
    place: { en: 'Panchkula', hi: 'पंचकूला' },
    color: '#7c6cf0',
  },
  {
    slug: 'kidar-adabi-trust',
    name: { en: 'Kidar Adabi Trust', hi: 'किदार अदबी ट्रस्ट' },
    initial: { en: 'K', hi: 'कि' },
    place: { en: 'Panchkula', hi: 'पंचकूला' },
    online: true,
    color: '#f0a8f5',
  },
  {
    slug: 'chandigarh-literary-society',
    name: { en: 'Chandigarh Literary Society (CLS)', hi: 'चंडीगढ़ लिटरेरी सोसाइटी (CLS)' },
    initial: { en: 'C', hi: 'चं' },
    place: { en: 'Chandigarh', hi: 'चंडीगढ़' },
    color: '#b79bf5',
  },
]

export const COMMUNITY = GROUPS.map(({ name }) => name)

// ---------- About ----------
export const FEATURE_STYLE = [
  ['📖', '#a77bf2'],
  ['🎭', '#8b5cf6'],
  ['✍️', '#f0a8f5'],
  ['🏛️', '#7c6cf0'],
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
    { icon: 'users', title: { en: 'Literary Groups', hi: 'साहित्यिक समूह' }, text: { en: '5 groups in Chandigarh, Panchkula and online', hi: '5 समूह: चंडीगढ़, पंचकूला और ऑनलाइन' } },
  ],
}

// ---------- Journey: { period, heading, text } ----------
export const JOURNEY = [
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
import { createContext, useContext, useEffect, useState } from 'react'

// ---------- Language state (English / Hindi) ----------
const LangContext = createContext({ lang: 'en', setLang: () => {} })

function readSaved() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'hi') return saved
  } catch {
    /* storage can be blocked; fall back to English */
  }
  return 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readSaved)

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = TEXT[lang].siteTitle
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

// Pick the right language from a { en, hi } pair
export function useL() {
  const { lang } = useLang()
  return (value) => (value && typeof value === 'object' && !Array.isArray(value) && 'en' in value ? value[lang] : value)
}

// UI strings
export function useT() {
  const { lang } = useLang()
  return TEXT[lang]
}

const TEXT = {
  en: {
    siteTitle: "Ashwani Malhotra 'Bheem' — Poet & Writer",
    nav: { home: 'Home', books: 'Books', groups: 'Literary Group', contact: 'Contact Us' },
    langName: 'हिंदी',
    langLabel: 'Switch to Hindi',
    menu: 'Menu',
    toTop: 'Go to top',
    brand: 'A',
    brandName: 'Ashwani',

    hero: {
      first: 'Ashwani',
      last: "Malhotra 'Bheem'",
      eyebrow: 'Poet & Writer',
      tags: [
        ['Writes', 'Hindi Poetry, Satire & Stories'],
        ['Publishes', 'Five Published Books'],
        ['Organises', '50+ Literary Events In The Tricity'],
        ['Shares', 'Verse At 100+ Kavi Sammelans'],
        ['Belongs', 'To Five Literary Groups'],
      ],
      intro:
        'I write Hindi poetry, satire and stories — from the first light of a poem to the last page of a book.',
      contactBtn: 'Contact Me',
      readBooks: 'Read my books',
      quote: 'Born in Kaithal, Haryana. Writing from Chandigarh.',
      badge: 'Kavi Sammelan · 11 Nov 2026',
      photoAlt: "Ashwani Malhotra 'Bheem'",
    },

    about: {
      eyebrow: 'About',
      title: 'About us',
      p1: ['I\'m ', "Ashwani Malhotra 'Bheem'", ', a Hindi poet and writer born in Kaithal, Haryana, now living in Chandigarh. I have published ', 'five books', '.'],
      p2: ['I write ', 'gentle verse, pointed satire', ' and stories about ordinary lives.'],
      p3: ['My work has been supported by the ', 'Haryana Sahitya Akademi', ', and I am part of five literary groups: Abhivyakti, Manthan, Kavya Kadam, Kidar Adabi Trust and Chandigarh Literary Society.'],
      features: [
        ['Poetry', 'Hindi verse on nature, hope and longing'],
        ['Satire', 'Humour aimed at power and politics'],
        ['Short stories', 'Everyday life and social questions'],
        ['Literary groups', 'Abhivyakti, Manthan, Kavya Kadam and more'],
      ],
    },

    events: {
      title: 'Events and literary achievements',
      sub: 'Organising and joining poetry gatherings across the Tricity and beyond.',
      upcoming: 'Upcoming event',
      today: 'Today',
      dayLeft: 'day to go',
      daysLeft: 'days to go',
      name: 'Kavi Sammelan',
      nameHi: '· कवि सम्मेलन',
      date: 'Date',
      dateValue: 'Wednesday, 11 November 2026',
      venue: 'Venue',
      venueValue: 'The Library, Sector 17, Chandigarh',
      desc: 'An evening where poets gather to share their poetry, voice their thoughts and celebrate literature. Everyone who loves words is welcome.',
      addCal: 'Add to calendar',
      directions: 'Get directions',
      month: 'Nov',
      stats: [
        { number: '50+', title: 'Events organised', text: 'Literary and cultural events managed across Chandigarh, Panchkula and Mohali.' },
        { number: '100+', title: 'Kavi Sammelans attended', text: 'Poetry gatherings where poets share verse, ideas and the joy of literature.' },
        { number: '3', title: 'Cities of the Tricity', text: 'Chandigarh, Panchkula and Mohali, home ground for his events.' },
      ],
      community: 'Community',
    },

    craft: {
      eyebrow: 'The craft',
      title: 'Craft I Bring To Every Book',
      sub: 'Poetry, satire, stories and events, all in one voice.',
    },

    journey: {
      eyebrow: 'Journey',
      title: 'Writing journey',
      sub: 'From Kaithal to Chandigarh, verse to prose.',
    },

    cta: {
      title: 'Planning a reading or a review?',
      text: "Send a note and I'll reply with the clearest next step.",
      books: 'Explore the books',
      contact: 'Start a conversation',
    },

    books: {
      eyebrow: 'Books',
      title: "Things I've written",
      sub: 'Poetry, satire and short fiction, in order of publication.',
      details: 'More Details →',
      comingSoon: 'Coming soon',
      comingSoonBtn: 'Details soon',
      coverOf: 'Cover of',
      back: '← All books',
      launchOf: 'Launch of',
      year: 'Publication year',
      publisher: 'Publisher',
      language: 'Language',
      languageValue: 'Hindi',
      format: 'Form',
      highlights: 'Highlights',
      about: 'About this book',
      launch: 'Book launch',
      info: 'Publication information',
      notFound: 'Book not found',
      notFoundText: 'That book does not exist.',
      prev: '← Previous',
      next: 'Next →',
      buy: 'Purchase this book',
      buySubject: 'Order request:',
      buyBody: 'Hello, I would like to buy this book. Please tell me how to order it.',
    },

    groups: {
      eyebrow: 'Literary Group',
      title: 'Literary groups & organisations',
      sub: "The literary communities and institutions Ashwani Malhotra 'Bheem' is associated with.",
      place: 'Location',
      online: 'Online',
      note: 'More details about this group will be added soon.',
    },

    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      sub: 'For readings, reviews, invitations or just to say hello.',
      email: 'Email',
      location: 'Location',
      locationValue: 'Chandigarh, India',
      facebook: 'Facebook',
      instagram: 'Instagram',
      form: 'Send a message',
      name: 'Name',
      emailField: 'Email address',
      subject: 'Subject',
      message: 'Message',
      phName: 'Your name',
      phEmail: 'you@example.com',
      phSubject: 'What is this about?',
      phMessage: 'Write your message here',
      send: 'Send message →',
      errName: 'Please enter your name.',
      errEmail: 'Please enter your email address.',
      errEmailBad: 'Please enter a valid email address.',
      errSubject: 'Please enter a subject.',
      errMessage: 'Please write a message.',
      errMessageShort: 'Please write at least 10 characters.',
      errorSummary: 'Please fix the highlighted fields.',
      opened:
        'Your email app should now open with the message ready. The message is only sent when you press Send there. If nothing opened, write to the address on this page.',
      mailFrom: 'From',
    },

    footer: {
      built: 'Built with care.',
      rights: 'All rights reserved.',
      tagline: 'Poet & Writer · Chandigarh',
      explore: 'Explore',
      reach: 'Reach me',
    },
  },

  hi: {
    siteTitle: 'अश्वनी मल्होत्रा "भीम" — कवि एवं लेखक',
    nav: { home: 'मुख्य पृष्ठ', books: 'पुस्तकें', groups: 'साहित्यिक समूह', contact: 'संपर्क करें' },
    langName: 'English',
    langLabel: 'अंग्रेज़ी में देखें',
    menu: 'मेन्यू',
    toTop: 'ऊपर जाएँ',
    brand: 'अ',
    brandName: 'अश्वनी',

    hero: {
      first: 'अश्वनी',
      last: 'मल्होत्रा "भीम"',
      eyebrow: 'कवि एवं लेखक',
      tags: [
        ['लिखते हैं', 'हिंदी कविता, व्यंग्य और कहानियाँ'],
        ['प्रकाशित की हैं', 'पाँच पुस्तकें'],
        ['आयोजित किए', 'ट्राईसिटी में 50+ साहित्यिक कार्यक्रम'],
        ['सुनाते हैं', '100+ कवि सम्मेलनों में कविता'],
        ['जुड़े हैं', 'पाँच साहित्यिक समूहों से'],
      ],
      intro:
        'मैं हिंदी कविता, व्यंग्य और कहानियाँ लिखता हूँ — एक कविता की पहली किरण से लेकर किताब के आख़िरी पन्ने तक।',
      contactBtn: 'संपर्क करें',
      readBooks: 'मेरी पुस्तकें पढ़ें',
      quote: 'हरियाणा के कैथल में जन्म। चंडीगढ़ से लेखन।',
      badge: 'कवि सम्मेलन · 11 नवंबर 2026',
      photoAlt: 'अश्वनी मल्होत्रा "भीम"',
    },

    about: {
      eyebrow: 'परिचय',
      title: 'हमारे बारे में',
      p1: ['मैं ', 'अश्वनी मल्होत्रा "भीम"', ' हूँ, हरियाणा के कैथल में जन्मा हिंदी कवि और लेखक, जो अब चंडीगढ़ में रहता हूँ। मेरी ', 'पाँच पुस्तकें', ' प्रकाशित हो चुकी हैं।'],
      p2: ['मैं ', 'कोमल कविताएँ, तीखा व्यंग्य', ' और आम ज़िंदगियों की कहानियाँ लिखता हूँ।'],
      p3: ['मेरे लेखन को ', 'हरियाणा साहित्य अकादमी', ' का सहयोग मिला है, और मैं पाँच साहित्यिक समूहों से जुड़ा हूँ: अभिव्यक्ति, मंथन, काव्य कदम, किदार अदबी ट्रस्ट और चंडीगढ़ लिटरेरी सोसाइटी।'],
      features: [
        ['कविता', 'प्रकृति, उम्मीद और विरह पर हिंदी काव्य'],
        ['व्यंग्य', 'सत्ता और राजनीति पर हास्य के तीर'],
        ['कहानियाँ', 'रोज़मर्रा की ज़िंदगी और सामाजिक सवाल'],
        ['साहित्यिक समूह', 'अभिव्यक्ति, मंथन, काव्य कदम और अन्य'],
      ],
    },

    events: {
      title: 'कार्यक्रम और साहित्यिक उपलब्धियाँ',
      sub: 'ट्राईसिटी और उससे आगे काव्य गोष्ठियों का आयोजन और उनमें सहभागिता।',
      upcoming: 'आगामी कार्यक्रम',
      today: 'आज',
      dayLeft: 'दिन शेष',
      daysLeft: 'दिन शेष',
      name: 'कवि सम्मेलन',
      nameHi: '· Kavi Sammelan',
      date: 'तिथि',
      dateValue: 'बुधवार, 11 नवंबर 2026',
      venue: 'स्थान',
      venueValue: 'द लाइब्रेरी, सेक्टर 17, चंडीगढ़',
      desc: 'एक शाम जहाँ कवि अपनी कविताएँ सुनाने, अपने विचार रखने और साहित्य का उत्सव मनाने के लिए जुटते हैं। शब्दों से प्रेम करने वाले हर व्यक्ति का स्वागत है।',
      addCal: 'कैलेंडर में जोड़ें',
      directions: 'रास्ता देखें',
      month: 'नव.',
      stats: [
        { number: '50+', title: 'आयोजित कार्यक्रम', text: 'चंडीगढ़, पंचकूला और मोहाली में प्रबंधित साहित्यिक और सांस्कृतिक कार्यक्रम।' },
        { number: '100+', title: 'कवि सम्मेलनों में सहभागिता', text: 'काव्य गोष्ठियाँ जहाँ कवि कविता, विचार और साहित्य का आनंद साझा करते हैं।' },
        { number: '3', title: 'ट्राईसिटी के शहर', text: 'चंडीगढ़, पंचकूला और मोहाली, उनके कार्यक्रमों की कर्मभूमि।' },
      ],
      community: 'समुदाय',
    },

    craft: {
      eyebrow: 'लेखन-शिल्प',
      title: 'हर पुस्तक में मेरा शिल्प',
      sub: 'कविता, व्यंग्य, कहानियाँ और आयोजन, एक ही स्वर में।',
    },

    journey: {
      eyebrow: 'यात्रा',
      title: 'लेखन यात्रा',
      sub: 'कैथल से चंडीगढ़ तक, कविता से गद्य तक।',
    },

    cta: {
      title: 'काव्य-पाठ या समीक्षा की योजना है?',
      text: 'एक संदेश भेजिए, मैं सबसे साफ़ अगला कदम बताते हुए उत्तर दूँगा।',
      books: 'पुस्तकें देखें',
      contact: 'बातचीत शुरू करें',
    },

    books: {
      eyebrow: 'पुस्तकें',
      title: 'जो कुछ मैंने लिखा है',
      sub: 'कविता, व्यंग्य और कहानियाँ, प्रकाशन क्रम में।',
      details: 'अधिक जानकारी →',
      comingSoon: 'जल्द आ रही है',
      comingSoonBtn: 'जानकारी शीघ्र',
      coverOf: 'आवरण:',
      back: '← सभी पुस्तकें',
      launchOf: 'विमोचन:',
      year: 'प्रकाशन वर्ष',
      publisher: 'प्रकाशक',
      language: 'भाषा',
      languageValue: 'हिंदी',
      format: 'विधा',
      highlights: 'मुख्य बातें',
      about: 'इस पुस्तक के बारे में',
      launch: 'पुस्तक विमोचन',
      info: 'प्रकाशन जानकारी',
      notFound: 'पुस्तक नहीं मिली',
      notFoundText: 'यह पुस्तक उपलब्ध नहीं है।',
      prev: '← पिछली',
      next: 'अगली →',
      buy: 'यह पुस्तक खरीदें',
      buySubject: 'पुस्तक ऑर्डर:',
      buyBody: 'नमस्ते, मैं यह पुस्तक खरीदना चाहता/चाहती हूँ। कृपया ऑर्डर करने का तरीका बताइए।',
    },

    groups: {
      eyebrow: 'साहित्यिक समूह',
      title: 'साहित्यिक समूह और संस्थाएँ',
      sub: 'वे साहित्यिक समुदाय और संस्थाएँ जिनसे अश्वनी मल्होत्रा "भीम" जुड़े हैं।',
      place: 'स्थान',
      online: 'ऑनलाइन',
      note: 'इस समूह की अधिक जानकारी शीघ्र जोड़ी जाएगी।',
    },

    contact: {
      eyebrow: 'संपर्क',
      title: 'आइए बात करें',
      sub: 'काव्य-पाठ, समीक्षा, निमंत्रण या बस नमस्ते कहने के लिए।',
      email: 'ईमेल',
      location: 'स्थान',
      locationValue: 'चंडीगढ़, भारत',
      facebook: 'फ़ेसबुक',
      instagram: 'इंस्टाग्राम',
      form: 'संदेश भेजें',
      name: 'नाम',
      emailField: 'ईमेल पता',
      subject: 'विषय',
      message: 'संदेश',
      phName: 'आपका नाम',
      phEmail: 'you@example.com',
      phSubject: 'यह किस बारे में है?',
      phMessage: 'अपना संदेश यहाँ लिखें',
      send: 'संदेश भेजें →',
      errName: 'कृपया अपना नाम लिखें।',
      errEmail: 'कृपया अपना ईमेल पता लिखें।',
      errEmailBad: 'कृपया सही ईमेल पता लिखें।',
      errSubject: 'कृपया विषय लिखें।',
      errMessage: 'कृपया संदेश लिखें।',
      errMessageShort: 'कृपया कम से कम 10 अक्षर लिखें।',
      errorSummary: 'कृपया चिह्नित फ़ील्ड ठीक करें।',
      opened:
        'आपका ईमेल ऐप अब संदेश के साथ खुलना चाहिए। संदेश तभी भेजा जाता है जब आप वहाँ "Send" दबाते हैं। कुछ न खुले तो इस पृष्ठ के पते पर सीधे लिखें।',
      mailFrom: 'प्रेषक',
    },

    footer: {
      built: 'लगन से बनाया गया।',
      rights: 'सर्वाधिकार सुरक्षित।',
      tagline: 'कवि एवं लेखक · चंडीगढ़',
      explore: 'देखें',
      reach: 'संपर्क',
    },
  },
}
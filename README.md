# Ashwani Kumar 'Bheem' — Portfolio

React 18 + Vite 5 + Tailwind CSS 3. Four pages (Home, Books with detail pages, Literary Group, Contact Us), English and Hindi.

## Run

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # production build into dist/
npm run preview  # serve the build
```

## Structure

- `src/data.js` — books, groups, contact details, craft items (edit content here)
- `src/i18n.jsx` — English and Hindi text, language switch
- `src/router.jsx` — small hash router (works on any static host)
- `src/pages/` — Home, BooksPage, GroupsPage, ContactPage
- `src/components/` — Navbar, Hero, About, Events, Craft, BookCard, BookDetails, GroupCard, Contact, SideRail, Footer, ui
- `tailwind.config.js` — theme colours and fonts

## Notes

- The contact form opens the visitor's email app; there is no backend. To send directly, connect a service such as Formspree or EmailJS in `src/components/Contact.jsx`.
- `FACEBOOK_URL` in `src/data.js` is a generic placeholder; replace it with the real profile.

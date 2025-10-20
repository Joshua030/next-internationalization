# Next.js 14 i18n (EN/ES) with Language Switcher

- Sub-path locales: `/en/*`, `/es/*`
- Auto-detects on `/` via middleware (cookie `NEXT_LOCALE` or `Accept-Language`)
- Hydration-safe `<html lang>` updates using a small client component
- Language switcher that sets cookie and navigates
- Simple JSON dictionaries in `/locales/{en,es}/common.json`

## Run
```bash
npm install
npm run dev
```

Open http://localhost:3000 → redirects to `/en` or `/es`.

Edit translations in:
- `locales/en/common.json`
- `locales/es/common.json`

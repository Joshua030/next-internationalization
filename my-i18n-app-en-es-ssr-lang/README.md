# Next.js 14 i18n (EN/ES) — **SSR `<html lang>`**

This version uses **multiple root layouts** (one per locale) so the `<html lang>` is set **on the server** for each locale. No client patching needed — great for **SEO** and **accessibility**.

- Routes: `/en/*` and `/es/*`
- Middleware redirects `/` to the right locale (cookie or `Accept-Language`)
- Server-side dictionaries (JSON) loaded per page
- Language switcher persists cookie and navigates
- `metadata.alternates.languages` set for both locales

## Run
```bash
npm install
npm run dev
```

Visit `/` → redirects to `/en` or `/es`.
View page source: you'll see `<html lang="en">` or `<html lang="es">` **server-rendered**.

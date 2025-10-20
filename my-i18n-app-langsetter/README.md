# my-i18n-app (lang setter)

This version updates the `<html lang>` and `dir` attributes **without** hydration errors by:
- Keeping a stable `<html lang="en" suppressHydrationWarning>` in the root layout.
- Using a small client component in `app/[locale]/layout.tsx` to set `document.documentElement.lang` (and `dir`) on navigation.

## Run
```bash
npm install
npm run dev
```

Visit `/` → middleware redirects to `/{locale}`. Navigate between `/en`, `/de`, `/fr` and the `<html lang>` attribute will update accordingly.

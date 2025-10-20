'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';

const SUPPORTED = ['en','es'] as const;
type Supported = typeof SUPPORTED[number];

function stripLocalePrefix(pathname: string): string {
  const m = pathname.match(/^\/(en|es)(\/|$)(.*)$/);
  if (m) {
    const rest = m[3] ? `/${m[3]}` : '/';
    return rest === '//' ? '/' : rest;
  }
  return pathname;
}

export default function LanguageSwitcher({ current, label }: { current: Supported, label: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState<Supported>(current);

  async function setLocaleCookie(nextLocale: Supported) {
    await fetch('/api/set-locale', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ locale: nextLocale })
    }).catch(() => {});
  }

  function onChange(nextLocale: Supported) {
    setLocale(nextLocale);
    const base = stripLocalePrefix(pathname || '/');
    const nextPath = `/${nextLocale}${base}${searchParams?.toString() ? `?${searchParams}` : ''}`;
    startTransition(() => {
      setLocaleCookie(nextLocale).finally(() => {
        router.push(nextPath);
      });
    });
  }

  return (
    <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
      <label htmlFor="lang">{label}</label>
      <select
        id="lang"
        value={locale}
        onChange={(e) => onChange(e.target.value as Supported)}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

'use client';

import { useEffect } from 'react';

export default function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    const dir = ['ar', 'he', 'fa', 'ur'].includes(locale) ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('dir', dir);
  }, [locale]);

  return null;
}

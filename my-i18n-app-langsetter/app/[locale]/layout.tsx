import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import HtmlLang from '@/components/HtmlLang';

const SUPPORTED = ['en', 'de', 'fr'] as const;

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!SUPPORTED.includes(locale as any)) {
    notFound();
  }

  return (
    <section data-locale-wrapper>
      {/* This updates <html lang> and dir on navigation without hydration errors */}
      <HtmlLang locale={locale} />
      {children}
    </section>
  );
}

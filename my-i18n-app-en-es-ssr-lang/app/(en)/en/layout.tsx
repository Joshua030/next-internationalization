import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getDict } from '@/lib/i18n';
import type { ReactNode } from 'react';

export const metadata = {
  alternates: {
    languages: {
      en: '/en',
      es: '/es',
    },
  },
};

export default async function EnRootLayout({ children }: { children: ReactNode }) {
  // Load dict to SSR switcher label
  const dict = await getDict('en');

  return (
    <html lang="en">
      <body>
        <div style={{ padding: 16 }}>
          <LanguageSwitcher current="en" label={dict['language_label']} />
        </div>
        {children}
      </body>
    </html>
  );
}

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

export default async function EsRootLayout({ children }: { children: ReactNode }) {
  const dict = await getDict('es');

  return (
    <html lang="es">
      <body>
        <div style={{ padding: 16 }}>
          <LanguageSwitcher current="es" label={dict['language_label']} />
        </div>
        {children}
      </body>
    </html>
  );
}

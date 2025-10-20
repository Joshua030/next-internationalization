import { getDict, type Supported } from '@/lib/i18n';

export default async function Home({ locale }: { locale: Supported }) {
  const dict = await getDict(locale);
  return (
    <main>
      <h1>{dict['home_title']} ({locale})</h1>
      <p>{dict['home_welcome']}</p>
      <p>{dict['home_try']}</p>
    </main>
  );
}

import { getDict, type Supported } from '@/lib/i18n';

export default async function Home({ params }: { params: { locale: Supported } }) {
  const dict = await getDict(params.locale);
  return (
    <main>
      <h1>{dict['home_title']} ({params.locale})</h1>
      <p>{dict['home_welcome']}</p>
      <p>{dict['home_try']}</p>
    </main>
  );
}

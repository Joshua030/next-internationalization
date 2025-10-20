import { getDict, type Supported } from '@/lib/i18n';

export default async function About({ locale }: { locale: Supported }) {
  const dict = await getDict(locale);
  return (
    <main>
      <h1>{dict['about_title']} ({locale})</h1>
      <p>{dict['about_content']}</p>
    </main>
  );
}

import { getDict, type Supported } from '@/lib/i18n';

export default async function Blog({ locale }: { locale: Supported }) {
  const dict = await getDict(locale);
  return (
    <main>
      <h1>{dict['blog_title']} ({locale})</h1>
      <p>{dict['blog_content']}</p>
    </main>
  );
}

import { getDict, type Supported } from '@/lib/i18n';

export default async function Blog({ params }: { params: { locale: Supported } }) {
  const dict = await getDict(params.locale);
  return (
    <main>
      <h1>{dict['blog_title']} ({params.locale})</h1>
      <p>{dict['blog_content']}</p>
    </main>
  );
}

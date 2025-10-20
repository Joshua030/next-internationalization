export default function Home({ params }: { params: { locale: string } }) {
  return (
    <main>
      <h1>Home ({params.locale})</h1>
      <p>Welcome! This is the localized home page.</p>
      <p>Try /en/about or /en/blog</p>
    </main>
  );
}

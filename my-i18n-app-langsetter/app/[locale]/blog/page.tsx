export default function Blog({ params }: { params: { locale: string } }) {
  return (
    <main>
      <h1>Blog ({params.locale})</h1>
      <p>Blog index per locale.</p>
    </main>
  );
}

export default function About({ params }: { params: { locale: string } }) {
  return (
    <main>
      <h1>About ({params.locale})</h1>
      <p>About page content per locale.</p>
    </main>
  );
}

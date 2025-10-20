import { getDict, type Supported } from "@/lib/i18n";

export default async function About({
  params,
}: {
  params: { locale: Supported };
}) {
  const dict = await getDict(params.locale);
  return (
    <main>
      <h1>
        {dict["about_title"]} ({params.locale})
      </h1>
      <p>{dict["about_content"]}</p>
    </main>
  );
}

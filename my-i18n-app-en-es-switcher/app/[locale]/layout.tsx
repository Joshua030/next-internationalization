import { ReactNode } from "react";
import { notFound } from "next/navigation";
import HtmlLang from "@/components/HtmlLang";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDict, type Supported } from "@/lib/i18n";

const SUPPORTED: Supported[] = ["en", "es"];

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Supported };
}) {
  const { locale } = params;
  if (!SUPPORTED.includes(locale)) {
    notFound();
  }

  // Load dict once here if you want to pass down via context/provider later.
  // For simplicity we just keep pages loading their own, but HtmlLang + switcher live here.
  await getDict(locale);

  return (
    <section style={{ padding: 16 }}>
      <HtmlLang locale={locale} />
      <div style={{ marginBottom: 16 }}>
        <LanguageSwitcher current={locale} />
      </div>
      {children}
    </section>
  );
}

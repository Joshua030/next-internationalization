// app/layout.tsx
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = cookies().get("NEXT_LOCALE")?.value ?? "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

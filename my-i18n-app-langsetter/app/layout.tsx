export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Keep this stable on first paint; we'll update lang/dir with a client component.
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

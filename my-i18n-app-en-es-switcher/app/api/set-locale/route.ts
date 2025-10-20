import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { locale } = await req.json();
  const res = NextResponse.json({ ok: true });
  if (typeof locale === 'string') {
    res.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  }
  return res;
}

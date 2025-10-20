import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED = ['en', 'es'] as const;
type Supported = (typeof SUPPORTED)[number];

function pickSupportedLocaleFromHeader(header: string | null): Supported {
  if (!header) return 'en';
  const langs = header.split(',').map((part) => part.split(';')[0]?.trim().toLowerCase());
  for (const raw of langs) {
    if (!raw) continue;
    const base = raw.split('-')[0];
    if ((SUPPORTED as readonly string[]).includes(raw)) return raw as Supported;
    if ((SUPPORTED as readonly string[]).includes(base)) return base as Supported;
  }
  return 'en';
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocalePrefix = /^\/(en|es)(\/|$)/.test(pathname);
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value as Supported | undefined;
  const headerLocale = pickSupportedLocaleFromHeader(req.headers.get('accept-language'));
  const chosen = (cookieLocale && (SUPPORTED as readonly string[]).includes(cookieLocale)) ? cookieLocale : headerLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${chosen}${pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\..*).*)'],
};

import { NextResponse, type NextRequest } from 'next/server';

import { defaultLocale, isValidLocale } from '@/i18n/config';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = pathname
    .split('/')
    .filter(Boolean)
    .some((segment) => isValidLocale(segment));

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};

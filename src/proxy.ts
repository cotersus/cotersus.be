import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isValidLocale, type AppLocale } from '@/i18n/config';

function getPreferredLocale(acceptLanguageHeader: string | null): AppLocale {
  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const languagePreferences = acceptLanguageHeader
    .split(',')
    .map((entry) => {
      const [rawTag, rawQuality] = entry.trim().split(';q=');
      const quality = Number.parseFloat(rawQuality ?? '1');

      return {
        tag: rawTag.toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const preference of languagePreferences) {
    if (isValidLocale(preference.tag)) {
      return preference.tag;
    }

    const baseTag = preference.tag.split('-')[0];
    if (isValidLocale(baseTag)) {
      return baseTag;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = pathname
    .split('/')
    .filter(Boolean)
    .some((segment) => isValidLocale(segment));

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const preferredLocale = getPreferredLocale(request.headers.get('accept-language'));
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};

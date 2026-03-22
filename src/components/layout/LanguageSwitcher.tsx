'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type AppLocale } from '@/i18n/config';

const localeLabels: Record<AppLocale, string> = {
  en: 'EN',
  nl: 'NL',
  fr: 'FR',
};

interface LanguageSwitcherProps {
  currentLang: AppLocale;
}

function replaceLocaleInPath(pathname: string, nextLocale: AppLocale) {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (locales.includes(segments[0] as AppLocale)) {
    segments[0] = nextLocale;
    return `/${segments.join('/')}`;
  }

  return `/${nextLocale}/${segments.join('/')}`;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? '/';

  return (
    <nav aria-label="Language selector" className="inline-flex items-center gap-1">
      {locales.map((locale) => {
        const isActive = locale === currentLang;
        const href = replaceLocaleInPath(pathname, locale);

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-full border px-2.5 py-1 text-[0.67rem] font-semibold tracking-[0.12em] transition-colors sm:px-3 sm:text-[0.7rem] ${
              isActive
                ? 'border-primary/60 bg-primary/15 text-foreground'
                : 'border-border/80 text-muted-foreground hover:border-primary/40 hover:text-foreground'
            }`}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}

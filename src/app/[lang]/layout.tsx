import '../globals.css';
import { Fjalla_One, Montserrat, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { defaultLocale, isValidLocale, locales } from '@/i18n/config';

const fjalla = Fjalla_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fjalla',
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const getOriginUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  return 'https://www.cotersus.be';
};

const origin = getOriginUrl();

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);
  const localizedUrl = `${origin}/${lang}`;
  const languageAlternates = Object.fromEntries(
    locales.map((locale) => [locale, `${origin}/${locale}`]),
  );

  return {
    metadataBase: new URL(origin),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: [...dictionary.metadata.keywords],
    authors: [{ name: dictionary.metadata.openGraph.siteName }],
    creator: dictionary.metadata.openGraph.siteName,
    publisher: dictionary.metadata.openGraph.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: '/icon-192.png',
    },
    alternates: {
      canonical: localizedUrl,
      languages: {
        ...languageAlternates,
        'x-default': `${origin}/${defaultLocale}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: dictionary.metadata.openGraph.locale,
      url: localizedUrl,
      siteName: dictionary.metadata.openGraph.siteName,
      title: dictionary.metadata.openGraph.title,
      description: dictionary.metadata.openGraph.description,
      images: [
        {
          url: '/logo-og.png',
          width: 466,
          height: 508,
          alt: dictionary.metadata.openGraph.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.metadata.twitter.title,
      description: dictionary.metadata.twitter.description,
      creator: dictionary.metadata.twitter.creator,
      site: dictionary.metadata.twitter.site,
      images: ['/logo-og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: '',
    },
  };
}

export default async function RootLayout({ children, params }: Readonly<LayoutProps>) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: dictionary.metadata.jsonLd.organizationName,
    url: origin,
    logo: `${origin}/logo-og.png`,
    description: dictionary.metadata.jsonLd.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: dictionary.metadata.jsonLd.streetAddress,
      addressLocality: dictionary.metadata.jsonLd.locality,
      postalCode: dictionary.metadata.jsonLd.postalCode,
      addressCountry: dictionary.metadata.jsonLd.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@cotersus.be',
      contactType: dictionary.metadata.jsonLd.contactType,
      availableLanguage: dictionary.metadata.jsonLd.availableLanguage,
    },
    sameAs: [
      'https://bsky.app/profile/cotersus.be',
      'https://x.com/CotersusIT',
      'https://www.linkedin.com/company/88920103',
    ],
  };

  return (
    <html
      lang={lang}
      className={`${fjalla.variable} ${montserrat.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="transition-colors duration-300">
        <div className="flex min-h-screen flex-col">
          <Header lang={lang} content={dictionary.header} />
          {children}
          <Footer lang={lang} content={dictionary.footer} />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

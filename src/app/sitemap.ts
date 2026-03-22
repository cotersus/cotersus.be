import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

// Determine the base URL based on the environment
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://www.cotersus.be';
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  return locales.flatMap((locale) => {
    const localePath = `${baseUrl}/${locale}`;

    return [
      {
        url: localePath,
        lastModified,
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${localePath}/privacy`,
        lastModified,
        changeFrequency: 'yearly',
        priority: 0.3,
      },
    ];
  });
}

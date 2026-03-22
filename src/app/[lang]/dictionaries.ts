import 'server-only';

import type { AppLocale } from '@/i18n/config';
import enDictionary from './dictionaries/en';

export type Dictionary = typeof enDictionary;

const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
} satisfies Record<AppLocale, () => Promise<Dictionary>>;

export async function getDictionary(locale: AppLocale) {
  return dictionaries[locale]();
}

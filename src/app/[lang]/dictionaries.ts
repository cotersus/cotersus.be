import 'server-only';
import type { AppLocale } from '@/i18n/config';
import enDictionary from './dictionaries/en';

type WidenLiterals<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer Item)[]
        ? readonly WidenLiterals<Item>[]
        : T extends object
          ? { [Key in keyof T]: WidenLiterals<T[Key]> }
          : T;

export type Dictionary = WidenLiterals<typeof enDictionary>;

const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
  nl: () => import('./dictionaries/nl').then((module) => module.default),
  fr: () => import('./dictionaries/fr').then((module) => module.default),
} satisfies Record<AppLocale, () => Promise<Dictionary>>;

export async function getDictionary(locale: AppLocale) {
  return dictionaries[locale]();
}

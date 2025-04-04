import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ar', 'de', 'en', 'fr', 'ru', 'tr', 'uz', 'es', 'bn', 'id', 'ur'],
  // The default locale to use when no locale is provided

  // Used when no locale matches
  defaultLocale: 'tr',
});

import type { MetadataRoute } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations();
  return {
    name: t('Meta.title'),
    short_name: 'SK',
    description: t('Meta.description'),
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ec680e',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { env } from '@/utils/env';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Blog.GenclikMerkezimiz',
  });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  const imageData = {
    images: [
      { url: env.SITE_URL + '/images/blog/genclik-merkezi-816x544.jpg' },
    ],
  };

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata,
      url: new URL(`/blog/dava-okulu`, env.SITE_URL).toString(),
      ...imageData,
    },
    twitter: {
      ...baseMetadata,
      card: 'summary_large_image',
      ...imageData,
    },
  };
}

export default function Page() {
  const t = useTranslations('Blog.GenclikMerkezimiz');
  return <>{t('Meta.Title')}</>;
}

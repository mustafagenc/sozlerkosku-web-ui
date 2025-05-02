import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { ReturnToHomeButton } from '@/components/shared/return-to-home-button';
import { env } from '@/utils/env';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog.RoportajEkibi' });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  const imageData = {
    images: [{ url: env.SITE_URL + '/images/blog/roportaj-ekibi.jpg' }],
  };

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata,
      url: new URL(`/blog/roportaj-ekibi`, env.SITE_URL).toString(),
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
  const t = useTranslations('Blog');
  return (
    <section className="px-3 max-w-7xl py-10 grow mx-auto antialiased min-h-screen">
      <Image
        src={'/images/blog/roportaj-ekibi.jpg'}
        alt="Dava Okulu"
        width={816}
        height={544}
        className="rounded-3xl w-full h-150 object-cover object-top shadow-xs"
      />
      <div className="flex flex-col justify-center items-start w-full bg-white rounded-3xl dark:bg-gray-950/60 p-10 mt-10 mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
          {t('RoportajEkibi.Title')}
        </h2>
        <p className="my-10 text-xl">
          {t.rich('RoportajEkibi.Paragraph1', {})}
        </p>
        <p className="mb-10 text-xl">
          {t.rich('RoportajEkibi.Paragraph2', {})}
        </p>
        <p className="text-xl">{t.rich('RoportajEkibi.Paragraph3', {})}</p>
      </div>
      <ReturnToHomeButton />
    </section>
  );
}

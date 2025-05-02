import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { HorizontalLine } from '@/components/shared/horizontal-line';
import { ReturnToHomeButton } from '@/components/shared/return-to-home-button';
import { DAVA_OKULU_URL } from '@/utils/constants';
import { env } from '@/utils/env';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog.DavaOkulu' });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  const imageData = {
    images: [{ url: env.SITE_URL + '/images/blog/dava-okulu.jpg' }],
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
  const t = useTranslations('Blog');
  return (
    <section className="px-3 max-w-7xl py-10 grow mx-auto antialiased min-h-screen">
      <Image
        src={'/images/blog/dava-okulu.jpg'}
        alt="Dava Okulu"
        width={816}
        height={544}
        className="rounded-3xl w-full h-180 object-cover object-top shadow-xs"
      />
      <div className="flex flex-col justify-center items-start w-full bg-white rounded-3xl dark:bg-gray-950/60 p-10 mt-10 mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
          {t('DavaOkulu.Title')}
        </h2>
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('DavaOkulu.SubTitle1')}
        </h3>
        <p className="my-5 text-xl">{t.rich('DavaOkulu.Paragraph1', {})}</p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('DavaOkulu.SubTitle2')}
        </h3>
        <p className="my-5 text-xl">{t.rich('RoportajEkibi.Paragraph2', {})}</p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('DavaOkulu.SubTitle3')}
        </h3>
        <p className="my-5 text-xl">{t.rich('DavaOkulu.Paragraph3', {})}</p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('DavaOkulu.SubTitle4')}
        </h3>
        <p className="my-5 text-xl">{t.rich('DavaOkulu.Paragraph4', {})}</p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('DavaOkulu.SubTitle5')}
        </h3>
        <p className="my-5 text-xl">{t.rich('DavaOkulu.Paragraph5', {})}</p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('DavaOkulu.SubTitle6')}
        </h3>
        <p className="my-5 text-xl">
          {t.rich('DavaOkulu.Paragraph6', {
            Link: (chunks) => {
              return (
                <a
                  href={DAVA_OKULU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                >
                  {chunks}
                </a>
              );
            },
          })}
        </p>
      </div>
      <ReturnToHomeButton />
    </section>
  );
}

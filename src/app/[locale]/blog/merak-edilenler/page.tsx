import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { HorizontalLine } from '@/components/shared/horizontal-line';
import { ReturnToHomeButton } from '@/components/shared/return-to-home-button';
import { env } from '@/utils/env';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog.MerakEdilenler' });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  const imageData = {
    images: [{ url: env.SITE_URL + '/images/blog/metak-edilenler.jpg' }],
  };

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata,
      url: new URL(`/blog/merak-edilenler`, env.SITE_URL).toString(),
      ...imageData,
    },
    twitter: {
      ...baseMetadata,
      card: 'summary_large_image',
      ...imageData,
    },
  };
}

const questions = [...Array(34)];

export default function Page() {
  const t = useTranslations('Blog');
  return (
    <section className="px-3 max-w-7xl py-10 grow mx-auto antialiased min-h-screen">
      <Image
        src={'/images/blog/metak-edilenler.jpg'}
        alt="Dava Okulu"
        width={816}
        height={544}
        className="rounded-3xl w-full h-180 object-cover object-top shadow-xs"
      />
      <div className="flex flex-col justify-center items-start w-full bg-white rounded-3xl dark:bg-gray-950/60 p-10 mt-10 mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
          {t('MerakEdilenler.Title')}
        </h2>
        {questions.map((_, index) => {
          return (
            <div key={index} className="w-full">
              <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
                {t(`MerakEdilenler.Question${index + 1}`)}
              </h3>
              <p className="my-5 text-xl">
                {t.rich(`MerakEdilenler.Answer${index + 1}`, {
                  BR: () => <br />,
                })}
              </p>
              <HorizontalLine />
            </div>
          );
        })}
      </div>
      <ReturnToHomeButton />
    </section>
  );
}

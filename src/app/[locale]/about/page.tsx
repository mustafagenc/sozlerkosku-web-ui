import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { locales } from '@/utils/constants';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  return {
    ...baseMetadata,
  };
}

export default function Page() {
  const t = useTranslations();
  return (
    <>
      <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-4xl mb-30 text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
              {t('About.Title')}
            </h1>
          </div>
          <div className="max-w-7xl flex flex-col lg:flex-row justify-start gap-20 mb-30">
            <div className="flex flex-col basis-2/4 justify-start">
              <h1 className="mb-4 text-5xl font-bold dark:text-gray-200">
                {t('About.SubTitle1')}
              </h1>
              <p className="text-2xl dark:text-gray-200">
                {t.rich('About.SubTitle1Description', {
                  br: () => <br />,
                  b: (chunks) => <b className="text-orange-500">{chunks}</b>,
                })}
              </p>
            </div>
            <div className="flex-none basis-2/4 order-first lg:order-last">
              <Image
                src="/images/m5a0143-1256x837.jpg"
                alt="Intro"
                width={400}
                height={400}
                className="rounded-3xl object-cover w-full lg:h-100 shadow"
                priority
              />
            </div>
          </div>
          <div className="max-w-7xl flex flex-col lg:flex-row justify-start gap-20">
            <div className="flex flex-col basis-2/4 justify-start">
              <h1 className="mb-4 text-5xl font-bold dark:text-gray-200">
                {t('About.SubTitle2')}
              </h1>
              <p className="text-2xl dark:text-gray-200">
                {t.rich('About.SubTitle2Description', {
                  br: () => <br />,
                  b: (chunks) => <b className="text-orange-500">{chunks}</b>,
                })}
              </p>
            </div>
            <div className="flex-none basis-2/4 order-first">
              <Image
                src="/images/sozler-kosku-video-800x600.jpg"
                alt="Intro"
                width={400}
                height={400}
                className="rounded-3xl object-cover w-full lg:h-100 shadow"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 px-3 py-20">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-7xl flex flex-col lg:flex-row justify-start gap-20">
            <div className="flex flex-col basis-3/4 justify-start">
              <h1 className="mb-10 text-6xl font-bold dark:text-gray-200">
                {t('About.SubTitle3')}
              </h1>
              {t.rich('About.SubTitle3Description', {
                p: (chunks) => (
                  <p className="text-2xl dark:text-gray-200 mb-5">{chunks}</p>
                ),
              })}
            </div>
            <div className="flex-none basis-1/4 order-last">
              <Card className="rounded-3xl border-1 dark:border-1 bg-orange-400 dark:bg-orange-400 text-white">
                <CardContent className="flex flex-col items-start gap-3 pt-6">
                  <ol className="list-inside list-decimal">
                    {locales.map((locale) => (
                      <li key={locale.id} className="font-semibold">
                        {t('Languages.' + locale.id)}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

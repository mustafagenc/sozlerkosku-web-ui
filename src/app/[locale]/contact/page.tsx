import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Contact } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { env } from '@/utils/env';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  const baseMetadata = {
    title: t('Meta.title'),
  };

  const imageData = {
    images: [{ url: env.SITE_URL + '/images/sozler-kosku-video-800x600.jpg' }],
  };

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata,
      url: new URL(`/contact`, env.SITE_URL).toString(),
      ...imageData,
    },
    twitter: {
      ...baseMetadata,
      card: 'summary_large_image',
      ...imageData,
    },
  };
}

export default async function Page() {
  const t = await getTranslations();
  return (
    <>
      <section className="px-3 max-w-7xl py-20 grow mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-4xl mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
              {t('Contact.Title')}
            </h1>
          </div>
          <Contact />
        </div>
      </section>
      <ContactInfo />
    </>
  );
}

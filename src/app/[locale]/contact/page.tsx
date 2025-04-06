import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { ContactForm } from '@/components/contact/contact-form';
import { Contact } from '@/components/contact/contact-info';

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

  return {
    ...baseMetadata,
  };
}

export default function Page() {
  const t = useTranslations();
  return (
    <>
      <section className="px-3 max-w-7xl py-20 grow mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-4xl mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
              {t('Contact.Title')}
            </h1>
          </div>
          <ContactForm />
        </div>
      </section>
      <Contact />
    </>
  );
}

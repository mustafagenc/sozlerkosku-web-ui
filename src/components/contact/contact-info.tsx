import { getLocale, getTranslations } from 'next-intl/server';

import { Card, CardContent } from '@/components/ui/card';
import { CONTACT_DATA } from '@/utils/constants';

export const ContactInfo = async () => {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <section className="bg-white dark:bg-gray-900 px-3 py-20">
      <div className=" max-w-7xl px-3 grow mx-auto antialiased flex flex-row justify-start gap-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="rounded-3xl border-1 dark:border">
            <CardContent className="flex flex-col items-start gap-3 pt-6 md:pt-8">
              <h5 className="text-3xl font-bold">{t('Meta.title')}</h5>
              <p className="text-foreground">
                {t('Shared.phone')}:{' '}
                <a
                  href={`tel:${CONTACT_DATA.phone}`}
                  className="text-orange-400"
                >
                  {CONTACT_DATA.phone}
                </a>
              </p>
              <p className="text-foreground">
                {t('Shared.email')}:{' '}
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="text-orange-400"
                >
                  {CONTACT_DATA.email}
                </a>
              </p>
              <p className="text-foreground"> {CONTACT_DATA.address}</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-1 dark:border">
            <CardContent className="p-0 m-0">
              <iframe
                className="w-full h-50 rounded-3xl"
                title={t('Contact.Title')}
                src={`${CONTACT_DATA.googlemap}&hl=${locale}`}
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

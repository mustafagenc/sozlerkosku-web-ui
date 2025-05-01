import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  return {
    ...baseMetadata,
  };
}

export default function Page() {
  const t = useTranslations('PrivacyPolicy');
  return (
    <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased min-h-screen">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full lg:max-w-4xl mb-30 text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
            {t('Title')}
          </h1>
          <p className="text-lg mt-4 text-gray-500 dark:text-gray-400">
            {t('Description')}
          </p>
        </div>
        <div className="w-full lg:max-w-4xl mb-6">
          <h2 className="text-2xl font-semibold dark:text-gray-200">
            {t('CollectedPersonalDataTitle')}
          </h2>
          <p className="w-full lg:max-w-4xl text-lg mt-4 text-gray-500 dark:text-gray-400">
            {t('CollectedPersonalDataDescription')}
          </p>
        </div>
        <div className="w-full lg:max-w-4xl mb-6">
          <h2 className="text-2xl font-semibold dark:text-gray-200">
            {t('PurposesUsingPersonalData')}
          </h2>
          <p className="w-full lg:max-w-4xltext-lg mt-4 text-gray-500 dark:text-gray-400">
            {t('PurposesUsingPersonalDataDescription')}
          </p>
          <ul className="w-full lg:max-w-4xl text-gray-500 dark:text-gray-400 mt-6 list-disc list-inside">
            {t.rich('PurposesUsingPersonalDataDescriptionList', {
              list: (chunks) => <li className="mb-2">{chunks}</li>,
            })}
          </ul>
        </div>
        <div className="w-4xl mb-6">
          <h2 className="text-2xl font-semibold dark:text-gray-200">
            {t('ProtectionPersonalData')}
          </h2>
          <p className="text-lg mt-4 text-gray-500 dark:text-gray-400">
            {t('ProtectionPersonalDataDescription')}
          </p>
        </div>
        <div className="w-4xl mb-6">
          <h2 className="text-2xl font-semibold dark:text-gray-200">
            {t('SharingPersonalData')}
          </h2>
          <p className="text-lg mt-4 text-gray-500 dark:text-gray-400">
            {t('SharingPersonalDataDescription')}
          </p>
        </div>
        <div className="w-4xl mb-6">
          <h2 className="text-2xl font-semibold dark:text-gray-200">
            {t('RightsPersonalDataOwner')}
          </h2>
          <p className="text-lg mt-4 text-gray-500 dark:text-gray-400">
            {t('RightsPersonalDataOwnerDescription')}
          </p>
          <ul className="text-gray-500 dark:text-gray-400 mt-6 list-disc list-inside">
            {t.rich('RightsPersonalDataOwnerDescriptionList', {
              list: (chunks) => <li className="mb-2">{chunks}</li>,
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

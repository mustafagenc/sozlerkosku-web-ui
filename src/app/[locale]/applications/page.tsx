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
  const t = await getTranslations({ locale, namespace: 'Applications' });

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
              {t('Applications.Title')}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

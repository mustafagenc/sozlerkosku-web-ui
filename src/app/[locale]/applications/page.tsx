import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ApplicationCard } from '@/components/applications/application-card';
import { getApplications } from '@/utils/applications';
import { notFound } from 'next/navigation';

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

export default async function Page() {
  const t = await getTranslations();
  const applications = await getApplications();
  if (!applications) notFound();
  return (
    <>
      <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-4xl mb-30 text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
              {t('Applications.Title')}
            </h1>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            {applications.map((application) => (
              <ApplicationCard key={application.name} metadata={application} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

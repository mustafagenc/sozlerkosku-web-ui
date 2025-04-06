import { getTranslations } from 'next-intl/server';
import { env } from '@/utils/env';
import { getApplicationByName } from '@/utils/applications';
import { TApplication } from '@/types/TApplication';
import Image from 'next/image';
import { AppDownloadButtons } from '@/components/applications/download-buttons';

type Params = Promise<{ applicationName: string; locale: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { applicationName } = await params;

  const DEFAULT_METADATA = {
    title: applicationName,
    description: 'Sozler kosku applications',
  } as const;

  try {
    const t = await getTranslations();
    const application = await getApplicationByName({ name: applicationName });
    if (!application)
      throw new Error(`Application not found: ${applicationName}`);

    const { name } = application;

    const baseMetadata = {
      title: t(`Applications.${name}.name`),
      description:
        t(`Applications.${name}.definition`) || DEFAULT_METADATA.description,
    };

    return {
      ...baseMetadata,
      openGraph: {
        ...baseMetadata,
        url: new URL(
          `/applications/${applicationName}`,
          env.SITE_URL
        ).toString(),
      },
      twitter: {
        ...baseMetadata,
        card: 'summary_large_image',
      },
    };
  } catch (error) {
    console.error(
      `Error generating dynamic metadata for application: ${applicationName}: `,
      error
    );

    return {
      ...DEFAULT_METADATA,
      openGraph: {
        ...DEFAULT_METADATA,
        url: new URL(`/projects/${applicationName}`, env.SITE_URL).toString(),
      },
      twitter: {
        ...DEFAULT_METADATA,
        card: 'summary_large_image',
      },
    };
  }
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const { applicationName } = await params;

  const application: TApplication =
    (await getApplicationByName({
      name: applicationName,
    })) ??
    (() => {
      throw new Error(`Application not found: ${applicationName}`);
    })();

  const t = await getTranslations();

  return (
    <>
      <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-7xl mb-20 text-center flex flex-col justify-center items-center">
            <Image
              src={application.icon}
              alt={t(`Applications.${applicationName}.name`)}
              width={119}
              height={119}
              className="rounded-3xl object-cover shadow mb-10"
            />
            <h1 className="text-5xl lg:text-6xl font-semibold dark:text-gray-200 mb-6">
              {t(`Applications.${applicationName}.name`)}
            </h1>
            <h2 className="text-2xl">
              {t(`Applications.${applicationName}.title`)}
            </h2>
          </div>
          <div className="max-w-7xl flex flex-col lg:flex-row justify-start gap-20">
            <div className="flex flex-col basis-2/4 justify-start">
              {t.rich(`Applications.${applicationName}.description`, {
                p: (chunks) => (
                  <p className="text-lg dark:text-gray-200">{chunks}</p>
                ),
              })}
              <div className="mt-10">
                <AppDownloadButtons application={application} />
              </div>
            </div>
            <div className="flex-none basis-2/4 order-first">
              <Image
                src={application.image}
                alt={t(`Applications.${applicationName}.name`)}
                width={400}
                height={400}
                className="rounded-3xl object-cover w-full lg:h-100 shadow"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

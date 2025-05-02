import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { HorizontalLine } from '@/components/shared/horizontal-line';
import { ReturnToHomeButton } from '@/components/shared/return-to-home-button';
import { Link } from '@/i18n/navigation';
import { env } from '@/utils/env';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Blog.GenclikMerkezimiz',
  });

  const baseMetadata = {
    title: t('Meta.Title'),
  };

  const imageData = {
    images: [{ url: env.SITE_URL + '/images/blog/genclik-merkezi.jpg' }],
  };

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata,
      url: new URL(`/blog/genclik-merkezimiz`, env.SITE_URL).toString(),
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
        src={'/images/blog/genclik-merkezi.jpg'}
        alt={t('GenclikMerkezimiz.Meta.Title')}
        width={816}
        height={544}
        className="rounded-3xl w-full h-180 object-cover object-top shadow-xs"
      />
      <div className="flex flex-col justify-center items-start w-full bg-white rounded-3xl dark:bg-gray-950/60 p-10 mt-10 mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold dark:text-gray-200">
          {t('GenclikMerkezimiz.Title')}
        </h2>
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('GenclikMerkezimiz.SubTitle1')}
        </h3>
        <p className="my-5 text-xl">
          {t.rich('GenclikMerkezimiz.Paragraph1', {})}
        </p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('GenclikMerkezimiz.SubTitle2')}
        </h3>
        <p className="my-5 text-xl">
          {t.rich('GenclikMerkezimiz.Paragraph2', {})}
        </p>
        <HorizontalLine />
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('GenclikMerkezimiz.SubTitle3')}
        </h3>
        <p className="my-5 text-xl">
          {t.rich('GenclikMerkezimiz.Paragraph3', {
            Strong: (chunks) => {
              return (
                <strong className="text-blue-500 dark:text-blue-400">
                  {chunks}
                </strong>
              );
            },
          })}
        </p>
        <Link
          href="https://bagis.sozlerkosku.com/sozler-kosku"
          target="_blank"
          className="my-10 border-2 w-full text-xl border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-3xl px-6 py-4 flex items-center justify-center gap-3"
        >
          {t('GenclikMerkezimiz.WouldYouLikeToSupportOurWork')}
        </Link>
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('GenclikMerkezimiz.SubTitle4')}
        </h3>
        <p className="my-5 text-xl">
          {t.rich('GenclikMerkezimiz.Paragraph4', {})}
        </p>
        <p className="my-5 text-xl">
          {t.rich('GenclikMerkezimiz.Paragraph5', {})}
        </p>
        <div className="w-full bg-green-600 rounded-xl py-3 text-white text-center text-xl font-semibold mt-16">
          {t('GenclikMerkezimiz.BuyingAnUnfinishedBuilding')}
        </div>
        <div className="w-full bg-green-600 rounded-xl py-3 text-white text-center text-xl font-semibold mt-6">
          {t('GenclikMerkezimiz.CompletionOfBuildingConstruction')}
        </div>
        <div className="w-full flex flex-row justify-center items-center  mt-6 mb-12">
          <div className=" bg-green-600 grow rounded-l-xl py-3 text-white text-center text-xl font-semibold h-13">
            {t('GenclikMerkezimiz.InteriorExteriorDecorationAndFurnishings')}
          </div>
          <div className="bg-gray-200 w-10 rounded-r-xl  h-13"></div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-semibold dark:text-gray-200 mt-10">
          {t('GenclikMerkezimiz.SubTitle6')}
        </h3>
        <p className="mt-5 text-xl">
          {t.rich('GenclikMerkezimiz.Location', {
            Strong: (chunks) => {
              return <strong>{chunks}</strong>;
            },
          })}
        </p>
        <p className="mt-5 text-xl">
          {t.rich('GenclikMerkezimiz.LandSize', {
            Strong: (chunks) => {
              return <strong>{chunks}</strong>;
            },
          })}
        </p>
        <p className="mt-5 text-xl">
          {t.rich('GenclikMerkezimiz.OfficeSpace', {
            Strong: (chunks) => {
              return <strong>{chunks}</strong>;
            },
          })}
        </p>
        <p className="mt-5 text-xl">
          {t.rich('GenclikMerkezimiz.MadrasaArea', {
            Strong: (chunks) => {
              return <strong>{chunks}</strong>;
            },
          })}
        </p>
        <p className="mt-5 text-xl">
          {t.rich('GenclikMerkezimiz.GardenArea', {
            Strong: (chunks) => {
              return <strong>{chunks}</strong>;
            },
          })}
        </p>
      </div>
      <ReturnToHomeButton />
    </section>
  );
}

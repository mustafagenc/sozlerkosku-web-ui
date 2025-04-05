import { locales } from '@/utils/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const WhoWeAre = () => {
  const t = useTranslations();
  return (
    <section
      className="bg-white dark:bg-gray-900 px-3 py-20 min-h-screen"
      key={'who-we-are'}
    >
      <div className=" max-w-7xl px-3 grow mx-auto antialiased flex flex-col lg:flex-row justify-start gap-10">
        <div className="flex flex-col basis-2/4 justify-start">
          <h2 className="mb-4 no-underline text-6xl font-bold dark:text-gray-200">
            {t('Home.WhoWeAre.title')}
          </h2>
          <p className="mb-6 text-xl dark:text-gray-200">
            {t.rich('Home.WhoWeAre.description', {
              br: () => <br />,
              b: (chunks) => <b className="text-orange-500">{chunks}</b>,
            })}
          </p>
          <p className="mb-6 text-xl dark:text-gray-200">
            {locales.map((locale) => (
              <span key={locale.id} className="font-semibold block mb-1">
                - {t('Languages.' + locale.id)}
              </span>
            ))}
          </p>
          <p className="mb-6 text-xl dark:text-gray-200">
            {t('Home.WhoWeAre.end')}
          </p>
        </div>
        <div className="flex-none basis-2/4 order-first lg:order-last">
          <Image
            src="/images/genclik-merkezi-anasayfa.jpg"
            alt="Intro"
            width={400}
            height={400}
            className="rounded-3xl object-cover w-full lg:h-160 shadow"
            priority
          />
        </div>
      </div>
    </section>
  );
};

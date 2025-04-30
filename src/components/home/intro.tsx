'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import ImageSlider from './image-slider';

export const Intro = () => {
  const t = useTranslations('Home');
  return (
    <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased min-h-screen">
      <div className="flex flex-col justify-center text-center w-full">
        <div>
          <h1 className="mb-4 no-underline text-7xl font-bold dark:text-gray-200 text-shadow-sm">
            {t('Meta.title')}
          </h1>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="mb-6 text-xl dark:text-gray-200">
            {t.rich('intro', {
              br: () => <br />,
            })}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6 lg:mt-0">
          <a
            href="#who-are-we"
            data-controller="scroll-to"
            className="border-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-500 hover:text-white py-3 px-6 rounded-full text-lg ml-4"
          >
            {t('WhoWeAre.title')}
          </a>
          <Link
            href="/about"
            className="border-1 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-6 rounded-full text-lg ml-4"
          >
            {t('what-we-do-here')}
          </Link>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/sozler-kosku-hero.jpg"
            alt="Intro"
            width={2448}
            height={816}
            className="mt-20 mb-8 w-full rounded-3xl object-cover object-center h-100"
            priority
          />
        </div>
        <div className="lg:hidden">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

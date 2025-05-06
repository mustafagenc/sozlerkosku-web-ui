'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Donate } from '@/components/shared/donate';

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
        <div className="flex items-center justify-center mt-6">
          <Donate className="bg-orange-500 border-2 border-orange-500 dark:bg-orange-500 text-white py-4 px-12 text-2xl hover:bg-orange-600 dark:hover:bg-orange-600" />
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

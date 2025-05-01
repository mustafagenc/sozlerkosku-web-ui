'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const images: { id: number; src: string }[] = [
  {
    id: 0,
    src: '/images/gallery/1.jpg',
  },
  {
    id: 1,
    src: '/images/gallery/2.jpg',
  },
  {
    id: 2,
    src: '/images/gallery/3.jpg',
  },
  {
    id: 3,
    src: '/images/gallery/4.jpg',
  },
  {
    id: 4,
    src: '/images/gallery/5.jpg',
  },
  {
    id: 5,
    src: '/images/gallery/6.jpg',
  },
  {
    id: 6,
    src: '/images/gallery/7.jpg',
  },
  {
    id: 7,
    src: '/images/gallery/8.jpg',
  },
];

export const Gallery = () => {
  const t = useTranslations();
  return (
    <section className="bg-white dark:bg-gray-900 px-3 py-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-4  max-w-5xl text-center no-underline text-6xl font-bold dark:text-gray-200">
          {t('Gallery.Title')}
        </h2>
        <p className="mb-6 max-w-5xl text-xl dark:text-gray-200 text-center">
          {t('Gallery.Description')}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-3 lg:px-25">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={t('Meta.title')}
              width={390}
              height={240}
              className="rounded-3xl object-cover w-full lg:h-60 shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

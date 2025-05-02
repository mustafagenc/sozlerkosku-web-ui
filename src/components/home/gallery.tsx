'use client';

import { useTranslations } from 'next-intl';
import { ThumbImage } from '@/components/shared/thumb-image';
import Arrow from '@/public/icons/arrow.svg';
import Close from '@/public/icons/close.svg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import Image01 from '@/public/images/gallery/1.jpg';
import Image02 from '@/public/images/gallery/2.jpg';
import Image03 from '@/public/images/gallery/3.jpg';
import Image04 from '@/public/images/gallery/4.jpg';
import Image05 from '@/public/images/gallery/5.jpg';
import Image06 from '@/public/images/gallery/6.jpg';
import Image07 from '@/public/images/gallery/7.jpg';
import Image08 from '@/public/images/gallery/8.jpg';

export const Gallery = () => {
  const t = useTranslations();

  const [indexCurrent, setIndexCurrent] = useState(0);

  const [dataImgCurrent, setDataImgCurrent] = useState<StaticImageData | null>(
    null
  );

  const isOpen = dataImgCurrent !== null;

  const listImages = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
  ];

  function handleClickOpenImage(index: number) {
    setIndexCurrent(index);
    setDataImgCurrent(listImages[index]);
  }

  function handleCloseLightBox() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: 'next' | 'previous') {
    let index = direction == 'next' ? indexCurrent + 1 : indexCurrent - 1;

    console.log(index);

    if (index < 0) {
      index = listImages.length - 1;
    }

    if (index >= listImages.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataImgCurrent(listImages[index]);
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900 px-3 py-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-4  max-w-5xl text-center no-underline text-6xl font-bold dark:text-gray-200">
            {t('Gallery.Title')}
          </h2>
          <p className="mb-6 max-w-5xl text-xl dark:text-gray-200 text-center">
            {t('Gallery.Description')}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-3 lg:px-25">
            {listImages.map((img, index) => (
              <ThumbImage
                key={index}
                srcImage={img}
                onClick={() => handleClickOpenImage(index)}
              />
            ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-90 flex items-center justify-center bg-black bg-opacity-50 gap-4">
          <button
            onClick={handleCloseLightBox}
            className="absolute top-5 right-5 w-10 hover:opacity-50 transition-opacity"
          >
            <Image src={Close} alt="Button close" />
          </button>
          <button className="w-12 rotate-180 hover:opacity-50 transition-opacity">
            <Image
              src={Arrow}
              alt="arrow previous"
              onClick={() => handleNavigate('previous')}
            />
          </button>
          {dataImgCurrent && (
            <Image src={dataImgCurrent} width={800} height={600} alt="image" />
          )}
          <button className="w-12 hover:opacity-50 transition-opacity">
            <Image
              src={Arrow}
              alt="arrow next"
              width={600}
              onClick={() => handleNavigate('next')}
            />
          </button>
        </div>
      )}
    </>
  );
};

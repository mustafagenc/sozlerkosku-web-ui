'use client';
import { useState, useEffect, JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from '@/public/images/slider/1.jpg';
import image2 from '@/public/images/slider/2.jpg';
import image3 from '@/public/images/slider/3.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageData {
  src: StaticImageData;
  id: number;
}

const images: ImageData[] = [
  {
    src: image1,
    id: 0,
  },
  {
    src: image2,
    id: 1,
  },
  {
    src: image3,
    id: 2,
  },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative w-full mx-auto mt-20 mb-8">
      <div
        className="relative h-[460px] group"
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {}}
        onBlur={() => {}}
        role="button"
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl transition-all duration-500 ease-in-out cursor-pointer drop-shadow-xs"
        />
      </div>
      <a
        href="javascript:void(0);"
        className="absolute flex justify-center items-center left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-white/5 mx-1 -mt-[10px] -translate-y-1/2 text-white p-2 group cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          prevSlide();
        }}
        role="button"
      >
        <ChevronLeft
          size={50}
          className="text-white group-hover:text-orange-500"
        />
      </a>
      <a
        href="javascript:void(0);"
        className="absolute flex justify-center items-center right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-white/5 mx-1 -mt-[10px] -translate-y-1/2 text-white p-2 group cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
        role="button"
      >
        <ChevronRight
          size={50}
          className="text-white group-hover:text-orange-500"
        />
      </a>
      <div className="flex justify-center mt-4">
        {images.map((img) => (
          <div
            key={img.id}
            className={`h-1 w-10 mx-2 ${
              img.id === currentIndex
                ? 'bg-orange-500 rounded-xl'
                : 'bg-gray-300 rounded-xl'
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}

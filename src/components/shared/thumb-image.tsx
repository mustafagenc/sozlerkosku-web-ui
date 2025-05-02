import Image, { StaticImageData } from 'next/image';
interface ThumbImageProps {
  srcImage: StaticImageData;
  onClick: () => void;
}

export function ThumbImage({ srcImage, onClick }: ThumbImageProps) {
  return (
    <button
      onClick={onClick}
      className="w-full h-full overflow-hidden rounded-3xl"
    >
      <Image
        src={srcImage}
        width={390}
        height={240}
        quality={99}
        alt="image"
        className="object-none h-60 w-full hover:scale-110 transition-all ease-linear cursor-pointer rounded-3xl lg:h-60 shadow"
      />
    </button>
  );
}

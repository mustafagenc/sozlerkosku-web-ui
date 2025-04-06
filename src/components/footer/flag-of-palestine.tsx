import Image from 'next/image';

export const FlagOfPalestine = () => {
  return (
    <div className="sticky inset-y-[0] left-36">
      <Image
        src="/Flag_of_Palestine.svg"
        alt="Free Palestine"
        width={100}
        height={50}
      />
    </div>
  );
};

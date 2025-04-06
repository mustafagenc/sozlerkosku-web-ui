import Image from 'next/image';
import React from 'react';

export const FlagOfPalestine = () => {
  return (
    <div className="free-palestine">
      <Image
        src="/Flag_of_Palestine.svg"
        alt="Free Palestine"
        width={100}
        height={50}
      />
    </div>
  );
};

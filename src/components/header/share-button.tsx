'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';

import { Loader } from '@/components/icons/loader';
import { Button } from '@/components/ui/button';
import { SHARE_URL } from '@/utils/constants';

export const ShareButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const t = useTranslations('Shared');

  const openShareUrl = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(SHARE_URL, '_blank');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost">
        <Loader className="size-5 animate-spin text-zinc-400" />
        <span className="sr-only">{t('Loading')}</span>
      </Button>
    );
  }
  return (
    <Button
      size="icon"
      variant="ghost"
      className="text-gray-500 hover:text-gray-700"
      onClick={openShareUrl}
    >
      <AiOutlineShareAlt className="h-5 w-5" />
    </Button>
  );
};

'use client';

import { useTranslations } from 'next-intl';
import { TApplication } from '@/types/TApplication';
import Image from 'next/image';
import { Play } from 'next/font/google';
import { useTheme } from 'next-themes';

const play = Play({
  weight: ['700'],
  variable: '--font-play',
  subsets: ['latin', 'latin-ext'],
});

interface AppDownloadProps {
  application: TApplication;
}

export const IosButton = ({ application }: AppDownloadProps) => {
  const { resolvedTheme } = useTheme();

  const appleIcon =
    resolvedTheme === 'light' ? '/icons/Apple.svg' : '/icons/Apple-light.svg';

  const t = useTranslations('Applications');
  return (
    <>
      <a
        href={application.android}
        className="flex min-w-50 items-center justify-center gap-2 border-2 dark:border-gray-950 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-950 rounded-lg p-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={appleIcon}
          alt={t('IosDownload')}
          width={70}
          height={70}
          className="w-11 h-11"
        />
        <div className="flex flex-col">
          <span className="text-xs">{t('IosDownload')}</span>
          <span
            className={`text-lg font-bold font-(family-name:${play.variable})`}
          >
            App Store
          </span>
        </div>
      </a>
    </>
  );
};

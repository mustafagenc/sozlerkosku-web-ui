'use client';

import { useTranslations } from 'next-intl';
import { TApplication } from '@/types/TApplication';
import Image from 'next/image';
import { Play } from 'next/font/google';

const play = Play({
  weight: ['700'],
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
});

interface AppDownloadProps {
  application: TApplication;
}

export const AndroidButton = ({ application }: AppDownloadProps) => {
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
          src={'/icons/Google-Play.svg'}
          alt={t('AndroidDownload')}
          width={70}
          height={70}
          className="w-11 h-11"
        />
        <div className="flex flex-col">
          <span className="text-xs">{t('AndroidDownload')}</span>
          <span
            className={`text-lg font-bold font-(family-name:${play.variable})`}
          >
            Google Play
          </span>
        </div>
      </a>
    </>
  );
};

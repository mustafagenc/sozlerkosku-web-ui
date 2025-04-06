'use client';

import { useTranslations } from 'next-intl';

import { TApplication } from '@/types/TApplication';

import { AndroidButton } from './android-button';
import { IosButton } from './ios-button';

interface AppDownloadProps {
  application: TApplication;
}

export const AppDownloadButtons = ({ application }: AppDownloadProps) => {
  const t = useTranslations('Applications');

  return (
    <div className="flex flex-col">
      <p className="mb-6 w-full text-orange-500 font-semibold">
        {t('DownloadDescription')}
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        <AndroidButton application={application} />
        <IosButton application={application} />
      </div>
    </div>
  );
};

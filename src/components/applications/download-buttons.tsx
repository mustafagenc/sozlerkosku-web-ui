'use client';

import { TApplication } from '@/types/TApplication';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import {
  GooglePlayButton,
  ButtonsContainer,
  AppStoreButton,
} from 'react-mobile-app-button';

interface AppDownloadProps {
  application: TApplication;
}

export const AppDownloadButtons = ({ application }: AppDownloadProps) => {
  const { resolvedTheme } = useTheme();
  const t = useTranslations('Applications');

  return (
    <>
      <p className="mb-6 text-orange-500 font-semibold">
        {t('DownloadDescription')}
      </p>
      <ButtonsContainer gap={30}>
        <GooglePlayButton
          title={t('AndroidDownload')}
          url={application.android}
          theme={resolvedTheme as 'dark' | 'light' | undefined}
          height={60}
          className="hover:bg-gray-200 dark:hover:bg-gray-900"
        />
        <AppStoreButton
          title={t('IosDownload')}
          url={application.ios}
          theme={resolvedTheme as 'dark' | 'light' | undefined}
          height={60}
          className="hover:bg-gray-200 dark:hover:bg-gray-900"
        />
      </ButtonsContainer>
    </>
  );
};

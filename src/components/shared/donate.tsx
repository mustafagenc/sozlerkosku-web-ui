import { cn } from '@/utils/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Dialog } from 'radix-ui';

interface DonateProps {
  className?: string;
}

export const Donate = ({ className }: DonateProps) => {
  const t = useTranslations();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            'font-(family-name:--font-poppins) cursor-pointer rounded-full',
            className
          )}
        >
          {t('Navigation.donate')}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content bg-white dark:bg-gray-900 fixed top-[50%] left-[50%] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-md shadow-lg p-6 focus:outline-none">
          <Dialog.Title className="text-center text-2xl font-bold text-gray-900 dark:text-gray-200 mb-10">
            {t('Home.Donate.title')}
          </Dialog.Title>
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <Link
              href="https://bagis.sozlerkosku.com/sozler-kosku"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 text-center hover:opacity-50 hover:transition-opacity border-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-500 hover:text-white py-3 px-6 rounded-full text-lg ml-4"
            >
              {t('Home.Donate.regular')}
            </Link>
            <Link
              href="https://bagis.sozlerkosku.com/destek"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 text-center hover:opacity-50 hover:transition-opacity border-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-500 hover:text-white py-3 px-6 rounded-full text-lg ml-4"
            >
              {t('Home.Donate.one-time')}
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { getLangDir } from 'rtl-detect';

import { Link, usePathname } from '@/i18n/navigation';
import { NAV_LINKS } from '@/utils/constants';

import { Donate } from './donate';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

export const Navbar = () => {
  const pathName = usePathname();

  const getClassnameForLink = (path: string) => {
    return pathName === path
      ? 'rounded-md bg-gray-900 dark:bg-gray-950 px-3 py-2 text-sm font-medium text-white dark:text-gray-300'
      : 'rounded-md px-3 py-2 text-sm font-medium text-white-950 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-950 dark:text-gray-300';
  };

  const t = useTranslations();
  const locale = useLocale();
  const direction = getLangDir(locale);

  const isRtl = direction === 'ltr';
  return (
    <nav className="sticky top-5 opacity-90 z-50 bg-white dark:bg-gray-900 shadow rounded-full mx-auto max-w-7xl">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={'/'} className="flex items-center ml-4">
            <Image
              className={`h-12 w-auto md:h10 ${isRtl ? 'mr-4' : 'ml-4'}`}
              src="/images/logo.png"
              alt={t('Meta.title')}
              dir={isRtl ? 'rtl' : 'ltr'}
              width={96}
              height={96}
            />
            <div className="text-2xl tracking-tight	font-semibold ml-4 hidden lg:flex">
              {t('Meta.title')}
            </div>
          </Link>
        </div>
        <div className=" items-center space-x-4 flex-grow justify-center hidden lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={getClassnameForLink(link.path)}
            >
              {t(link.name)}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <LocaleSwitcher />
          <ThemeToggle />
          <Donate />
        </div>
      </div>
    </nav>
  );
};

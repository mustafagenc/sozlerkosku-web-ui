'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { NAV_LINKS } from '@/utils/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

export const Navbar = () => {
  const pathName = usePathname();

  const getClassnameForLink = (path: string) => {
    return pathName === path
      ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
      : 'rounded-md px-3 py-2 text-sm font-medium text-stone-950 hover:bg-gray-100 hover:text-black';
  };

  const t = useTranslations('Navigation');

  return (
    <nav className="bg-white rounded-full w-full gap-2 shadow-base-300/20 shadow-sm mb-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-1 items-center">
              <Link href="/" className="flex items-center">
                <Image
                  className="h-12 w-auto"
                  src="/images/logo.png"
                  alt="Your Company"
                  width={96}
                  height={96}
                />
                <div className="ml-4 mr-4 font-bold text-2xl">Sözler Köşkü</div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block content-center items-center">
              <div className="flex space-x-4">
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
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LocaleSwitcher />
            <ThemeToggle />
            <Link
              href="/"
              className="border-1 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white py-1 px-3 rounded-full text-lg ml-4"
            >
              {t('donation')}
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

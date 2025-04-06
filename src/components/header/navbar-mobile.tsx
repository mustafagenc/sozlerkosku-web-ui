'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link } from '@/i18n/navigation';
import { NAV_LINKS } from '@/utils/constants';

import { Loader } from '../icons/loader';
import { Button } from '../ui/button';

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost">
        <Loader className="size-5 animate-spin text-zinc-400" />
        <span className="sr-only">{t('Shared.Loading')}</span>
      </Button>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger onClick={() => setIsOpen((prev) => !prev)}>
        <AiOutlineMenu className="size-6 font-bold cursor-pointer text-gray-500 hover:text-gray-700" />
      </PopoverTrigger>

      <PopoverContent
        className="w-44 p-2"
        align="start"
        onBlur={() => setIsOpen(false)}
      >
        <div className="flex flex-col space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block rounded px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-zinc-100 dark:hover:bg-gray-900"
            >
              {t(link.name)}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

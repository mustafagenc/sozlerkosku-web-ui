'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';

import { Loader } from '@/components/icons/loader';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuFlagItem, DropdownMenuRadioGroup,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales } from '@/utils/constants';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost">
        <Loader className="size-5 animate-spin text-zinc-400" />
        <span className="sr-only">Loading...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="text-gray-500 hover:text-gray-700"
        >
          <AiOutlineGlobal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
          {locales.map((elt) => (
            <DropdownMenuFlagItem key={elt.id} value={elt.id} flag={elt.flag}>
              <div className="flex">
                <Image
                  src={elt.flag}
                  width={16}
                  height={16}
                  alt={elt.name}
                  className="flex-none w-4 mr-2"
                />
              </div>
              <div className="flex-1">{elt.name}</div>
            </DropdownMenuFlagItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

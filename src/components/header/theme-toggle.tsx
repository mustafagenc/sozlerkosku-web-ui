'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

import { Loader } from '@/components/icons/loader';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const t  = useTranslations('Shared');

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

  const ToggleThemeIcon =
    resolvedTheme === 'light' ? (
      <AiOutlineMoon className="h-5 w-5" />
    ) : (
      <AiOutlineSun className="h-5 w-5" />
    );
  return (
    <Button
      size="icon"
      variant="ghost"
      className="text-gray-500 hover:text-gray-700"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {ToggleThemeIcon}
      <span className="sr-only">{t('ToggleTheme')}</span>
    </Button>
  );
};
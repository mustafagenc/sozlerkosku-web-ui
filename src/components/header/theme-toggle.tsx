'use client';

import { Loader, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const t = useTranslations('Shared');

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
      <Moon className="h-5 w-5" />
    ) : (
      <Sun className="h-5 w-5" />
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

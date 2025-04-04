import '@/styles/globals.css';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getLangDir } from 'rtl-detect';

import { routing } from '@/i18n/routing';
import { env } from '@/utils/env';

import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import Providers from '@/providers/providers';
import { Navbar } from '@/components/header/navbar';
import { Footer } from '@/components/footer/footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta');

  return {
    metadataBase: new URL(env.SITE_URL),
    title: t('title'),
    description: t('description'),
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  console.log('RootLayout', locale);
  console.clear();

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable}  mx-auto flex flex-col min-h-screen antialiased`}
      >
        <NextIntlClientProvider>
          <Providers>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
              <Navbar />
              <main className="mt-10 grow">{children}</main>
            </div>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

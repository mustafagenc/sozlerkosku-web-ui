import '@/styles/globals.css';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getLangDir } from 'rtl-detect';

import { FlagOfPalestine } from '@/components/footer/flag-of-palestine';
import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/header/navbar';
import { routing } from '@/i18n/routing';
import Providers from '@/providers/providers';
import { env } from '@/utils/env';
import { GoogleTagManager } from '@next/third-parties/google';

import type { Metadata } from 'next';
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta');

  const imageData = {
    images: [{ url: env.SITE_URL + '/images/sozler-kosku-hero.jpg' }],
  };
  return {
    metadataBase: new URL(env.SITE_URL),
    title: {
      default: t('title'),
      template: `%s • ${t('title')}`,
    },
    description: t('description'),
    openGraph: {
      ...imageData,
    },
    twitter: {
      card: 'summary_large_image',
      ...imageData,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning={true}
      className="scroll-smooth"
    >
      <GoogleTagManager gtmId="GTM-W9C2HVWV" />
      <body
        className={`${poppins.variable} mx-auto flex flex-col min-h-screen antialiased`}
      >
        <NextIntlClientProvider>
          <Providers>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
              <Navbar />
              <main className="mt-4 lg:mt-10 grow">{children}</main>
            </div>
            <Footer />
            <FlagOfPalestine />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

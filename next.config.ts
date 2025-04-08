import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/5te5-namaz-aliskanlik-uygulamasi.html',
        destination: '/applications/beste5v2/',
        permanent: true,
      },
      {
        source: '/lamelif-kuran-ve-tecvid-egitimi.html',
        destination: '/applications/lamelif/',
        permanent: true,
      },
      {
        source: '/kopgit-risale-i-nur-okuma-programi.html',
        destination: '/applications/kopgit/',
        permanent: true,
      },
      {
        source: '/iletisim.html',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/hakkimizda.html',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/en-cok-merak-edilenler.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dava-okulu.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog-sokak-roportaji.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog-genclik-merkezimiz.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

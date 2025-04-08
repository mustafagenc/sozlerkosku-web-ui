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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

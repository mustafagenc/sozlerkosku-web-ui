import { getApplications } from '@/utils/applications';
import { ROUTES } from '@/utils/constants';
import { env } from '@/utils/env';

import type { MetadataRoute } from 'next';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ROUTES.map((route) => {
    const normalizedRoute = `${route.replace(/^\/|\/$/g, '')}`;
    return {
      url: new URL(
        normalizedRoute.replace(/\/+$/, ''),
        env.SITE_URL
      ).toString(),
      lastModified: new Date('2025-04-05T00:00:00Z').toISOString(),
    };
  });

  let applicationsData: MetadataRoute.Sitemap = [];
  try {
    const applications = await getApplications();
    applicationsData = applications.map((application) => ({
      url: new URL(
        `/applications/${application.name}`,
        env.SITE_URL
      ).toString(),
      lastModified: new Date('2025-04-06T00:00:00Z').toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching applications for sitemap:', error);
  }

  return [...staticRoutes, ...applicationsData];
}

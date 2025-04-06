import { promises as fs } from 'fs';
import path from 'path';

import { TApplication } from '@/types/TApplication';

export async function getApplications(): Promise<TApplication[]> {
  const applicationsPath = path.join(
    process.cwd(),
    'content',
    'data',
    'applications.json'
  );
  const file = await fs.readFile(applicationsPath, 'utf8');
  const aplicationsData: TApplication[] = JSON.parse(file).apps;
  return aplicationsData;
}

export async function getApplicationByName({
  name,
}: {
  name: string;
}): Promise<TApplication | null> {
  const applications: TApplication[] = await getApplications();
  const application = applications.filter((app) => app.name === name);
  return application.length > 0 ? application[0] : null;
}

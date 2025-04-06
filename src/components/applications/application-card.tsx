import { getTranslations } from 'next-intl/server';

import { Card, CardContent } from '@/components/ui/card';

import { TApplication } from '@/types/TApplication';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface ApplicationCardProps {
  metadata: TApplication;
}

export const ApplicationCard = async ({ metadata }: ApplicationCardProps) => {
  const { name, icon } = metadata;
  const t = await getTranslations();

  return (
    <Card className="rounded-3xl border-0 dark:border">
      <CardContent className="flex flex-row items-start gap-4  pt-6 md:pt-8">
        <div className="flex">
          <Link href={`/applications/${name}`}>
            <Image
              src={icon}
              alt="alt"
              width={179}
              height={179}
              className="rounded-3xl object-cover shadow"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Link href={`/applications/${name}`}>
            <h5 className="text-4xl font-bold text-orange-400 hover:underline">
              {t(`Applications.${name}.name`)}
            </h5>
          </Link>
          <p className="text-foreground line-clamp-3">
            {t(`Applications.${name}.definition`)}
          </p>
          <div className="flex items-center gap-1 hover:text-foreground hover:transition"></div>
        </div>
      </CardContent>
    </Card>
  );
};

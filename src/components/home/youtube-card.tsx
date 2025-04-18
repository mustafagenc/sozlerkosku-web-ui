import { getLocale, getTranslations } from 'next-intl/server';

import { Card, CardContent } from '@/components/ui/card';
import { TYoutubeChannels } from '@/types/TYoutubeChannel';

import { ArrowUpRightIcon } from '../icons/arrowUpRight';

interface YoutubeCardProps {
  metadata: TYoutubeChannels;
}

export const YoutubeCard = async ({ metadata }: YoutubeCardProps) => {
  const { name, url, subscribers } = metadata;
  const t = await getTranslations();
  const locale = await getLocale();

  const subscriberNumber = subscribers.toLocaleString(locale, {
    maximumFractionDigits: 1,
    notation: 'compact',
    compactDisplay: 'short',
  });

  return (
    <Card className="rounded-3xl border-0 dark:border">
      <CardContent className="flex flex-col items-start gap-3 pt-6 md:pt-8">
        <h5 className="text-5xl lg:text-6xl font-bold text-orange-400">
          {subscriberNumber}
        </h5>
        <p className="text-3xl font-bold text-foreground">
          {t(`Languages.${name}`)}
        </p>
        <div className="flex items-center gap-1 hover:text-foreground hover:transition">
          <a
            href={url}
            target="_blank"
            className="text-xl text-orange-400 hover:underline"
          >
            {t('Home.Youtube.visit-the-channel')}
          </a>
          <ArrowUpRightIcon className="size-5 text-orange-400" />
        </div>
      </CardContent>
    </Card>
  );
};

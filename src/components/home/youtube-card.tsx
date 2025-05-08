import { Eye, MoveUpRight, SquarePlay } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { Card, CardContent } from '@/components/ui/card';
import { TYoutubeChannel } from '@/types/TYoutubeChannel';

interface YoutubeCardProps {
  metadata: TYoutubeChannel;
}

export const YoutubeCard = async ({ metadata }: YoutubeCardProps) => {
  const { name, lang, subscribers, viewCount, videoCount } = metadata;
  const t = await getTranslations();
  const locale = await getLocale();

  const formattedSubscriberCount = subscribers.toLocaleString(locale, {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  });

  const formattedViewCount = viewCount?.toLocaleString(locale, {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  });

  const formattedVideoCount = videoCount?.toLocaleString(locale, {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  });

  return (
    <Card className="rounded-3xl border-0 dark:border">
      <CardContent className="flex flex-col items-start gap-3 pt-6 md:pt-8">
        <h5 className="text-5xl lg:text-6xl font-bold text-orange-400 text-shadow-xs">
          {formattedSubscriberCount}
        </h5>
        <p className="text-4xl font-bold text-foreground">
          {t(`Languages.${lang}`)}
        </p>
        <div className="flex-row items-center gap-5 hidden lg:flex">
          <div>
            {' '}
            {formattedViewCount && (
              <div className="flex flex-row items-center gap-2">
                <Eye /> {formattedViewCount}
              </div>
            )}
          </div>
          <div>
            {formattedVideoCount && (
              <div className="flex flex-row items-center gap-2">
                <SquarePlay />
                {formattedVideoCount}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1 hover:text-foreground hover:transition">
          <a
            href={`https://youtube.com/${name}`}
            target="_blank"
            className="text-xl text-orange-400 hover:underline"
          >
            {t('Home.Youtube.visit-the-channel')}
          </a>
          <MoveUpRight className="size-5 text-orange-400" />
        </div>
      </CardContent>
    </Card>
  );
};

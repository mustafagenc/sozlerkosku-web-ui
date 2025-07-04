import { getTranslations } from 'next-intl/server';

import { TYoutubeChannel } from '@/types/TYoutubeChannel';
import { youtubeChannels } from '@/utils/client';

import { YoutubeCard } from './youtube-card';

export const Youtube = async () => {
  const t = await getTranslations('Home.Youtube');

  const youtubeChannelsData: TYoutubeChannel[] | undefined =
    await youtubeChannels();

  if (!youtubeChannelsData) {
    return '';
  }

  return (
    <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div className="flex-none max-w-4xl">
          <h2 className="mb-4 no-underline text-3xl lg:text-6xl dark:text-gray-200 font-semibold">
            {t.rich('title', {
              br: () => <br />,
            })}
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-14 mt-10">
          {youtubeChannelsData.map((channel: TYoutubeChannel) => (
            <YoutubeCard key={channel.id} metadata={channel} />
          ))}
        </div>
      </div>
    </section>
  );
};

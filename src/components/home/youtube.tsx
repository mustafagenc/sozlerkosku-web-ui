import { getTranslations } from 'next-intl/server';

import { YoutubeCard } from './youtube-card';
import { getYoutubeChannels } from '@/utils/youtube';

export const Youtube = async () => {
  const t = await getTranslations('Home.Youtube');
  const youtubeChannels = await getYoutubeChannels();
  if (!youtubeChannels) throw new Error(`Youtube data not found`);

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
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {youtubeChannels.map((channel) => (
            <YoutubeCard key={channel.name} metadata={channel} />
          ))}
        </div>
      </div>
    </section>
  );
};

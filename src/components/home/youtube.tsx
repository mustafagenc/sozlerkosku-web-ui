import { promises as fs } from 'fs';
import { getTranslations } from 'next-intl/server';
import path from 'path';

import { TYoutubeChannels } from '@/types/TYoutubeChannel';

import { YoutubeCard } from './youtube-card';

export const Youtube = async () => {
  const youtubePath = path.join(
    process.cwd(),
    'content',
    'data',
    'youtube.json'
  );
  const file = await fs.readFile(youtubePath, 'utf8');
  const youtubeData: TYoutubeChannels[] = JSON.parse(file).channels;
  const t = await getTranslations('Home.Youtube');
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
          {youtubeData.map((channel) => (
            <YoutubeCard key={channel.name} metadata={channel} />
          ))}
        </div>
      </div>
    </section>
  );
};

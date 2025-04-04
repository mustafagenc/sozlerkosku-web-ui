import { promises as fs } from 'fs';
import { YoutubeCard } from './youtube-card';
import { getTranslations } from 'next-intl/server';
import { TYoutubeChannels } from '@/types/TYoutubeChannel';

export const Youtube = async () => {
  const file = await fs.readFile('./content/data/youtube.json', 'utf8');
  const youtubeData: TYoutubeChannels[] = JSON.parse(file).channels;
  const t = await getTranslations('Home.Youtube');
  return (
    <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div className="flex-none max-w-4xl">
          <h2 className="mb-4 no-underline text-6xl dark:text-gray-200 font-semibold">
            {t.rich('title', {
              br: () => <br />,
            })}
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-10 mt-10">
          {youtubeData.map((channel) => (
            <YoutubeCard key={channel.name} metadata={channel} />
          ))}
        </div>
      </div>
    </section>
  );
};

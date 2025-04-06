import { promises as fs } from 'fs';
import path from 'path';

import { TYoutubeChannels } from '@/types/TYoutubeChannel';

export async function getYoutubeChannels(): Promise<TYoutubeChannels[]> {
  const youtubePath = path.join(
    process.cwd(),
    'content',
    'data',
    'youtube.json'
  );
  const file = await fs.readFile(youtubePath, 'utf8');
  const youtubeData: TYoutubeChannels[] = JSON.parse(file).channels;
  return youtubeData;
}

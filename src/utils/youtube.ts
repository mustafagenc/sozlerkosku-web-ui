import { TYoutubeChannels } from '@/types/TYoutubeChannel';
import path from 'path';
import { promises as fs } from 'fs';

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

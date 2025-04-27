import { NextRequest } from 'next/server';

import youtubeService from '@/utils/apis/youtube';
import { YOUTUBE_CHANNELS } from '@/utils/constants';
import { PrismaClient } from '@prisma/client';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  const prisma = new PrismaClient();
  prisma.$connect();

  await Promise.all(
    YOUTUBE_CHANNELS.map(async (channel) => {
      const channelHandle = channel.includes('@')
        ? channel
        : channel.split('/').pop() || '';

      const subscribers = await getChannelSubscribers(channelHandle);

      await prisma.youtubeChannels.upsert({
        where: {
          name: channel,
        },
        update: {
          subscribers: parseInt(subscribers),
        },
        create: {
          name: channel,
          lang: 'tr',
          subscribers: parseInt(subscribers),
        },
      });

      return {
        channel: channelHandle,
        subscribers: subscribers,
      };
    })
  );

  prisma.$disconnect();

  return Response.json({ success: true });
}

const getChannelSubscribers = async (channelHandle: string) => {
  try {
    // First, get the channel ID from the handle
    const searchResponse = await youtubeService.search.list({
      part: ['snippet'],
      q: channelHandle,
      type: ['channel'],
      maxResults: 1,
    });

    if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
      console.error(`No channel found for handle: ${channelHandle}`);
      return '0';
    }

    const channelId = searchResponse.data.items[0].id?.channelId;

    if (!channelId) {
      console.error(`No channel ID found for handle: ${channelHandle}`);
      return '0';
    }

    // Now get the channel statistics
    const response = await youtubeService.channels.list({
      part: ['statistics'],
      id: [channelId],
    });

    if (response.data.items && response.data.items.length > 0) {
      const subscriberCount =
        response.data.items[0].statistics?.subscriberCount;
      console.log(
        `Channel ${channelHandle} has ${subscriberCount} subscribers`
      );
      return subscriberCount || '0';
    }

    console.error(`No statistics found for channel: ${channelHandle}`);
    return '0';
  } catch (error) {
    console.error('Error fetching channel subscribers:', error);
    return '0';
  }
};

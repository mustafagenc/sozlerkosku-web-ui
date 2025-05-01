import { NextRequest } from 'next/server';

import getChannelDetails from '@/utils/apis/youtube';
import { prisma } from '@/utils/client';
import { YOUTUBE_CHANNELS } from '@/utils/constants';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  prisma.$connect();

  await Promise.all(
    YOUTUBE_CHANNELS.map(async (channel) => {
      const channelDetail = await getChannelDetails(channel.id);

      let subscribers = parseInt(channelDetail?.subscribers ?? '0');
      if (subscribers < 1000) {
        subscribers = channel.defaultSubs;
      }
      let videoCount = parseInt(channelDetail?.videoCount ?? '0');
      if (videoCount < 100) {
        videoCount = channel.defaultVideos;
      }
      let viewCount = parseInt(channelDetail?.viewCount ?? '0');
      if (viewCount < 1000) {
        viewCount = channel.defaultView;
      }

      await prisma.youtubeChannels.upsert({
        where: {
          name: channel.name,
        },
        update: {
          subscribers: subscribers,
          videoCount: videoCount,
          viewCount: viewCount,
          hiddenSubscriberCount: channelDetail?.hiddenSubscriberCount ?? false,
        },
        create: {
          name: channel.name,
          lang: channel.lang,
          subscribers: subscribers,
          videoCount: videoCount,
          viewCount: viewCount,
          hiddenSubscriberCount: channelDetail?.hiddenSubscriberCount ?? false,
        },
      });

      return {
        channel: channel.name,
        subscribers: channelDetail?.subscribers,
        videoCount: channelDetail?.videoCount,
        viewCount: channelDetail?.viewCount,
        hiddenSubscriberCount: channelDetail?.hiddenSubscriberCount,
      };
    })
  );

  prisma.$disconnect();

  return Response.json({ success: true });
}

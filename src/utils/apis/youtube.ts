import { google } from 'googleapis';

import { env } from '../env';

const youtubeService = google.youtube({
  version: 'v3',
  auth: env.GOOGLE_API_KEY,
});

const getChannelDetails = async (channelHandle: string) => {
  try {
    const searchResponse = await youtubeService.search.list({
      part: ['snippet'],
      q: channelHandle,
      type: ['channel'],
      maxResults: 1,
    });

    if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
      return null;
    }

    const channelId = searchResponse.data.items[0].id?.channelId;

    if (!channelId) {
      return null;
    }

    const response = await youtubeService.channels.list({
      part: ['statistics'],
      id: [channelId],
    });

    if (response.data.items && response.data.items.length > 0) {
      const subscriberCount =
        response.data.items[0].statistics?.subscriberCount || '0';
      const videoCount = response.data.items[0].statistics?.videoCount || '0';
      const viewCount = response.data.items[0].statistics?.viewCount || '0';
      const hiddenSubscriberCount =
        response.data.items[0].statistics?.hiddenSubscriberCount || false;

      return {
        name: channelHandle,
        subscribers: subscriberCount,
        videoCount: videoCount,
        viewCount: viewCount,
        hiddenSubscriberCount: hiddenSubscriberCount,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching channel subscribers:', error);
    return null;
  }
};

export default getChannelDetails;

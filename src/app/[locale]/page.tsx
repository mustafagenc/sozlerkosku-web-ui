import { Contact } from '@/components/contact/contact-info';
import { Intro } from '@/components/home/intro';
import { WhoWeAre } from '@/components/home/who-we-are';
import { Youtube } from '@/components/home/youtube';
import youtubeService from '@/utils/apis/youtube';

export default async function Page() {
  const YOUTUBE_CHANNELS: string[] =
    `@sozlerkosku,@TowardsEternity,@TowardsEternityArabic,@TowardsEternityUrduHindi,@TowardsEternityFrancais,@TowardsEternityEspanol,@TowardsEternityRussian,@TowardsEternityIndonesian,@TEBangla,https://www.youtube.com/@TowardsEternity-Hindi,https://www.youtube.com/@TowardsEternityDeutsch,https://www.youtube.com/@TowardsEternity-Uzbek,https://www.youtube.com/@TowardsEternityPersian`.split(
      ','
    );

  const getChannelSubscribers = async (channelHandle: string) => {
    try {
      // First, get the channel ID from the handle
      const searchResponse = await youtubeService.search.list({
        part: ['snippet'],
        q: channelHandle,
        type: ['channel'],
        maxResults: 1,
      });

      if (
        !searchResponse.data.items ||
        searchResponse.data.items.length === 0
      ) {
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

  const channelSubscribers = await Promise.all(
    YOUTUBE_CHANNELS.map(async (channel) => {
      const channelHandle = channel.includes('@')
        ? channel
        : channel.split('/').pop() || '';
      return {
        channel: channelHandle,
        subscribers: await getChannelSubscribers(channelHandle),
      };
    })
  );

  return (
    <>
      <Intro />
      <WhoWeAre />
      <Youtube channelSubscribers={channelSubscribers} />
      <Contact />
    </>
  );
}

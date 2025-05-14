import { YOUTUBE_CHANNELS } from '../../src/utils/constants';

// filepath: src/utils/constants.test.ts

describe('YOUTUBE_CHANNELS', () => {
  it('should be an array', () => {
    expect(Array.isArray(YOUTUBE_CHANNELS)).toBe(true);
  });

  it('should contain the expected number of channels', () => {
    expect(YOUTUBE_CHANNELS.length).toBe(13); // Update this if the array changes
  });

  it('should have valid structure for each channel', () => {
    YOUTUBE_CHANNELS.forEach((channel) => {
      expect(channel).toHaveProperty('lang');
      expect(typeof channel.lang).toBe('string');

      expect(channel).toHaveProperty('name');
      expect(typeof channel.name).toBe('string');

      expect(channel).toHaveProperty('id');
      expect(typeof channel.id).toBe('string');

      expect(channel).toHaveProperty('defaultSubs');
      expect(typeof channel.defaultSubs).toBe('number');

      expect(channel).toHaveProperty('defaultVideos');
      expect(typeof channel.defaultVideos).toBe('number');

      expect(channel).toHaveProperty('defaultView');
      expect(typeof channel.defaultView).toBe('number');
    });
  });

  it('should have unique IDs for each channel', () => {
    const ids = YOUTUBE_CHANNELS.map((channel) => channel.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

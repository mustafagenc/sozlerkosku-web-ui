import { prisma, youtubeChannels } from '../../src/utils/client';

// filepath: ./sozlerkosku-web-ui/src/utils/client.test.ts

describe('youtubeChannels', () => {
  it('should return a list of YouTube channels ordered by subscribers in descending order', async () => {
    const mockChannels = [
      { id: 1, name: 'Channel A', subscribers: 1000 },
      { id: 2, name: 'Channel B', subscribers: 500 },
    ];

    prisma.youtubeChannels.findMany = jest.fn().mockResolvedValue(mockChannels);

    const result = await youtubeChannels();

    expect(prisma.youtubeChannels.findMany).toHaveBeenCalledWith({
      orderBy: { subscribers: 'desc' },
    });
    expect(result).toEqual(mockChannels);
  });

  it('should throw an error if the database query fails', async () => {
    prisma.youtubeChannels.findMany = jest
      .fn()
      .mockRejectedValue(new Error('Database error'));

    await expect(youtubeChannels()).rejects.toThrow('Database error');
    expect(prisma.youtubeChannels.findMany).toHaveBeenCalledWith({
      orderBy: { subscribers: 'desc' },
    });
  });
});

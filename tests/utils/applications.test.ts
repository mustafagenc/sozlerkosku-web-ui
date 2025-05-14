import { promises as fs } from 'fs';
import path from 'path';
import {
  getApplications,
  getApplicationByName,
} from '../../src/utils/applications';

// filepath: ./sozlerkosku-web-ui/src/utils/applications.test.ts

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

jest.mock('path', () => ({
  join: jest.fn(),
}));

describe('applications.ts', () => {
  const mockApplicationsData = {
    apps: [
      { name: 'App1', description: 'Description1' },
      { name: 'App2', description: 'Description2' },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (path.join as jest.Mock).mockReturnValue('/mocked/path/applications.json');
    (fs.readFile as jest.Mock).mockResolvedValue(
      JSON.stringify(mockApplicationsData)
    );
  });

  describe('getApplications', () => {
    it('should return the list of applications', async () => {
      const applications = await getApplications();
      expect(applications).toEqual(mockApplicationsData.apps);
      expect(path.join).toHaveBeenCalledWith(
        process.cwd(),
        'content',
        'data',
        'applications.json'
      );
      expect(fs.readFile).toHaveBeenCalledWith(
        '/mocked/path/applications.json',
        'utf8'
      );
    });
  });

  describe('getApplicationByName', () => {
    it('should return the application with the given name', async () => {
      const application = await getApplicationByName({ name: 'App1' });
      expect(application).toEqual(mockApplicationsData.apps[0]);
    });

    it('should return null if the application with the given name does not exist', async () => {
      const application = await getApplicationByName({
        name: 'NonExistentApp',
      });
      expect(application).toBeNull();
    });
  });
});

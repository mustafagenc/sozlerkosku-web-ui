import { google } from 'googleapis';

import { env } from '../env';

const youtubeService = google.youtube({
  version: 'v3',
  auth: env.GOOGLE_API_KEY,
});

export default youtubeService;

import { z } from 'zod';

import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    SITE_URL: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM_EMAIL: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email('Invalid email.'),
    RESEND_AUDIENCE_ID: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  },
});

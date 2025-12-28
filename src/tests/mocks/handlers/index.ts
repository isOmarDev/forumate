import { HttpResponse, http } from 'msw';

import { env } from '@/config/env';

import { networkDelay } from '../utils';

import { authHandlers } from './auth';
import { postsHandlers } from './posts';

export const handlers = [
  ...authHandlers,
  ...postsHandlers,
  http.get(`${env.APP_API_URL}/healthcheck`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];

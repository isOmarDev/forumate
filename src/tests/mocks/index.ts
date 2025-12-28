import { env } from '@/config/env';

export const enableMocking = async () => {
  if (env.APP_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    const { initializeDb } = await import('./db');
    const { seedDb } = await import('../data-seeding');

    await initializeDb();
    await seedDb();

    return worker.start();
  }
};

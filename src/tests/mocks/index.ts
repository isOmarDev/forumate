import { env } from '@/config/env';

export const enableMocking = async () => {
  if (env.APP_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    const { initializeDb } = await import('./db/data-storage');
    const { seedDb } = await import('./db/data-seed');

    await initializeDb();
    await seedDb();

    return worker.start({
      onUnhandledRequest(request) {
        // Bypass DiceBear requests
        if (request.url.includes('dicebear.com')) return;
      },
    });
  }
};

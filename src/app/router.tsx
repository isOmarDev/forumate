import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { AppLayout } from '@/components/layouts/app-layout';
import { paths } from '@/config/paths';

import { AuthRoute } from './routes/auth/auth-route';

const convert = (queryClient: QueryClient) => (m: any) => {
  const {
    clientLoader,
    clientAction,
    default: Component,
    ...rest
  } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

const HydrateFallback = () => null;

const FEED_SORTS = ['latest', 'top', 'trending'] as const;

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      Component: AppLayout,
      children: [
        {
          path: paths.home.path,
          children: [
            // Feed
            {
              index: true,
              lazy: () =>
                import('./routes/feed').then(convert(queryClient)),
            },
            ...FEED_SORTS.map((sort) => ({
              path: paths.feed[sort].path,
              lazy: () =>
                import('./routes/feed').then(convert(queryClient)),
            })),

            // Topics
            {
              path: paths.topics.root.path,
              children: [
                {
                  index: true,
                  lazy: () =>
                    import('./routes/topics').then(
                      convert(queryClient),
                    ),
                },

                // Topic feed
                {
                  path: paths.topics.topic.path,
                  children: [
                    {
                      index: true,
                      lazy: () =>
                        import('./routes/topic-feed').then(
                          convert(queryClient),
                        ),
                    },
                    ...FEED_SORTS.map((sort) => ({
                      path: sort,
                      lazy: () =>
                        import('./routes/topic-feed').then(
                          convert(queryClient),
                        ),
                    })),
                  ],
                },
              ],
            },
          ],
        },
      ],
      HydrateFallback,
    },

    // Auth
    {
      Component: AuthRoute,
      children: [
        {
          path: paths.auth.login.path,
          lazy: () =>
            import('./routes/auth/login').then(convert(queryClient)),
        },
        {
          path: paths.auth.register.path,
          lazy: () =>
            import('./routes/auth/register').then(
              convert(queryClient),
            ),
        },
      ],
      HydrateFallback,
    },

    // 404
    {
      path: '*',
      lazy: () =>
        import('./routes/not-found').then(convert(queryClient)),
      HydrateFallback,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(
    () => createAppRouter(queryClient),
    [queryClient],
  );

  return <RouterProvider router={router} />;
};

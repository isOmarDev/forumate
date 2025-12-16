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

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      Component: AppLayout,
      children: [
        {
          path: paths.home.path,
          lazy: () =>
            import('./routes/home').then(convert(queryClient)),
        },

        // Posts
        {
          path: paths.posts.latest.path,
          lazy: () =>
            import('./routes/home').then(convert(queryClient)),
        },
        {
          path: paths.posts.top.path,
          lazy: () =>
            import('./routes/home').then(convert(queryClient)),
        },
        {
          path: paths.posts.trending.path,
          lazy: () =>
            import('./routes/home').then(convert(queryClient)),
        },
        {
          path: paths.posts.popular.path,
          lazy: () =>
            import('./routes/popular').then(convert(queryClient)),
        },

        // Topics
        {
          path: paths.topics.root.path,
          lazy: () =>
            import('./routes/topics').then(convert(queryClient)),
          children: [
            {
              path: 'new_and_updates',
              lazy: () =>
                import('./routes/topic').then(convert(queryClient)),
            },
            {
              path: 'ideas_and_discussions',
              lazy: () =>
                import('./routes/topic').then(convert(queryClient)),
            },
            {
              path: 'questions_and_help',
              lazy: () =>
                import('./routes/topic').then(convert(queryClient)),
            },
            {
              path: 'guides_and_resources',
              lazy: () =>
                import('./routes/topic').then(convert(queryClient)),
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

    // Not found
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

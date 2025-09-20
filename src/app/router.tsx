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
      ],
      HydrateFallback,
    },
    {
      element: <AuthRoute />,
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

import { paths } from '@/config/paths';
import { renderApp, screen, waitFor } from '@/tests/test-utils';

import { AuthRoute } from '../auth-route';
import ReigsterRoute from '../register';

it('should render register page at root path "/" when user is not logged in', async () => {
  renderApp(undefined, {
    user: null,
    url: paths.auth.register.path,
    routes: [
      {
        element: <AuthRoute />,
        children: [
          {
            path: paths.auth.register.path,
            element: <ReigsterRoute />,
          },
        ],
      },
    ],
  });

  await waitFor(() => {
    expect(screen.getByTestId('register-form')).toBeInTheDocument();
  });
});

it('redirects to home page when user is already logged in', async () => {
  await renderApp(undefined, {
    url: paths.auth.register.path,
    routes: [
      {
        element: <AuthRoute />,
        children: [
          {
            path: paths.auth.register.path,
            element: <ReigsterRoute />,
          },
        ],
      },
    ],
  });

  expect(await screen.findByTestId('home')).toBeInTheDocument();
});

import { paths } from '@/config/paths';
import { renderApp, screen } from '@/tests/test-utils';

import { AuthRoute } from '../auth-route';
import LoginRoute from '../login';

describe('LoginRoute', () => {
  it('renders login page at "/login" when user is not logged in', async () => {
    await renderApp(undefined, {
      user: null,
      url: paths.auth.login.path,
      routes: [
        {
          element: <AuthRoute />,
          children: [
            { path: paths.auth.login.path, element: <LoginRoute /> },
          ],
        },
      ],
    });

    expect(
      await screen.findByTestId('login-form'),
    ).toBeInTheDocument();
  });

  it('redirects to home page when user is already logged in', async () => {
    await renderApp(undefined, {
      url: paths.auth.login.path,
      routes: [
        {
          element: <AuthRoute />,
          children: [
            { path: paths.auth.login.path, element: <LoginRoute /> },
          ],
        },
      ],
    });

    expect(await screen.findByTestId('home')).toBeInTheDocument();
    expect(
      screen.queryByTestId('login-form'),
    ).not.toBeInTheDocument();
  });
});

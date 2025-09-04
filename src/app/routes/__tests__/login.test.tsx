import { renderApp, screen, waitFor } from '@/tests/test-utils';

import LoginRoute from '../login';

it('renders login page at "/login" when user is not logged in', async () => {
  renderApp(<LoginRoute />, {
    user: null,
    path: '/login',
    url: '/login',
  });

  await waitFor(() => {
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome back' }),
    ).toBeInTheDocument();
  });
});

it.todo(
  'redirects to home page when user is already logged in',
  async () => {},
);

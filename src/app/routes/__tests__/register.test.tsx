import { renderApp, screen, waitFor } from '@/tests/test-utils';

import ReigsterRoute from '../register';

it('should render register page at root path "/" when user is not logged in', async () => {
  renderApp(<ReigsterRoute />, { user: null });

  await waitFor(() => {
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Join Forumate',
      }),
    ).toBeInTheDocument();
  });
});

it.todo(
  'redirects to home page when user is already logged in',
  async () => {},
);

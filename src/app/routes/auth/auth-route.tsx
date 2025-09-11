import { Navigate, Outlet, useSearchParams } from 'react-router';

import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

export const AuthRoute = () => {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  if (user.data) {
    return (
      <Navigate
        to={redirectTo ? redirectTo : paths.home.path}
        replace
      />
    );
  }

  return <Outlet />;
};

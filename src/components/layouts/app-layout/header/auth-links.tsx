import { Link, useLocation } from 'react-router';

import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';

const getLoginPath = paths.auth.login.getHref;
const getRegisterPath = paths.auth.register.getHref;

export const AuthLinks = ({ isMobile }: { isMobile?: boolean }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Button asChild size="lg">
        <Link to={getLoginPath(pathname)}>Log in</Link>
      </Button>
      {!isMobile && (
        <Button variant="outline" asChild size="lg">
          <Link to={getRegisterPath(pathname)}>Create account</Link>
        </Button>
      )}
    </>
  );
};

import { UserRoundIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { Stack } from '@/components/ui/stack';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

import { SidebarMenuButton, useSidebar } from '../../../ui/sidebar';

const LoginLink = () => {
  const { isSidebarOpen } = useSidebar();
  const { pathname } = useLocation();
  const loginPath = paths.auth.login.getHref(pathname);

  return (
    <SidebarMenuButton
      asChild
      size="lg"
      tooltip="Log in"
      variant="outline"
    >
      <Link to={loginPath}>
        {isSidebarOpen ? (
          <Stack direction="col" className="truncate">
            <span className="font-bold">Log in</span>
            <span className="text-xs text-sidebar-foreground/70">
              Join now for free
            </span>
          </Stack>
        ) : (
          <UserRoundIcon
            className="truncate stroke-[1.25]"
            aria-label="Log in"
          />
        )}
      </Link>
    </SidebarMenuButton>
  );
};

export const NavSecondary = () => {
  const { data: userData } = useUser();

  if (userData) {
    return <></>;
  }

  return <LoginLink />;
};

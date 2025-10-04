import {
  EllipsisVerticalIcon,
  UserRoundIcon,
  SpoolIcon,
  PenLineIcon,
  SettingsIcon,
  LogOutIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { AvatarInitials } from '@/components/ui/avatar';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
  DropdownGroup,
} from '@/components/ui/dropdown';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { Stack } from '@/components/ui/stack';
import { paths } from '@/config/paths';
import { useLogout, useUser } from '@/lib/auth';
import type { User } from '@/types/api';
import { getFullName } from '@/utils/get-full-name';

const LoginButton = () => {
  const { isSidebarOpen } = useSidebar();
  const { pathname } = useLocation();

  return (
    <SidebarMenuButton
      asChild
      size="lg"
      tooltip="Sign in"
      variant="outline"
    >
      <Link to={paths.auth.login.getHref(pathname)}>
        {isSidebarOpen ? (
          <Stack direction="col" className="truncate">
            <span className="font-bold">Log in</span>
            <span className="text-xs text-sidebar-foreground/70">
              Join now for free
            </span>
          </Stack>
        ) : (
          <UserRoundIcon className="truncate stroke-[1.25]" />
        )}
      </Link>
    </SidebarMenuButton>
  );
};

const UserBadge = ({ user }: { user: User }) => (
  <Stack gap={2} align="center">
    <AvatarInitials user={user} />
    <Stack className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">
        {getFullName(user.firstName, user.lastName)}
      </span>
      <span className="truncate text-xs">{user.email}</span>
    </Stack>
  </Stack>
);

const ProfileMenu = ({ user }: { user: User }) => {
  const logout = useLogout();
  const handleLogout = () => logout.mutate({});

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <SidebarMenuButton
          className="group-data-[collapsible=icon]:p-[7.5px]"
          size="lg"
          tooltip="Profile"
        >
          <UserBadge user={user} />
          <EllipsisVerticalIcon className="ml-auto size-4!" />
        </SidebarMenuButton>
      </DropdownTrigger>

      <DropdownContent
        className="min-w-60"
        side="top"
        sideOffset={10}
        align="start"
      >
        <DropdownLabel className="px-2 py-2 font-normal">
          <UserBadge user={user} />
        </DropdownLabel>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem animateIcon>
            <SpoolIcon />
            Your posts
          </DropdownItem>
          <DropdownItem animateIcon>
            <PenLineIcon />
            create post
          </DropdownItem>
          <DropdownItem animateIcon>
            <SettingsIcon />
            Settings
          </DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownItem animateIcon onClick={handleLogout}>
          <LogOutIcon />
          Log out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export const NavUser = () => {
  const { data: user } = useUser();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {user ? <ProfileMenu user={user} /> : <LoginButton />}
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

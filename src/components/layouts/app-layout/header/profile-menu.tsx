import {
  PlusIcon,
  PenToolIcon,
  BookMarkedIcon,
  SettingsIcon,
  DoorOpenIcon,
} from 'lucide-react';
import { Link } from 'react-router';

import { UserAvatar } from '@/components/ui/avatar';
import { Button, type ButtonProps } from '@/components/ui/button';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
  DropdownGroup,
} from '@/components/ui/dropdown';
import { Stack } from '@/components/ui/stack';
import { useLogout } from '@/lib/auth';
import type { User } from '@/types/api';
import { getFullName } from '@/utils/name-utils';

const ProfileAvatarButton = ({
  user,
  ...props
}: ButtonProps & { user: User }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      tooltip={{ children: 'Profile menu', align: 'end' }}
      {...props}
    >
      <UserAvatar
        imageUrl={`${user.profileImageUrl}&flip=true`}
        firstName={user.firstName}
        lastName={user.lastName}
      />
    </Button>
  );
};

const UserBadge = ({ user }: { user: User }) => (
  <Stack
    className="rounded-xl px-3 py-4 font-normal hover:bg-secondary"
    gap={2}
    align="center"
  >
    <UserAvatar
      imageUrl={user.profileImageUrl}
      firstName={user.firstName}
      lastName={user.lastName}
    />

    <Stack className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">
        {getFullName(user.firstName, user.lastName)}
      </span>
      <span className="truncate text-xs">{user.email}</span>
    </Stack>
  </Stack>
);

const menuItems = [
  {
    label: 'Create post',
    path: '/',
    icon: PlusIcon,
  },
  {
    label: 'My posts',
    path: '/',
    icon: PenToolIcon,
  },
  {
    label: 'Saved posts',
    path: '/',
    icon: BookMarkedIcon,
  },
  {
    label: 'Settings',
    path: '/',
    icon: SettingsIcon,
  },
];

export const ProfileMenu = ({ user }: { user: User }) => {
  const logout = useLogout();
  const handleLogout = () => logout.mutate({});

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <ProfileAvatarButton user={user} />
      </DropdownTrigger>

      <DropdownContent
        className="min-w-60"
        side="top"
        sideOffset={10}
        align="end"
      >
        <DropdownLabel className="p-0">
          <UserBadge user={user} />
        </DropdownLabel>

        <DropdownSeparator />

        <DropdownGroup>
          {menuItems.map(({ label, path, icon: Icon }) => (
            <DropdownItem
              key={label}
              animateIcon
              className="py-3.5"
              asChild
            >
              <Link to={path}>
                <Icon className="size-5" />
                {label}
              </Link>
            </DropdownItem>
          ))}
        </DropdownGroup>

        <DropdownSeparator />

        <DropdownItem
          animateIcon
          className="py-3.5"
          onClick={handleLogout}
        >
          <DoorOpenIcon className="size-5" />
          Log out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

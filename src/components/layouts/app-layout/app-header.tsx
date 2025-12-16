import { LogoIconLink } from '@/components/ui/logo';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Stack } from '@/components/ui/stack';
import { useIsMobile } from '@/hooks/use-mobile';
import { useUser } from '@/lib/auth';

import {
  AuthLinks,
  CreatePostLink,
  ProfileMenu,
  SearchButton,
} from './header';

const HeaderLeft = () => {
  const isMobile = useIsMobile();

  return (
    <Stack align="center" gap={2}>
      {isMobile && <LogoIconLink variant="ghost" />}
      <SidebarTrigger />
    </Stack>
  );
};

const HeaderCenter = () => {
  return null;
};

const HeaderRight = () => {
  const isMobile = useIsMobile();
  const { data: userData } = useUser();

  return (
    <Stack align="center" gap={2}>
      {userData ? (
        <>
          <Stack>
            {isMobile && <SearchButton />}
            <CreatePostLink isMobile={isMobile} />
          </Stack>
          <ProfileMenu user={userData} />
        </>
      ) : (
        <AuthLinks />
      )}
    </Stack>
  );
};

export const AppHeader = () => {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

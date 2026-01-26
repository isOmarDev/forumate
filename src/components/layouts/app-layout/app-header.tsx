import { LogoIconLink } from '@/components/ui/logo';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Stack } from '@/components/ui/stack';
import { useIsMobile } from '@/hooks/use-mobile';
import { useUser } from '@/lib/auth';
import { cn } from '@/lib/cn';

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
      <SidebarTrigger />
      {isMobile && <LogoIconLink variant="ghost" />}
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
      {isMobile && <SearchButton />}
      {userData ? (
        <>
          <CreatePostLink isMobile={isMobile} />
          <ProfileMenu user={userData} />
        </>
      ) : (
        <AuthLinks isMobile={isMobile} />
      )}
    </Stack>
  );
};

export const AppHeader = () => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex items-center justify-between',
        'border-b px-4 py-3',
        'bg-background',
      )}
    >
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

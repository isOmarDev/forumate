import { PlusIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { Button } from '@/components/ui/button';
import { LogoIconLink } from '@/components/ui/logo';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Stack } from '@/components/ui/stack';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { paths } from '@/config/paths';
import { useIsMobile } from '@/hooks/use-mobile';
import { useUser } from '@/lib/auth';

type HeaderSectionProps = {
  isMobile: boolean;
};

const HeaderLeft = ({ isMobile }: HeaderSectionProps) => {
  return (
    <Stack align="center" gap={2}>
      {isMobile && <LogoIconLink variant="ghost" />}
      <SidebarTrigger />
    </Stack>
  );
};

const HeaderCenter = () => {
  return <></>;
};

const HeaderRight = ({ isMobile }: HeaderSectionProps) => {
  const { pathname } = useLocation();
  const size = isMobile ? 'sm' : 'lg';

  const user = useUser();

  if (user.data) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size={size}>
            <PlusIcon className="size-6" />
            <span>Create</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent align="center">Create post</TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Stack align="center" gap={2}>
      <Button asChild size={size}>
        <Link to={paths.auth.login.getHref(pathname)}>Log in</Link>
      </Button>
      <Button variant="outline" asChild size={size}>
        <Link to={paths.auth.register.getHref(pathname)}>
          Create account
        </Link>
      </Button>
    </Stack>
  );
};

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between p-4">
      <HeaderLeft isMobile={isMobile} />
      <HeaderCenter />
      <HeaderRight isMobile={isMobile} />
    </header>
  );
};

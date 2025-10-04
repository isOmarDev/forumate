import { FishSymbolIcon } from 'lucide-react';
import { Link } from 'react-router';

import { SidebarMenuButton } from '@/components/ui/sidebar';

export const NavLogo = () => {
  return (
    <SidebarMenuButton
      asChild
      size="lg"
      className="hover:bg-transparent"
    >
      <Link to="/">
        <FishSymbolIcon className="h-5 w-5 shrink-0 stroke-3" />
        <span className="text-base font-black">Forumate</span>
      </Link>
    </SidebarMenuButton>
  );
};

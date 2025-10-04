import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';

import { NavLogo } from './nav-logo';
import { NavMain } from './nav-main';
import { NavTopics } from './nav-topics';
import { NavUser } from './nav-user';

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavLogo />
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
        <NavTopics />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';

import { NavTopics, NavLogo, NavMain, NavSecondary } from './nav';

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
        <NavSecondary />
      </SidebarFooter>
    </Sidebar>
  );
};

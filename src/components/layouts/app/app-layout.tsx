import Cookies from 'js-cookie';
import { Outlet } from 'react-router';

import { SidebarProvider, SidebarInset } from '../../ui/sidebar';

import { AppSidebar } from './app-sidebar';
import { Header } from './header';

const SIDEBAR_WIDTH_ICON = '4rem';
const SIDEBAR_STYLES = {
  '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
} as React.CSSProperties;

export const AppLayout = () => {
  const defaultOpen = Cookies.get('sidebar_state') === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen} style={SIDEBAR_STYLES}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

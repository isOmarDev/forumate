import { FlameIcon, HouseIcon } from 'lucide-react';
import { NavLink, useLocation } from 'react-router';

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../ui/sidebar';

const navMain = [
  {
    title: 'Home',
    path: '/',
    icon: HouseIcon,
  },
  {
    title: 'Popular',
    path: '/popular',
    icon: FlameIcon,
  },
];

export const NavMain = () => {
  const { pathname } = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              size="lg"
              tooltip={item.title}
              animateIcon
              isActive={pathname === item.path}
            >
              <NavLink to={item.path}>
                <item.icon className="stroke-[1.25]" />
                <span>{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

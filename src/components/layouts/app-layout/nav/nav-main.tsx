import { HouseIcon } from 'lucide-react';
import { NavLink, useLocation } from 'react-router';

import { SORT_OPTIONS } from '@/features/posts/consts/sort';

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../../ui/sidebar';

const navMain = [
  {
    title: 'Home',
    path: '/',
    icon: HouseIcon,
  },
];

export const isHomeActive = (pathname: string): boolean => {
  if (pathname === '/') return true;

  const segments = pathname.split('/').filter(Boolean);

  if (segments.length !== 1) return false;

  return SORT_OPTIONS.includes(
    segments[0] as (typeof SORT_OPTIONS)[number],
  );
};

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
              isActive={isHomeActive(pathname)}
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

import {
  OrigamiIcon,
  LibraryBigIcon,
  SirenIcon,
  LifeBuoyIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { paths } from '@/config/paths';
import { slugify } from '@/utils/slugify';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../../../ui/sidebar';

const navTopics = [
  {
    title: 'News & Updates',
    path: paths.topics.topic.getHref(slugify('news and updates')),
    icon: SirenIcon,
  },
  {
    title: 'Ideas & Discussions',
    path: paths.topics.topic.getHref(
      slugify('ideas and discussions'),
    ),
    icon: OrigamiIcon,
  },
  {
    title: 'Questions & Help',
    path: paths.topics.topic.getHref(slugify('questions and help')),
    icon: LifeBuoyIcon,
  },
  {
    title: 'Guides & Resources',
    path: paths.topics.topic.getHref(slugify('guides and Resources')),
    icon: LibraryBigIcon,
  },
];

export const NavTopics = () => {
  const { pathname } = useLocation();

  return (
    <SidebarGroup className="mt-5">
      <SidebarGroupLabel className="truncate text-sm">
        Topics
      </SidebarGroupLabel>
      <SidebarMenu>
        {navTopics.map((topic) => (
          <SidebarMenuItem key={topic.title}>
            <SidebarMenuButton
              asChild
              size="lg"
              tooltip={topic.title}
              isActive={pathname.startsWith(topic.path)}
              animateIcon
            >
              <Link to={topic.path}>
                <topic.icon className="stroke-[1.25]" />
                <span>{topic.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

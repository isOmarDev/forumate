import {
  OrigamiIcon,
  LibraryBigIcon,
  SirenIcon,
  LifeBuoyIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { paths } from '@/config/paths';

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
    path: paths.topics.newsAndUpdates.path,
    icon: SirenIcon,
  },
  {
    title: 'Ideas & Discussions',
    path: paths.topics.ideasAndDiscussions.path,
    icon: OrigamiIcon,
  },
  {
    title: 'Questions & Help',
    path: paths.topics.questionsAndHelp.path,
    icon: LifeBuoyIcon,
  },
  {
    title: 'Guides & Resources',
    path: paths.topics.guidesAndResources.path,
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
              isActive={pathname === topic.path}
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

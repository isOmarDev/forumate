import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/cn';

import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip';

export const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { isMobile, isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          data-sidebar="trigger"
          data-slot="sidebar-trigger"
          variant="ghost"
          size="icon"
          className={cn('rounded-xl', className)}
          onClick={(event) => {
            onClick?.(event);
            toggleSidebar();
          }}
          {...props}
        >
          {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </TooltipTrigger>

      <TooltipContent align={isMobile ? 'center' : 'start'}>
        {isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      </TooltipContent>
    </Tooltip>
  );
};

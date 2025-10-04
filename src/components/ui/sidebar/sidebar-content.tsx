import * as React from 'react';

import { cn } from '@/lib/cn';

export const SidebarContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex flex-1 flex-col gap-2 overflow-auto',
        'min-h-0 group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  );
};

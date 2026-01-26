import * as React from 'react';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/cn';

export const SidebarSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('mx-2 w-auto bg-sidebar-border', className)}
      {...props}
    />
  );
};

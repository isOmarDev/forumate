import * as React from 'react';

import { Input } from '@/components/ui/form';
import { cn } from '@/lib/cn';

export const SidebarInput = ({
  className,
  ...props
}: React.ComponentProps<typeof Input>) => {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(
        'h-8 w-full bg-background shadow-none',
        className,
      )}
      {...props}
    />
  );
};

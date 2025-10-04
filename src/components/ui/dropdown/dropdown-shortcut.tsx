import React from 'react';

import { cn } from '@/lib/cn';

export const DropdownShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    data-slot="dropdown-menu-shortcut"
    className={cn(
      'ml-auto text-xs tracking-widest text-muted-foreground',
      className,
    )}
    {...props}
  />
);

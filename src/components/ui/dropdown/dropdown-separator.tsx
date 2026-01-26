import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { cn } from '@/lib/cn';

export const DropdownSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator
    data-slot="dropdown-menu-separator"
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
);

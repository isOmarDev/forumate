import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { cn } from '@/lib/cn';

type Props = React.ComponentProps<
  typeof DropdownMenuPrimitive.Label
> & {
  inset?: boolean;
};

export const DropdownLabel = ({
  className,
  inset,
  ...props
}: Props) => (
  <DropdownMenuPrimitive.Label
    data-slot="dropdown-menu-label"
    data-inset={inset}
    className={cn(
      'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
      className,
    )}
    {...props}
  />
);

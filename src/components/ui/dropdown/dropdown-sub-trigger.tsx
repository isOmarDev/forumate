import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/cn';

type Props = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export const DropdownSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: Props) => (
  <DropdownMenuPrimitive.SubTrigger
    data-slot="dropdown-menu-sub-trigger"
    data-inset={inset}
    className={cn(
      'flex cursor-default items-center',
      'px-2 py-1.5 outline-hidden',
      'rounded-sm text-sm select-none',
      'focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto size-4" />
  </DropdownMenuPrimitive.SubTrigger>
);

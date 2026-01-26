import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { cn } from '@/lib/cn';

type Props = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
  animateIcon?: boolean;
};

export const DropdownItem = ({
  className,
  inset,
  variant = 'default',
  animateIcon,
  ...props
}: Props) => (
  <DropdownMenuPrimitive.Item
    data-slot="dropdown-menu-item"
    data-inset={inset}
    data-variant={variant}
    className={cn(
      'group/dropdown-item relative flex cursor-pointer items-center gap-2 focus:bg-accent',
      'p-3 outline-hidden',
      'rounded-xl text-sm select-none',
      'focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20',
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-[1.6] [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground",
      animateIcon && '[&>svg]:group-hover/dropdown-item:animate-pop',
      className,
    )}
    {...props}
  />
);

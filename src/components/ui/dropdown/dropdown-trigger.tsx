import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

export const DropdownTrigger = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>,
) => (
  <DropdownMenuPrimitive.Trigger
    data-slot="dropdown-menu-trigger"
    {...props}
  />
);

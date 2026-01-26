import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

export const DropdownSub = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>,
) => (
  <DropdownMenuPrimitive.Sub
    data-slot="dropdown-menu-sub"
    {...props}
  />
);

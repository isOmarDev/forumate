import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

export const DropdownGroup = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Group>,
) => (
  <DropdownMenuPrimitive.Group
    data-slot="dropdown-menu-group"
    {...props}
  />
);

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

export const DropdownPortal = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>,
) => (
  <DropdownMenuPrimitive.Portal
    data-slot="dropdown-menu-portal"
    {...props}
  />
);

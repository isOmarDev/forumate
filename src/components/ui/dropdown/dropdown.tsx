import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

export const Dropdown = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Root>,
) => (
  <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
);

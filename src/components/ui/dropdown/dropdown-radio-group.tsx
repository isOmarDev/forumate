import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';

export const DropdownRadioGroup = (
  props: React.ComponentProps<
    typeof DropdownMenuPrimitive.RadioGroup
  >,
) => (
  <DropdownMenuPrimitive.RadioGroup
    data-slot="dropdown-menu-radio-group"
    {...props}
  />
);

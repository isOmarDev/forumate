import * as React from 'react';

import { cn } from '@/lib/cn';

import { Separator } from '../separator';

export const ItemSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-0', className)}
      {...props}
    />
  );
};

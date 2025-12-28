import * as React from 'react';

import { cn } from '@/lib/cn';

export const ItemActions = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  );
};

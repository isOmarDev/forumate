import * as React from 'react';

import { cn } from '@/lib/cn';

export const ItemContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    />
  );
};

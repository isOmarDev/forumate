import * as React from 'react';

import { cn } from '@/lib/cn';

export const ItemTitle = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-extrabold',
        className,
      )}
      {...props}
    />
  );
};

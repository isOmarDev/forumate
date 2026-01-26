import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/cn';

export const ItemTitle = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-extrabold',
        className,
      )}
      {...props}
    />
  );
};

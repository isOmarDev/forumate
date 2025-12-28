import * as React from 'react';

import { cn } from '@/lib/cn';

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export type ItemDescriptionProps = {
  textSize?: keyof typeof textSizes;
};

export const ItemDescription = ({
  className,
  textSize = 'md',
  ...props
}: React.ComponentProps<'p'> & ItemDescriptionProps) => {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'line-clamp-2 text-base leading-normal font-normal text-balance text-primary',
        '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        textSizes[textSize],
        className,
      )}
      {...props}
    />
  );
};

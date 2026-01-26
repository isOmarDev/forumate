import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/cn';

const itemMediaVariants = cva(
  cn(
    'flex shrink-0 items-center justify-center gap-2',
    '[&_svg]:pointer-events-none',
  ),
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 rounded-sm border bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover',
      },
      align: {
        start:
          'group-has-[[data-slot=item-description]]/item:self-start',
        center:
          'group-has-[[data-slot=item-description]]/item:translate-y-0.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const ItemMedia = ({
  className,
  variant = 'default',
  align = 'start',
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof itemMediaVariants>) => {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, align, className }))}
      {...props}
    />
  );
};

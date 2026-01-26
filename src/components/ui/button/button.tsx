import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/cn';

import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip';

import {
  buttonVariants,
  type ButtonVariantsProps,
} from './button-variants';

type ButtonBaseProps = React.ComponentProps<'button'>;
export type ButtonProps = ButtonBaseProps &
  ButtonVariantsProps & {
    asChild?: boolean;
    isLoading?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  };

function Button({
  className,
  tooltip,
  variant,
  size,
  isLoading,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const button = (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      disabled={isLoading}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent {...tooltip} />
    </Tooltip>
  );
}

export { Button, buttonVariants };

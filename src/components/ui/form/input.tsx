import * as React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@/lib/cn';

export type InputProps = React.ComponentProps<'input'> & {
  registration: Partial<UseFormRegisterReturn>;
};

function Input({
  className,
  type,
  registration,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex file:inline-flex',
        'h-9 w-full min-w-0 rounded-md border border-input px-3 py-1 outline-none file:h-7 file:border-0',
        'bg-transparent text-base shadow-xs selection:bg-primary selection:text-primary-foreground file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground md:text-sm',
        'transition-[color,box-shadow]',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...registration}
      {...props}
    />
  );
}

export { Input };

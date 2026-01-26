import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/cn';

import { logoVariants, type LogoVariantsProps } from './logo-variant';

export type LogoProps = React.ComponentProps<'div'> &
  LogoVariantsProps & {
    className?: string;
    asChild?: boolean;
  };

export const Logo = ({
  orientation,
  className,
  asChild = false,
  ...props
}: LogoProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        logoVariants({
          orientation,
          className,
        }),
      )}
      {...props}
    />
  );
};

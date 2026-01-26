import { cn } from '@/lib/cn';

import { Logo, type LogoProps } from './logo';
import { LogoLink, type LogoLinkProps } from './logo-link';
import {
  logoTextVariants,
  type LogoTextVariantsProps,
} from './logo-variant';

export type LogoTextProps = Omit<
  LogoProps,
  'children' | 'orientation'
> &
  LogoTextVariantsProps;

export const LogoText = ({
  asChild,
  size,
  variant,
  className,
  ...props
}: LogoTextProps) => {
  return (
    <Logo
      asChild={asChild}
      className={cn(
        logoTextVariants({
          size,
          variant,
          className,
        }),
      )}
      {...props}
    >
      <span>Forumate</span>
    </Logo>
  );
};

type LogoIconLinkProps = Omit<
  LogoLinkProps,
  'children' | 'orientation'
> &
  LogoTextVariantsProps;

export const LogoTextLink = ({
  size,
  variant,
  ...props
}: LogoIconLinkProps) => {
  return (
    <LogoLink {...props}>
      <LogoText asChild size={size} variant={variant} />
    </LogoLink>
  );
};

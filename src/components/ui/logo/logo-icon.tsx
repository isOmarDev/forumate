import { Bubbles } from 'lucide-react';

import { cn } from '@/lib/cn';

import { Logo, type LogoProps } from './logo';
import { LogoLink, type LogoLinkProps } from './logo-link';
import {
  logoIconWrapperVariants,
  logoIconVariants,
  type LogoIconWrapperVariantsProps,
  type LogoIconVariantsProps,
} from './logo-variant';

export type LogoIconProps = Omit<
  LogoProps,
  'children' | 'orientation' | 'asChild'
> &
  LogoIconWrapperVariantsProps &
  LogoIconVariantsProps & { iconClassName?: string };

export const LogoIcon = ({
  size,
  variant,
  className,
  iconClassName,
  ...props
}: LogoIconProps) => {
  return (
    <Logo
      className={cn(
        logoIconWrapperVariants({
          size,
          variant,
          className,
        }),
      )}
      {...props}
    >
      <Bubbles
        className={cn(
          logoIconVariants({
            size,
            className: iconClassName,
          }),
        )}
      />
    </Logo>
  );
};

type LogoIconLinkProps = Omit<
  LogoLinkProps,
  'children' | 'orientation'
> &
  LogoIconWrapperVariantsProps &
  LogoIconVariantsProps & { iconClassName?: string };

export const LogoIconLink = ({
  size,
  variant,
  className,
  iconClassName,
  ...props
}: LogoIconLinkProps) => {
  return (
    <LogoLink
      className={cn(
        logoIconWrapperVariants({
          size,
          variant,
          className,
        }),
      )}
      {...props}
    >
      <Bubbles
        className={cn(
          logoIconVariants({
            size,
            className: iconClassName,
          }),
        )}
      />
    </LogoLink>
  );
};

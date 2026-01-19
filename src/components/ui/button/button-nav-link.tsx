import { NavLink, type NavLinkProps } from 'react-router';

import { cn } from '@/lib/cn';

import {
  buttonVariants,
  type ButtonVariantsProps,
} from './button-variants';

type ButtonNavLinkProps = ButtonVariantsProps &
  NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isActiveFallback?: boolean;
  };

export const ButtonNavLink = ({
  className,
  to,
  variant = 'ghost',
  size,
  isActiveFallback,
  ...props
}: ButtonNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={(navLinkProps) => {
        const customClassName =
          typeof className === 'function'
            ? className(navLinkProps)
            : className;

        const isActive = navLinkProps.isActive || isActiveFallback;

        return cn(
          buttonVariants({
            variant: isActive ? 'secondary' : variant,
            size,
            className: 'font-normal',
          }),
          isActive && 'font-medium',
          customClassName,
        );
      }}
      {...props}
    />
  );
};

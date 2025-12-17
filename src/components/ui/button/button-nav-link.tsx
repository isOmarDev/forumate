import { NavLink, type NavLinkProps } from 'react-router';

import { cn } from '@/lib/cn';

import { Button } from './button';
import { type ButtonVariantsProps } from './button-variants';

type ButtonLinkProps = ButtonVariantsProps &
  NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isActive?: boolean;
  };

export const ButtonNavLink = ({
  className,
  to,
  variant = 'ghost',
  size,
  isActive,
  ...props
}: ButtonLinkProps) => {
  return (
    <Button variant={variant} size={size} asChild>
      <NavLink
        to={to}
        className={cn(isActive && 'bg-secondary', className)}
        {...props}
      />
    </Button>
  );
};

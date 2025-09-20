import { Link, type LinkProps } from 'react-router';

import { Logo, type LogoProps } from './logo';

export type LogoLinkProps = Omit<LogoProps, 'asChild'> &
  Partial<LinkProps>;

export const LogoLink = ({
  children,
  to = '/',
  ...props
}: LogoLinkProps) => {
  return (
    <Logo asChild {...props}>
      <Link to={to}>{children}</Link>
    </Logo>
  );
};

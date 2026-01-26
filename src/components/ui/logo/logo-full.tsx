import { Logo, type LogoProps } from './logo';
import { LogoIcon, type LogoIconProps } from './logo-icon';
import { LogoLink, type LogoLinkProps } from './logo-link';
import { LogoText, type LogoTextProps } from './logo-text';

type LogoFullProps = Omit<LogoProps, 'children'> & {
  iconProps?: LogoIconProps;
  textProps?: LogoTextProps;
};

export const LogoFull = ({
  iconProps,
  textProps,
  ...props
}: LogoFullProps) => {
  return (
    <Logo {...props}>
      <LogoIcon {...iconProps} />
      <LogoText asChild {...textProps} />
    </Logo>
  );
};

type LogoFullLinkProps = Omit<LogoLinkProps, 'children'> & {
  iconProps?: LogoIconProps;
  textProps?: LogoTextProps;
};

export const LogoFullLink = ({
  iconProps,
  textProps,
  ...props
}: LogoFullLinkProps) => {
  return (
    <LogoLink {...props}>
      <LogoIcon {...iconProps} />
      <LogoText asChild {...textProps} />
    </LogoLink>
  );
};

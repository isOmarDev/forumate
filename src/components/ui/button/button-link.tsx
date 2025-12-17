import { Link, type LinkProps } from 'react-router';

import { Button } from './button';
import { type ButtonVariantsProps } from './button-variants';

type ButtonLinkProps = ButtonVariantsProps & LinkProps;

export const ButtonLink = ({
  variant,
  size,
  ...props
}: ButtonLinkProps) => {
  return (
    <Button variant={variant} size={size} asChild>
      <Link {...props} />
    </Button>
  );
};

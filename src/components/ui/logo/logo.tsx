import { Bubbles } from 'lucide-react';
import { Link } from 'react-router';

import { cn } from '@/lib/cn';

import {
  type LogoVariantsProps,
  iconContainerVariants,
  iconVariants,
  textVariants,
} from './logo-variant';

export type LogoProps = LogoVariantsProps & {
  className?: string;
  withText?: boolean;
  withLink?: boolean;
};

export const Logo = ({
  size,
  variant,
  className = '',
  withText = false,
  withLink = true,
}: LogoProps) => {
  const logoContent = (
    <>
      <div className={iconContainerVariants({ size, variant })}>
        <Bubbles className={iconVariants({ size })} />
      </div>

      {withText && (
        <span className={textVariants({ size, variant })}>
          Forumate
        </span>
      )}
    </>
  );

  return withLink ? (
    <Link
      to="/"
      className={cn('flex items-center gap-2 font-medium', className)}
    >
      {logoContent}
    </Link>
  ) : (
    <div
      className={cn('flex items-center gap-2 font-medium', className)}
    >
      {logoContent}
    </div>
  );
};

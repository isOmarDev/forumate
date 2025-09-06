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
};

export const Logo = ({
  size,
  variant,
  className = '',
  withText = false,
}: LogoProps) => {
  return (
    <Link
      to="/"
      className={cn('flex items-center gap-2 font-medium', className)}
    >
      <div className={iconContainerVariants({ size, variant })}>
        <Bubbles className={iconVariants({ size })} />
      </div>

      {withText && (
        <span className={textVariants({ size, variant })}>
          Forumate
        </span>
      )}
    </Link>
  );
};

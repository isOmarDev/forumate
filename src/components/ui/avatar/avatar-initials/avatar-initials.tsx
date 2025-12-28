import { cn } from '@/lib/cn';
import { getInitials } from '@/utils/get-initials';

import { Avatar, AvatarFallback } from '../avatar';

type AvatarInitialsProps = {
  firstName?: string;
  lastName?: string;
  className?: string;
};

export const AvatarInitials = ({
  className,
  firstName = '',
  lastName = '',
}: AvatarInitialsProps) => {
  return (
    <Avatar className={cn('rounded-full', className)}>
      <AvatarFallback>
        {getInitials(firstName, lastName)}
      </AvatarFallback>
    </Avatar>
  );
};

import { cn } from '@/lib/cn';
import { getNameInitials } from '@/utils/get-name-initials';

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
        {getNameInitials(firstName, lastName)}
      </AvatarFallback>
    </Avatar>
  );
};

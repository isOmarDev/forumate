import { cn } from '@/lib/cn';
import type { User } from '@/types/api';
import { getInitials } from '@/utils/get-initials';

import { Avatar, AvatarFallback } from '../avatar';

type AvatarInitialsProps = {
  user: User;
  className?: string;
};

export const AvatarInitials = ({
  className,
  user,
}: AvatarInitialsProps) => {
  return (
    <Avatar className={cn('rounded-full', className)}>
      <AvatarFallback>
        {getInitials(user.firstName, user.lastName)}
      </AvatarFallback>
    </Avatar>
  );
};

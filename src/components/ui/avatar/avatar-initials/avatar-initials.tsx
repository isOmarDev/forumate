import type { User } from '@/types/api';
import { getInitials } from '@/utils/get-initials';

import { Avatar, AvatarFallback } from '../avatar';

type AvatarInitialsProps = {
  user: User;
};

export const AvatarInitials = ({ user }: AvatarInitialsProps) => {
  return (
    <Avatar>
      <AvatarFallback>
        {getInitials(user.firstName, user.lastName)}
      </AvatarFallback>
    </Avatar>
  );
};

import { useEffect, useState } from 'react';

import { cn } from '@/lib/cn';

import { Avatar, AvatarImage } from '../avatar';
import { AvatarInitials } from '../avatar-initials';

type UserAvatarProps = React.ComponentProps<typeof Avatar> & {
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
};

export const UserAvatar = ({
  firstName = '',
  lastName = '',
  imageUrl,
  className,
  ...props
}: UserAvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  // Prefetch img
  useEffect(() => {
    if (!imageUrl) return;

    // reset states when imageUrl changes
    setIsLoaded(false);
    setIsError(false);

    const img = new Image();

    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsError(true);
    img.src = imageUrl;
  }, [imageUrl]);

  if (isError) {
    return (
      <AvatarInitials firstName={firstName} lastName={lastName} />
    );
  }

  return (
    <Avatar
      className={cn('size-10 rounded-xl', className)}
      {...props}
    >
      {isLoaded && (
        <AvatarImage
          className="animate-in duration-100 fade-in"
          src={imageUrl}
          alt={`${firstName} ${lastName} avatar`}
        />
      )}
    </Avatar>
  );
};

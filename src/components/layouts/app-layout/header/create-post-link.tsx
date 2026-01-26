import { PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const CreatePostLink = ({
  isMobile,
}: {
  isMobile?: boolean;
}) => {
  return (
    <Button
      variant={isMobile ? 'ghost' : 'secondary'}
      size={isMobile ? 'icon' : 'lg'}
      tooltip="Create post"
      aria-label="Create post"
    >
      <PlusIcon className="size-5" />
      {!isMobile && <span className="font-semibold">Create</span>}
    </Button>
  );
};

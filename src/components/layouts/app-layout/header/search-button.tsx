import { SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const SearchButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      tooltip="Search"
      aria-label="Search"
    >
      <SearchIcon className="size-5" />
    </Button>
  );
};

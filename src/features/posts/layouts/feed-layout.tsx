import { cn } from '@/lib/cn';
import type { WithTestId } from '@/types/rtl';

import { SortPosts } from '../components/sort-posts';

type FeedLayoutProps = React.ComponentProps<'div'> & WithTestId;

export const FeedLayout = ({
  children,
  className,
  ...props
}: FeedLayoutProps) => {
  return (
    <div className={cn('max-w-[600px]', className)} {...props}>
      <div
        className={cn(
          'sticky top-[65px]',
          'mb-10 border-b py-4',
          'z-10 bg-background',
        )}
      >
        <SortPosts />
      </div>

      <div>{children}</div>
    </div>
  );
};

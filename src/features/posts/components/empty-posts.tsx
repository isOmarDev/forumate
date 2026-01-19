import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import { cn } from '@/lib/cn';

export const EmptyPosts = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <Empty className={cn(className)} {...props}>
      <EmptyHeader>
        <EmptyTitle className="text-base">No posts found</EmptyTitle>
        <EmptyDescription>
          There are no posts to display at the moment. Try refreshing
          or check back later.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

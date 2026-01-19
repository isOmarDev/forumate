import { InfiniteScroll } from '@/components/ui/infinite-scroll/infinite-scroll';
import { Separator } from '@/components/ui/separator';
import { For } from '@/components/utilities';

import { useInfinitePosts } from '../api/get-posts';
import type { SORT_LABELS } from '../consts/sort';

import { EmptyPosts } from './empty-posts';
import { PostPreview, type PostPreviewVariant } from './post-preview';
import { PostSkeleton } from './post-skeleton';

type PostsListProps = {
  sortBy: keyof typeof SORT_LABELS;
  topic?: string;
  variant?: PostPreviewVariant;
};

export const PostsList = ({
  variant = 'feed',
  sortBy,
  topic,
}: PostsListProps) => {
  const {
    isLoading,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfinitePosts({
    sortBy,
    topic,
  });

  if (isLoading) {
    return (
      <For count={3}>
        <PostSkeleton className="mb-16" />
      </For>
    );
  }

  const posts = data?.pages.flatMap((page) => page.data);

  if (!posts?.length) {
    return <EmptyPosts />;
  }

  return (
    <>
      {posts.map((post, index) => (
        <div key={post.id}>
          <PostPreview post={post} variant={variant} />
          {index < posts.length - 1 && (
            <Separator className="my-10" />
          )}
        </div>
      ))}

      <InfiniteScroll
        onLoadMore={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetchingNextPage}
      />
    </>
  );
};

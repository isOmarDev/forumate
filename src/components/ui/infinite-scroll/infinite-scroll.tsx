import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type InfiniteScrollProps = {
  onLoadMore: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
};

export function InfiniteScroll({
  onLoadMore,
  hasNextPage,
  isFetching,
}: InfiniteScrollProps) {
  const ref = useIntersectionObserver(() => {
    if (hasNextPage && !isFetching) {
      onLoadMore();
    }
  });

  return <div ref={ref} />;
}

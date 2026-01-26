import {
  infiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import type { QueryConfig } from '@/lib/react-query';
import type { Meta, Post } from '@/types/api';

import { SORT_LABELS } from '../consts/sort';

import { infinitePostsKeys } from './queries';

type GetPostsProps = {
  sortBy: keyof typeof SORT_LABELS;
  topic?: string;
  page?: number;
};

type PostResponse = { data: Post[]; meta: Meta };

const getPosts = ({
  page = 1,
  sortBy,
  topic,
}: GetPostsProps): Promise<PostResponse> => {
  return api.get('/posts', { params: { page, sortBy, topic } });
};

export const getInfinitePostsQueryOptions = ({
  sortBy,
  topic,
}: {
  sortBy: keyof typeof SORT_LABELS;
  topic?: string;
}) => {
  return infiniteQueryOptions({
    queryKey: infinitePostsKeys.list({ sortBy, topic }),
    queryFn: ({ pageParam = 1 }) => {
      return getPosts({ page: pageParam, sortBy, topic });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const page = lastPage?.meta?.page;
      const totalPages = lastPage?.meta?.totalPages;

      return page < totalPages ? page + 1 : undefined;
    },
  });
};

type UsePostsOptions = {
  sortBy: GetPostsProps['sortBy'];
  topic?: GetPostsProps['topic'];
  page?: number;
  queryConfig?: QueryConfig<typeof getPosts>;
};

export const useInfinitePosts = ({
  queryConfig,
  sortBy,
  topic,
}: UsePostsOptions) => {
  return useInfiniteQuery({
    ...getInfinitePostsQueryOptions({ sortBy, topic }),
    ...queryConfig,
  });
};

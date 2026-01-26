import type { SORT_LABELS } from '../consts/sort';

type InfinitePostsFilters = {
  sortBy: keyof typeof SORT_LABELS;
  topic?: string;
};

export const infinitePostsKeys = {
  all: ['infinitePosts'] as const,
  lists: () => [...infinitePostsKeys.all, 'list'] as const,
  list: (filters: InfinitePostsFilters) =>
    [
      ...infinitePostsKeys.lists(),
      {
        sortBy: filters.sortBy,
        ...(filters.topic ? { topic: filters.topic } : {}),
      },
    ] as const,
  details: () => [...infinitePostsKeys.all, 'detail'] as const,
  detail: (id: number) =>
    [...infinitePostsKeys.details(), id] as const,
};

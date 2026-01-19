import { useMemo } from 'react';
import { useLocation } from 'react-router';

import { SORT_OPTIONS } from '../consts/sort';

export type Sort = (typeof SORT_OPTIONS)[number];

export const DEFAULT_SORT: Sort = 'latest';

export const getSortFromPathname = (pathname: string): Sort => {
  const segments = pathname.split('/').filter(Boolean);
  const last = segments.at(-1);

  if (SORT_OPTIONS.includes(last as Sort)) {
    return last as Sort;
  }

  return DEFAULT_SORT;
};

export const usePostSort = () => {
  const { pathname } = useLocation();

  return useMemo(() => getSortFromPathname(pathname), [pathname]);
};

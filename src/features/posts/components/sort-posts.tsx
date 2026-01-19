import {
  ClockArrowDownIcon,
  TrendingUpIcon,
  TrophyIcon,
} from 'lucide-react';
import { useLocation } from 'react-router';

import { ButtonNavLink } from '@/components/ui/button';

import { SORT_LABELS } from '../consts/sort';
import { usePostSort } from '../hooks/use-post-sort';
import { getSortedPath } from '../utils/get-sorted-path';

const sortItems = [
  {
    label: SORT_LABELS.latest,
    param: SORT_LABELS.latest.toLowerCase(),
    icon: ClockArrowDownIcon,
  },
  {
    label: SORT_LABELS.top,
    param: SORT_LABELS.top.toLowerCase(),
    icon: TrophyIcon,
  },
  {
    label: SORT_LABELS.trending,
    param: SORT_LABELS.trending.toLowerCase(),
    icon: TrendingUpIcon,
  },
];

export const SortPosts = () => {
  const { pathname } = useLocation();

  const activeSort = usePostSort();

  return (
    <nav aria-label="Sort posts">
      <ul className="flex gap-2">
        {sortItems.map(({ label, param, icon: Icon }) => {
          const to = getSortedPath(pathname, param);

          return (
            <li key={param}>
              <ButtonNavLink
                to={to}
                variant="ghost"
                isActiveFallback={activeSort === param}
                state={{ postsSortedBy: label }}
              >
                <Icon />
                {label}
              </ButtonNavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

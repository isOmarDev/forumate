import { SORT_OPTIONS } from '../consts/sort';

const SORT_REGEX = new RegExp(`/(?:${SORT_OPTIONS.join('|')})$`);

export const getSortedPath = (pathname: string, sort: string) => {
  const basePath = pathname.replace(SORT_REGEX, '');

  if (basePath === '' || basePath === '/') {
    return `/${sort}`;
  }

  return `${basePath}/${sort}`;
};

import {
  useNavigate,
  useSearchParams,
  type NavigateOptions,
  type To,
} from 'react-router';

import { paths } from '@/config/paths';

type RedirectOptions = NavigateOptions & {
  searchParam?: string;
};

export const useRedirect = (options: RedirectOptions = {}) => {
  const {
    searchParam = 'redirectTo',
    replace = true,
    ...restOptions
  } = options;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get(searchParam);

  return (to: To = paths.home.path) => {
    const path: To = redirectTo ?? to;

    navigate(path, {
      replace,
      ...restOptions,
    });
  };
};

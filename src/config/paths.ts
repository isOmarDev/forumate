export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  auth: {
    register: {
      path: '/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
  },
} as const;

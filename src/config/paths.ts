export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  // Feed
  feed: {
    latest: {
      path: '/latest',
      getHref: () => '/latest',
    },
    top: {
      path: '/top',
      getHref: () => '/top',
    },
    trending: {
      path: '/trending',
      getHref: () => '/trending',
    },
    popular: {
      path: '/popular',
      getHref: () => '/popular',
    },
  },

  // Topics
  topics: {
    root: {
      path: '/topics',
      getHref: () => '/topics',
    },
    topic: {
      path: ':topic',
      getHref: (topic: string) => `/topics/${topic}`,
      latest: {
        path: ':topic/latest',
        getHref: (topic: string) => `/topics/${topic}/latest`,
      },
      top: {
        path: ':topic/top',
        getHref: (topic: string) => `/topics/${topic}/top`,
      },
      trending: {
        path: ':topic/trending',
        getHref: (topic: string) => `/topics/${topic}/trending`,
      },
    },
  },

  // Auth
  auth: {
    register: {
      path: '/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },
} as const;

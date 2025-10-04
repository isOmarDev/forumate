export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  popular: {
    path: '/popular',
    getHref: () => '/popular',
  },
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
  topics: {
    root: {
      path: '/topics',
      getHref: () => '/topics',
    },
    newAndUpdates: {
      path: '/topics/new_and_updates',
      getHref: () => '/topics/new_and_updates',
    },
    ideasAndDiscussions: {
      path: '/topics/ideas_and_discussions',
      getHref: () => '/topics/ideas_and_discussions',
    },
    questionsAndHelp: {
      path: '/topics/questions_and_help',
      getHref: () => '/topics/questions_and_help',
    },
    guidesAndResources: {
      path: '/topics/guides_and_Resources',
      getHref: () => '/topics/guides_and_Resources',
    },
  },
} as const;

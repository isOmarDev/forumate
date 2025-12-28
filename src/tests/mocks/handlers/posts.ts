import { http, HttpResponse } from 'msw';

import { env } from '@/config/env';
import type { SORT_LABELS } from '@/features/posts/components/sort-posts';

import { db } from '../db';
import { networkDelay, sanitizeUser } from '../utils';

type PostFindManyOptions = Parameters<typeof db.post.findMany>[0];
type PostOrderBy = PostFindManyOptions['orderBy'];

const POSTS_ORDER_BY: Record<keyof typeof SORT_LABELS, PostOrderBy> =
  {
    latest: { createdAt: 'desc' },
    top: { createdAt: 'asc' },
    trending: { createdAt: 'asc' },
  };

export const postsHandlers = [
  http.get(`${env.APP_API_URL}/posts`, async ({ request }) => {
    await networkDelay();

    try {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page') || 1);
      const sortBy: keyof typeof SORT_LABELS =
        (url.searchParams.get(
          'sortBy',
        ) as keyof typeof SORT_LABELS) || 'latest';

      const totalPosts = db.post.count();

      const totalPages = Math.ceil(totalPosts / 10);

      const posts = db.post
        .findMany({
          take: 10,
          skip: 10 * (page - 1),
          orderBy: POSTS_ORDER_BY[sortBy],
        })
        .map(({ authorId, ...post }) => {
          const author = db.user.findFirst({
            where: {
              id: {
                equals: authorId,
              },
            },
          });

          return {
            ...post,
            author: author ? sanitizeUser(author) : {},
          };
        });

      return HttpResponse.json({
        data: posts,
        meta: {
          page,
          total: totalPosts,
          totalPages,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),
];

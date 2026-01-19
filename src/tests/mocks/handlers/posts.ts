import { http, HttpResponse } from 'msw';

import { env } from '@/config/env';
import { SORT_LABELS } from '@/features/posts/consts/sort';

import { db } from '../db';
import { networkDelay, sanitizeUser } from '../utils';

type PostFindManyOptions = Parameters<typeof db.post.findMany>[0];
type PostOrderBy = PostFindManyOptions['orderBy'];
type PostsWhere = PostFindManyOptions['where'];

const POSTS_ORDER_BY: Record<keyof typeof SORT_LABELS, PostOrderBy> =
  {
    latest: { createdAt: 'desc' },
    top: { createdAt: 'asc' },
    trending: { createdAt: 'asc' },
  };

const POSTS_PER_PAGE = 5;

export const postsHandlers = [
  http.get(`${env.APP_API_URL}/posts`, async ({ request }) => {
    await networkDelay();

    try {
      const url = new URL(request.url);

      const page = Number(url.searchParams.get('page') || 1);
      const sortBy = url.searchParams.get('sortBy') || 'latest';
      const topicSlug = url.searchParams.get('topic');

      const where: PostsWhere = {
        ...(topicSlug && { topic: { slug: { equals: topicSlug } } }),
      };

      const totalPosts = db.post.count({ where });
      const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

      const posts = db.post
        .findMany({
          where,
          take: POSTS_PER_PAGE,
          skip: POSTS_PER_PAGE * (page - 1),
          orderBy: POSTS_ORDER_BY[sortBy as keyof typeof SORT_LABELS],
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

import { useLocation } from 'react-router';

import { ContentLayout } from '@/components/layouts/content-layout';
import { Head, type HeadProps } from '@/components/seo/head';
import { Stack } from '@/components/ui/stack';
import { paths } from '@/config/paths';
import {
  SortPosts,
  SORT_LABELS,
} from '@/features/posts/components/sort-posts';

const HEAD: HeadProps = {
  title: 'Home',
  description:
    'Create conversations, share ideas, and connect with the community.',
};

const topPostsPath = paths.posts.top.path;
const trendingPostsPath = paths.posts.trending.path;

const HomeRoute = () => {
  const { pathname } = useLocation();

  const sortLabel = pathname.includes(topPostsPath)
    ? SORT_LABELS.top
    : pathname.includes(trendingPostsPath)
      ? SORT_LABELS.trending
      : SORT_LABELS.latest;

  return (
    <>
      <Head {...HEAD} />
      <ContentLayout title={`${sortLabel} posts`} data-testid="home">
        <Stack>
          <SortPosts />
        </Stack>
      </ContentLayout>
    </>
  );
};

export default HomeRoute;

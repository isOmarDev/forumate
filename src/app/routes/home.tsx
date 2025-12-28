import { ContentLayout } from '@/components/layouts/content-layout';
import { PageLayout } from '@/components/layouts/page-layout';
import { Head, type HeadProps } from '@/components/seo/head';
import { PostsFeed } from '@/features/posts/components/posts-feed';
import { SortPosts } from '@/features/posts/components/sort-posts';

const HEAD: HeadProps = {
  title: 'Home',
  description:
    'Create conversations, share ideas, and connect with the community.',
};

const HomeRoute = () => {
  return (
    <>
      <Head {...HEAD} />
      <PageLayout>
        <ContentLayout title="Feed" hideTitle data-testid="home">
          <div className="mb-12 pt-5">
            <SortPosts />
          </div>
          <PostsFeed />
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default HomeRoute;

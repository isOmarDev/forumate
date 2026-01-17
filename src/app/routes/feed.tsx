import { ContentLayout } from '@/components/layouts/content-layout';
import { PageLayout } from '@/components/layouts/page-layout';
import { Head, type HeadProps } from '@/components/seo/head';
import { PostsList } from '@/features/posts/components/posts-list';
import { usePostSort } from '@/features/posts/hooks/use-post-sort';
import { FeedLayout } from '@/features/posts/layouts/feed-layout';

const HEAD: HeadProps = {
  title: 'Feed',
  description:
    'Create conversations, share ideas, and connect with the community.',
};

const FeedRoute = () => {
  const sort = usePostSort();

  return (
    <>
      <Head {...HEAD} />
      <PageLayout>
        <ContentLayout
          className="grow pt-0"
          title="Feed"
          hideTitle
          data-testid="home"
        >
          <FeedLayout>
            <PostsList sortBy={sort} />
          </FeedLayout>
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default FeedRoute;

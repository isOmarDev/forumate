import React from 'react';
import { useParams } from 'react-router';

import { ContentLayout } from '@/components/layouts/content-layout';
import { PageLayout } from '@/components/layouts/page-layout';
import { Head } from '@/components/seo/head';
import { PostsList } from '@/features/posts/components/posts-list';
import { usePostSort } from '@/features/posts/hooks/use-post-sort';
import { FeedLayout } from '@/features/posts/layouts/feed-layout';
import { capitalize } from '@/utils/name-utils';

const HEAD_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const TopicFeedRoute = () => {
  const params = useParams();
  const topic = params.topic as string;
  const sort = usePostSort();

  const pageTitle = React.useMemo(
    () => capitalize(topic.split('-').join(' ').replace('and', '&')),
    [topic],
  );

  return (
    <>
      <Head title={pageTitle} description={HEAD_DESCRIPTION} />
      <PageLayout>
        <ContentLayout
          className="mt-6 grow"
          title={pageTitle}
          data-testid="topic-feed"
        >
          <FeedLayout>
            <PostsList sortBy={sort} topic={topic} variant="topic" />
          </FeedLayout>
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default TopicFeedRoute;

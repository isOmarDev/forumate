import { Head } from '@/components/seo/head';

const HEAD_TITLE = 'Topics';
const HEAD_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const TopicsRoute = () => {
  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <div data-testid="topics">
        <h1>topics</h1>
      </div>
    </>
  );
};

export default TopicsRoute;

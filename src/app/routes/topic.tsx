import { Head } from '@/components/seo/head';

const HEAD_TITLE = 'Topics';
const HEAD_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const TopicRoute = () => {
  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <div data-testid="topic">{/* <h1>home here</h1> */}</div>
    </>
  );
};

export default TopicRoute;

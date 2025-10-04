import { Head } from '@/components/seo/head';

const HEAD_TITLE = 'Home';
const HEAD_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const HomeRoute = () => {
  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <div data-testid="home">{/* <h1>home here</h1> */}</div>
    </>
  );
};

export default HomeRoute;

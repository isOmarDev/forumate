import { Head } from '@/components/seo/head';

const HEAD_TITLE = 'Popular posts';
const HEAD_DESCRIPTION = 'Popular posts';

const PopularRoute = () => {
  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <div data-testid="popular">{/* <h1>home here</h1> */}</div>
    </>
  );
};

export default PopularRoute;

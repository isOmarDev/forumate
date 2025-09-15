import { Head } from '@/components/seo/head';
import { Button } from '@/components/ui/button';
import { useLogout } from '@/lib/auth';

const HEAD_TITLE = 'Home';
const HEAD_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const HomeRoute = () => {
  const logout = useLogout();

  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <div data-testid="home">
        <h1>home here</h1>
        <Button onClick={() => logout.mutate({})}>
          Logout madafaka
        </Button>
      </div>
    </>
  );
};

export default HomeRoute;

import { AuthLayout } from '@/components/layouts/auth-layout';
import { Head } from '@/components/seo/head';

const HEAD_TITLE = 'Join Forumate';
const HEAD_DESCRIPTION =
  'Create an account to start conversations, share ideas, and connect with the community.';
const PAGE_TITLE = 'Join Forumate';
const PAGE_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const RegisterRoute = () => {
  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <AuthLayout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
        register here
      </AuthLayout>
    </>
  );
};

export default RegisterRoute;

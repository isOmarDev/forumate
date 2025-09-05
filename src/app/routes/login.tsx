import { AuthLayout } from '@/components/layouts/auth-layout';
import { Head } from '@/components/seo/head';

const HEAD_TITLE = 'Welcome';
const HEAD_DESCRIPTION = 'Log into your account';
const PAGE_TITLE = 'Welcome back';
const PAGE_DESCRIPTION = 'Log into your account';

const LoginRoute = () => {
  return (
    <>
      <Head title={HEAD_TITLE} description={HEAD_DESCRIPTION} />
      <AuthLayout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
        login here
      </AuthLayout>
    </>
  );
};

export default LoginRoute;

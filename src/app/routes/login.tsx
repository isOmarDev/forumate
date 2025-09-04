import { AuthLayout } from '@/components/layouts/auth-layout';

const TITLE = 'Welcome back';
const DESCRIPTION = 'Log into your account';

const LoginRoute = () => {
  return (
    <AuthLayout title={TITLE} description={DESCRIPTION}>
      login here
    </AuthLayout>
  );
};

export default LoginRoute;

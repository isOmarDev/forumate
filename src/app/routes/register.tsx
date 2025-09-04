import { AuthLayout } from '@/components/layouts/auth-layout';

const TITLE = 'Join Forumate';
const DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';

const RegisterRoute = () => {
  return (
    <AuthLayout title={TITLE} description={DESCRIPTION}>
      register here
    </AuthLayout>
  );
};

export default RegisterRoute;

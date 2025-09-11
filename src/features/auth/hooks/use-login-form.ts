import { useEffect } from 'react';

import { useZodForm } from '@/components/ui/form';
import { useRedirect } from '@/hooks/use-redirect';
import { loginInputSchema, useLogin } from '@/lib/auth';

export const useLoginForm = () => {
  const zodForm = useZodForm(loginInputSchema);
  const { setFocus, setError, handleSubmit } = zodForm;

  const redirect = useRedirect();

  const login = useLogin({
    onSuccess: () => {
      redirect();
    },
    onError: () => {
      setError('root', {
        type: 'server',
        message: 'Invalid email or password',
      });
    },
  });

  const onSubmit = handleSubmit((data) => login.mutate(data));

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return {
    zodForm,
    loginUserMutation: login,
    onSubmit,
  };
};

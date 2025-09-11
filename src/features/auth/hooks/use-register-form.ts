import { useEffect } from 'react';

import { useZodForm } from '@/components/ui/form';
import { useRedirect } from '@/hooks/use-redirect';
import { registerInputSchema, useRegister } from '@/lib/auth';

export const useRegisterForm = () => {
  const zodForm = useZodForm(registerInputSchema);
  const { setFocus, setError, handleSubmit } = zodForm;

  const redirect = useRedirect();

  const registerUser = useRegister({
    onSuccess: () => {
      redirect();
    },
    onError: () => {
      setError('root', {
        type: 'server',
        message: 'Invalid Fields',
      });
    },
  });

  const onSubmit = handleSubmit((data) => registerUser.mutate(data));

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  return {
    zodForm,
    registerUserMutation: registerUser,
    onSubmit,
  };
};

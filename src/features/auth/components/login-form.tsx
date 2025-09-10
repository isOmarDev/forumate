import { useEffect } from 'react';
import { type SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, Field, Input, useZodForm } from '@/components/ui/form';
import { paths } from '@/config/paths';
import {
  loginInputSchema,
  useLogin,
  type LoginInput,
} from '@/lib/auth';

import { AuthRedirect } from '../shared';

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess });

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useZodForm(loginInputSchema);

  const onSubmit: SubmitHandler<LoginInput> = (data) =>
    login.mutate(data);

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <Field id="email" label="Email" error={errors.email}>
          <Input
            type="email"
            placeholder="m@example.com"
            registration={register('email')}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field id="password" label="Password" error={errors.password}>
          <Input
            type="password"
            registration={register('password')}
            aria-invalid={!!errors.password}
          />
        </Field>

        <Button type="submit" isLoading={login.isPending}>
          Login
        </Button>
      </div>

      <AuthRedirect
        message="Don't have an account?"
        linkText="Sign up"
        to={paths.auth.register.path}
      />
    </Form>
  );
};

import { useEffect } from 'react';
import { type SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, Field, Input, useZodForm } from '@/components/ui/form';
import { Stack } from '@/components/ui/stack';
import { paths } from '@/config/paths';
import {
  registerInputSchema,
  useRegister,
  type RegisterInput,
} from '@/lib/auth';

import { AuthRedirect } from '../shared';

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const registerUser = useRegister({ onSuccess });

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useZodForm(registerInputSchema);

  const onSubmit: SubmitHandler<RegisterInput> = (data) =>
    registerUser.mutate(data);

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <Stack gap={4} align="start">
          <Field
            id="first-name"
            label="First name"
            error={errors.firstName}
          >
            <Input
              type="text"
              registration={register('firstName')}
              aria-invalid={!!errors.firstName}
            />
          </Field>

          <Field
            id="last-name"
            label="Last name"
            error={errors.lastName}
          >
            <Input
              type="text"
              registration={register('lastName')}
              aria-invalid={!!errors.lastName}
            />
          </Field>
        </Stack>

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

        <Button type="submit" disabled={registerUser.isPending}>
          Register
        </Button>
      </div>

      <AuthRedirect
        message="Already have an account?"
        linkText="Log in"
        to={paths.auth.login.path}
      />
    </Form>
  );
};

import { Button } from '@/components/ui/button';
import { Form, Field, Input } from '@/components/ui/form';
import { Error } from '@/components/ui/form/error';
import { Stack } from '@/components/ui/stack';
import { paths } from '@/config/paths';

import { useRegisterForm } from '../hooks/use-register-form';
import { AuthRedirect } from '../shared';

export const RegisterForm = () => {
  const { zodForm, registerUserMutation, onSubmit } =
    useRegisterForm();

  const {
    register,
    formState: { errors },
  } = zodForm;

  return (
    <Form onSubmit={onSubmit} data-testid="register-form">
      <Error
        className="rounded-sm bg-red-100 p-2"
        message={errors.root?.message}
      />

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

        <Button
          type="submit"
          disabled={registerUserMutation.isPending}
        >
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

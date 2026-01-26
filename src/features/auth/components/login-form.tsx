import { Button } from '@/components/ui/button';
import { Form, Field, Input } from '@/components/ui/form';
import { Error } from '@/components/ui/form/error';
import { paths } from '@/config/paths';

import { useLoginForm } from '../hooks/use-login-form';
import { AuthRedirect } from '../shared';

export const LoginForm = () => {
  const { zodForm, loginUserMutation, onSubmit } = useLoginForm();

  const {
    register,
    formState: { errors },
  } = zodForm;

  return (
    <Form onSubmit={onSubmit} data-testid="login-form">
      <Error
        className="rounded-sm bg-red-100 p-2"
        message={errors.root?.message}
      />

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

        <Button type="submit" isLoading={loginUserMutation.isPending}>
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

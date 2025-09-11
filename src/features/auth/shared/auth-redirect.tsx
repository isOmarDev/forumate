import { Link } from 'react-router';

type AuthRedirectProps = {
  message: string;
  linkText: string;
  to: string;
};

export const AuthRedirect = ({
  message,
  linkText,
  to,
}: AuthRedirectProps) => {
  return (
    <p className="text-center text-sm">
      {message}{' '}
      <Link to={to} className="underline underline-offset-4">
        {linkText}
      </Link>
    </p>
  );
};

import { cn } from '@/lib/cn';

export type ErrorProps = React.ComponentProps<'div'> & {
  message?: string | null;
};

export const Error = ({
  className,
  message,
  ...props
}: ErrorProps) => {
  if (!message) return null;

  return (
    <div
      className={cn('text-xs font-medium text-red-500', className)}
      role="alert"
      aria-label={message}
      {...props}
    >
      {message}
    </div>
  );
};

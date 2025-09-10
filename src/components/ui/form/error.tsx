export type ErrorProps = {
  message?: string | null;
};

export const Error = ({ message }: ErrorProps) => {
  if (!message) return null;

  return (
    <div
      role="alert"
      aria-label={message}
      className="text-xs font-medium text-red-500"
    >
      {message}
    </div>
  );
};

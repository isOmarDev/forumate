import { cn } from '@/lib/cn';

export const Empty = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="empty"
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center gap-6',
        'rounded-lg border-dashed p-6 md:p-12',
        'text-center text-balance',
        className,
      )}
      {...props}
    />
  );
};

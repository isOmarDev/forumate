import { cn } from '@/lib/cn';
import type { WithTestId } from '@/types/rtl';

type ContentLayoutProps = React.ComponentProps<'div'> &
  WithTestId & { title?: string; hideTitle?: boolean };

export const ContentLayout = ({
  children,
  title,
  hideTitle = false,
  ...props
}: ContentLayoutProps) => {
  return (
    <div {...props}>
      <div
        className={cn(
          'px-4 py-6 sm:px-6 md:px-6',
          hideTitle && 'hidden',
        )}
      >
        <h1 className="text-3xl font-black">{title}</h1>
      </div>

      <div className="px-4 py-6 sm:px-6 md:px-8">{children}</div>
    </div>
  );
};

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
      <div className={cn('px-5 pt-6', hideTitle && 'hidden py-0')}>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      <div className="px-5 py-6">{children}</div>
    </div>
  );
};

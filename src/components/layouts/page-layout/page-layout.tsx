import { cn } from '@/lib/cn';
import type { WithTestId } from '@/types/rtl';

type PageLayoutProps = React.ComponentProps<'div'> &
  WithTestId & {
    sidebar?: React.ReactNode;
    stickySidebar?: boolean;
  };

export const PageLayout = ({
  children,
  sidebar,
  stickySidebar = true,
  className = '',
  ...props
}: PageLayoutProps) => {
  return (
    <div
      className={cn('mx-auto flex w-full max-w-6xl', className)}
      {...props}
    >
      <main className="min-w-0 flex-1">{children}</main>

      {sidebar && (
        <aside
          className={cn(
            'hidden w-80 shrink-0 lg:block',
            stickySidebar && 'sticky top-6',
          )}
        >
          {sidebar}
        </aside>
      )}
    </div>
  );
};

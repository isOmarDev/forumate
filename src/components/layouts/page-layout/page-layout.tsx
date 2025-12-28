import type { WithTestId } from '@/types/rtl';

type PageLayoutProps = React.ComponentProps<'div'> & WithTestId;

export const PageLayout = ({
  children,
  ...props
}: PageLayoutProps) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl" {...props}>
      {children}
    </div>
  );
};

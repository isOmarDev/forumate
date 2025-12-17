import type { WithTestId } from '@/types/rtl';

type ContentLayoutProps = React.ComponentProps<'div'> &
  WithTestId & { title?: string };

export const ContentLayout = ({
  children,
  title,
  ...props
}: ContentLayoutProps) => {
  return (
    <div className="mx-auto w-full max-w-5xl py-6" {...props}>
      <div className="px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-black">{title}</h1>
      </div>

      <div className="px-4 py-6 sm:px-6 md:px-8">{children}</div>
    </div>
  );
};

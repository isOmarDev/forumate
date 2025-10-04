import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/cn';

export const SidebarGroupAction = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'absolute top-3.5 right-3 flex items-center justify-center [&>svg]:shrink-0',
        'aspect-square w-5 p-0 outline-hidden [&>svg]:size-4',
        'rounded-md text-sidebar-foreground ring-sidebar-ring',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        'transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2',
        className,
      )}
      {...props}
    />
  );
};

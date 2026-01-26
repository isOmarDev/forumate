import { cn } from '@/lib/cn';

export const SidebarMenuSub = ({
  className,
  ...props
}: React.ComponentProps<'ul'>) => {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'flex flex-col gap-1',
        'mx-3.5 min-w-0 border-l border-sidebar-border px-2.5 py-0.5',
        'translate-x-px group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
};

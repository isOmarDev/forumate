import { cn } from '@/lib/cn';

export const SidebarGroupContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div
    data-slot="sidebar-group-content"
    data-sidebar="group-content"
    className={cn('w-full text-sm', className)}
    {...props}
  />
);

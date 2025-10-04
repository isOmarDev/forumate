import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { useSidebar } from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/cn';

const sidebarMenuButtonVariants = cva(
  cn(
    'group/menu-button peer/menu-button flex w-full items-center gap-2 overflow-hidden',
    'rounded-md p-3 ring-sidebar-ring outline-hidden',
    'text-left text-sm',
    'transition-[width,height,padding]',
    // Sidebar states
    'group-has-data-[sidebar=menu-action]/menu-item:pr-8',
    'group-data-[collapsible=icon]:size-[47px]! group-data-[collapsible=icon]:p-[12px]',
    // Interactions
    'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
    'focus-visible:ring-2',
    'active:bg-sidebar-accent active:text-sidebar-accent-foreground',
    // Disabled states
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-disabled:pointer-events-none aria-disabled:opacity-50',
    // Active / open states
    'data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground',
    'data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground',
    // Children
    '[&>span:last-child]:truncate [&>svg]:size-6 [&>svg]:shrink-0',
  ),
  {
    variants: {
      variant: {
        default:
          'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-transparent hover:shadow-[0_0_0_1px_var(--sidebar-border-hover)]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 rounded-xl text-sm',
      },
      animateIcon: {
        true: '[&>svg]:group-hover/menu-button:animate-pop',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animateIcon: false,
    },
  },
);

export const SidebarMenuButton = ({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  animateIcon,
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) => {
  const Comp = asChild ? Slot : 'button';
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        sidebarMenuButtonVariants({
          variant,
          size,
          animateIcon,
          className,
        }),
      )}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
};

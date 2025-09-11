import { cva, type VariantProps } from 'class-variance-authority';

// Icon container variants
const iconContainerVariants = cva(
  'flex items-center justify-center rounded-md',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14',
      },
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary:
          'border border-border bg-transparent text-foreground',
        inverted: 'bg-background text-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

// Text variants
const textVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    variant: {
      primary: 'text-foreground',
      secondary: 'text-foreground',
      inverted: 'text-background',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

// Icon variants
const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
      xl: 'size-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type LogoVariantsProps = VariantProps<typeof iconContainerVariants> &
  VariantProps<typeof textVariants> &
  VariantProps<typeof iconVariants>;

export {
  iconContainerVariants,
  textVariants,
  iconVariants,
  type LogoVariantsProps,
};

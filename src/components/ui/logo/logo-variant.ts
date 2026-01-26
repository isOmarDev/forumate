import { cva, type VariantProps } from 'class-variance-authority';

const logoVariants = cva('flex items-center justify-center gap-2', {
  variants: {
    orientation: { horizontal: 'flex-row', veritcal: 'flex-col' },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

// Icon container variants
const logoIconWrapperVariants = cva(
  'flex items-center justify-center gap-2 rounded-lg',
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
        ghost: 'bg-transparent text-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

// Icon variants
const logoIconVariants = cva('', {
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

// Text variants
const logoTextVariants = cva('', {
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

type LogoVariantsProps = VariantProps<typeof logoVariants>;
type LogoIconWrapperVariantsProps = VariantProps<
  typeof logoIconWrapperVariants
>;
type LogoIconVariantsProps = VariantProps<typeof logoIconVariants>;
type LogoTextVariantsProps = VariantProps<typeof logoTextVariants>;

export {
  logoVariants,
  logoIconWrapperVariants,
  logoIconVariants,
  logoTextVariants,
  type LogoVariantsProps,
  type LogoIconWrapperVariantsProps,
  type LogoIconVariantsProps,
  type LogoTextVariantsProps,
};

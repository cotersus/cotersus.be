import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    variant: {
      h1: 'text-5xl sm:text-6xl lg:text-7xl leading-tight',
      h2: 'text-4xl sm:text-5xl',
      h3: 'text-2xl',
      h4: 'text-xl',
    },
    gradient: {
      true: 'bg-gradient-brand bg-clip-text text-transparent',
      false: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'h2',
    gradient: false,
  },
});

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps<T extends HeadingElement = 'h2'>
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: T;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps<HeadingElement>>(
  ({ className, variant, gradient, as, ...props }, ref) => {
    const Component = as || (variant as HeadingElement) || 'h2';
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant, gradient, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

const textVariants = cva('text-muted-foreground', {
  variants: {
    variant: {
      default: 'text-base leading-relaxed text-muted-foreground/90',
      lead: 'text-xl sm:text-2xl',
      small: 'text-sm',
      tiny: 'text-xs text-muted-foreground/70',
    },
    italic: {
      true: 'italic',
    },
  },
  defaultVariants: {
    variant: 'default',
    italic: false,
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, italic, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, italic, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

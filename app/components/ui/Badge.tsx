import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-secondary-foreground',
        interactive:
          'bg-secondary text-secondary-foreground hover:bg-brand-orange hover:text-white',
        outline: 'border border-border text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  href?: string;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(badgeVariants({ variant: 'interactive', className }))}
        >
          {children}
        </a>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Badge.displayName = 'Badge';

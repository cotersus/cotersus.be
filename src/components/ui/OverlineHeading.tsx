import { cn } from '@/lib/utils';

interface OverlineHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function OverlineHeading({
  as: Component = 'h4',
  className,
  ...props
}: OverlineHeadingProps) {
  return (
    <Component
      className={cn(
        'mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-500',
        className,
      )}
      {...props}
    />
  );
}

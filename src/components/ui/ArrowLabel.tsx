import { cn } from '@/lib/utils';

interface ArrowLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 'sm';
}

export function ArrowLabel({ className, size = 'sm', ...props }: ArrowLabelProps) {
  return (
    <span
      className={cn(
        'link-arrow inline-block font-semibold uppercase text-foreground',
        size === 'xs' ? 'text-xs tracking-[0.17em]' : 'text-sm tracking-[0.18em]',
        className,
      )}
      {...props}
    />
  );
}

import { cn } from '@/lib/utils';

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export function SectionShell({
  className,
  containerClassName,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section className={cn('section-divider px-4 py-16 sm:px-6 lg:px-8', className)} {...props}>
      <div className={cn('mx-auto max-w-7xl', containerClassName)}>{children}</div>
    </section>
  );
}

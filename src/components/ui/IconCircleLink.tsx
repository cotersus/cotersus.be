import { cn } from '@/lib/utils';

type IconCircleLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function IconCircleLink({ className, children, ...props }: IconCircleLinkProps) {
  return (
    <a
      className={cn(
        'flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary hover:text-[#111417]',
        className,
      )}
      target={props.target ?? '_blank'}
      rel={props.rel ?? 'noopener noreferrer'}
      {...props}
    >
      {children}
    </a>
  );
}

import { cn } from '@/lib/utils';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  showArrow?: boolean;
}

export function ExternalLink({
  className,
  children,
  showArrow = false,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        showArrow && 'link-arrow',
        'transition-colors duration-300 hover:text-primary',
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

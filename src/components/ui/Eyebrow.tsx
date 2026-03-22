import { cn } from '@/lib/utils';

type EyebrowProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return <p className={cn('eyebrow', className)} {...props} />;
}

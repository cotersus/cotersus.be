import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
}: SectionIntroProps) {
  return (
    <div className={className}>
      <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          'font-display mt-4 text-4xl uppercase leading-none text-foreground sm:text-5xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-base leading-8 text-muted-foreground', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { LabelValue } from '@/components/ui/LabelValue';

interface LabelValueItem {
  label: string;
  value: string;
}

interface LabelValueGridProps {
  items: readonly LabelValueItem[];
  className?: string;
}

export function LabelValueGrid({ items, className }: LabelValueGridProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <LabelValue key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
}

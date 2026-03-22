interface LabelValueProps {
  label: string;
  value: string;
  labelClassName?: string;
  valueClassName?: string;
}

export function LabelValue({
  label,
  value,
  labelClassName,
  valueClassName,
}: LabelValueProps) {
  return (
    <div>
      <p
        className={
          labelClassName ??
          'text-[0.72rem] uppercase tracking-[0.26em] text-slate-500 dark:text-stone-500'
        }
      >
        {label}
      </p>
      <p className={valueClassName ?? 'mt-2 text-sm text-slate-800 dark:text-stone-200'}>
        {value}
      </p>
    </div>
  );
}

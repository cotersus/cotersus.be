interface ActionButton {
  href: string;
  label: string;
}

interface ActionButtonsProps {
  primary: ActionButton;
  secondary: ActionButton;
}

export function ActionButtons({ primary, secondary }: ActionButtonsProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <a
        href={primary.href}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111417] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
      >
        {primary.label}
      </a>
      <a
        href={secondary.href}
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/35 hover:bg-foreground/5 dark:border-white/15 dark:text-white dark:hover:border-white/35 dark:hover:bg-white/5"
      >
        {secondary.label}
      </a>
    </div>
  );
}

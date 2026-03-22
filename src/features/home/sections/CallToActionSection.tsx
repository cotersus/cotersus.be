import { ActionButtons } from '@/components/ui/ActionButtons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SectionShell } from '@/components/ui/SectionShell';
import { Text } from '@/components/ui/Typography';
import type { Dictionary } from '@/app/[lang]/dictionaries';

interface CallToActionSectionProps {
  content: Dictionary['home']['cta'];
}

export function CallToActionSection({ content }: CallToActionSectionProps) {
  return (
    <SectionShell className="py-20">
      <Reveal className="rounded-[2rem] bg-[#ebe2d1] px-6 py-10 text-foreground sm:px-10 sm:py-14 dark:bg-[#161a1f] dark:text-stone-100">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            className="max-w-3xl"
            titleClassName="text-4xl text-slate-950 dark:text-white sm:text-6xl"
            eyebrowClassName="text-slate-500 dark:text-stone-400"
          />
          <div>
            <Text variant="bodyBase" className="text-slate-700 dark:text-stone-300">{content.description}</Text>
            <div className="mt-7">
              <ActionButtons
                primary={content.primaryCta}
                secondary={content.secondaryCta}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

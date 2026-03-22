import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SectionShell } from '@/components/ui/SectionShell';
import { Text } from '@/components/ui/Typography';
import { process, processContent } from '@/features/home/content';

export function ProcessSection() {
  return (
    <SectionShell className="py-20">
      <Reveal className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionIntro
          eyebrow={processContent.eyebrow}
          title={processContent.title}
          description={processContent.description}
          className="lg:sticky lg:top-28"
          titleClassName="text-3xl sm:text-6xl"
        />

        <div className="grid gap-6">
          {process.map((step, index) => (
            <Reveal
              key={step.label}
              delayMs={90 + index * 90}
              className={`grid gap-4 pt-6 md:grid-cols-[auto_1fr_auto] md:items-start ${
                index === 0 ? '' : 'border-t border-border/70'
              }`}
            >
              <p className="font-display text-3xl uppercase text-primary">{step.label}</p>
              <div className="max-w-xl">
                <h3 className="font-display text-3xl uppercase text-foreground">{step.title}</h3>
                <Text variant="bodySm" className="mt-3">{step.body}</Text>
              </div>
              <Text variant="metaSm" className="text-sm tracking-[0.2em]">{step.phase}</Text>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

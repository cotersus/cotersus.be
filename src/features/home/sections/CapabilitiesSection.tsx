import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SectionShell } from '@/components/ui/SectionShell';
import { Text } from '@/components/ui/Typography';
import type { Dictionary } from '@/app/[lang]/dictionaries';

interface CapabilitiesSectionProps {
  content: Dictionary['home']['capabilities'];
}

export function CapabilitiesSection({ content }: CapabilitiesSectionProps) {
  return (
    <SectionShell>
      <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionIntro
          eyebrow={content.eyebrow}
          title={content.title}
          className="max-w-md"
        />
        <div className="grid gap-8 border-t border-border/70 pt-6 md:grid-cols-3 md:gap-6 md:border-t-0 md:pt-0">
          {content.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delayMs={100 + index * 90}
              className="border-t border-border/70 pt-5 md:border-t-0 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <h3 className="font-display text-2xl uppercase text-foreground">
                {pillar.title}
              </h3>
              <Text variant="bodySm" className="mt-3">{pillar.body}</Text>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

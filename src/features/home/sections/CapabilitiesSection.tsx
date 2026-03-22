import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SectionShell } from '@/components/ui/SectionShell';
import { Text } from '@/components/ui/Typography';
import { capabilityContent, capabilityPillars } from '@/features/home/content';

export function CapabilitiesSection() {
  return (
    <SectionShell>
      <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionIntro
          eyebrow={capabilityContent.eyebrow}
          title={capabilityContent.title}
          className="max-w-md"
        />
        <div className="grid gap-8 border-t border-border/70 pt-6 md:grid-cols-3 md:gap-6 md:border-t-0 md:pt-0">
          {capabilityPillars.map((pillar, index) => (
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

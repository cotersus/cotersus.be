import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SectionShell } from '@/components/ui/SectionShell';
import { Text } from '@/components/ui/Typography';
import { technologiesContent } from '@/features/home/content';
import type { DisplayTechnology } from '@/features/home/types';

interface TechnologiesSectionProps {
  displayTechnologies: DisplayTechnology[];
}

export function TechnologiesSection({ displayTechnologies }: TechnologiesSectionProps) {
  return (
    <SectionShell>
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow={technologiesContent.eyebrow}
            title={technologiesContent.title}
            className="max-w-2xl"
          />
          <Text variant="bodySm" className="max-w-xl">{technologiesContent.description}</Text>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {displayTechnologies.map((item, index) => (
            <Reveal key={item.key} delayMs={40 + index * 35} className="inline-flex">
              <a
                href={item.tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex h-8 w-8 items-center justify-center [&_svg]:h-5 [&_svg]:w-5">
                  {item.tech.icon}
                </span>
                <span className="font-medium">{item.tech.name}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

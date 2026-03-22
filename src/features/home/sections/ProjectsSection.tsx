import Image from 'next/image';

import { ExternalLink } from '@/components/ui/ExternalLink';
import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SectionShell } from '@/components/ui/SectionShell';
import { Text } from '@/components/ui/Typography';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import type { LocalizedProject } from '@/features/home/types';

interface ProjectsSectionProps {
  content: Dictionary['home']['projects'];
  featuredProject: LocalizedProject;
  listedSelectedProjects: LocalizedProject[];
  getProjectClientsLabel: (clientKeys: LocalizedProject['clients']) => string;
}

export function ProjectsSection({
  content,
  featuredProject,
  listedSelectedProjects,
  getProjectClientsLabel,
}: ProjectsSectionProps) {
  return (
    <SectionShell id="projects" className="py-20">
      <Reveal>
        <SectionIntro
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          className="max-w-2xl"
          titleClassName="text-3xl sm:text-6xl"
        />

        <div className="mt-10 grid gap-7 border-t border-border/70 pt-7 sm:mt-12 sm:gap-10 sm:pt-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <ExternalLink href={featuredProject.url} className="group">
            <div className="relative overflow-hidden rounded-[2.4rem] bg-[#161a1f] shadow-[0_28px_60px_rgba(15,23,42,0.16)] dark:shadow-[0_28px_60px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[1.08]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/24" />
              </div>
            </div>
          </ExternalLink>

          <div className="flex flex-col gap-5 lg:pt-2">
            <div>
              <SectionIntro
                eyebrow={content.featuredEyebrow}
                title={featuredProject.title}
                className="max-w-md"
                titleClassName="text-3xl sm:text-5xl"
              />
              <Text variant="metaMd" className="mt-5">{featuredProject.role}</Text>
              <Text variant="metaSm" className="mt-3">{getProjectClientsLabel(featuredProject.clients)}</Text>
              <Text variant="bodyBase" className="mt-4 max-w-md sm:mt-5">{featuredProject.description}</Text>
              <ExternalLink
                href={featuredProject.url}
                showArrow
                className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
              >
                {content.viewProjectLabel}
              </ExternalLink>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border-t border-border/70">
          {listedSelectedProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delayMs={70 + index * 55}
              className="border-t border-border/70 py-7"
            >
              <ExternalLink
                href={project.url}
                className="group grid grid-cols-[6.9rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-5 md:grid-cols-[10rem_1fr] md:gap-6 lg:grid-cols-[12rem_1fr_auto]"
              >
                <div className="relative overflow-hidden rounded-[1.2rem] bg-card sm:rounded-[1.4rem] md:rounded-[1.6rem]">
                  <div className="relative aspect-[1.1]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="max-w-2xl">
                  <Text variant="metaXs" className="tracking-[0.2em] sm:tracking-[0.24em]">{project.role}</Text>
                  <h3 className="font-display mt-2 text-[2rem] uppercase leading-[0.94] text-foreground sm:mt-3 sm:text-3xl">
                    {project.title}
                  </h3>
                  <Text variant="metaXs" className="mt-2 sm:mt-3">{getProjectClientsLabel(project.clients)}</Text>
                  <Text variant="bodySm" className="mt-3 hidden sm:block">{project.description}</Text>
                  <ArrowLabel size="xs" className="mt-3 md:hidden">{content.viewProjectLabel}</ArrowLabel>
                </div>
                <div className="hidden md:block md:pt-1">
                  <ArrowLabel>{content.viewProjectLabel}</ArrowLabel>
                </div>
              </ExternalLink>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

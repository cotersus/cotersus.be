import Image from 'next/image';

import { ActionButtons } from '@/components/ui/ActionButtons';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LabelValueGrid } from '@/components/ui/LabelValueGrid';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import type { LocalizedProject } from '@/features/home/types';

interface HeroSectionProps {
  content: Dictionary['home']['hero'];
  heroProjects: LocalizedProject[];
  supportProject: LocalizedProject;
  getProjectClientsLabel: (clientKeys: LocalizedProject['clients']) => string;
}

export function HeroSection({
  content,
  heroProjects,
  supportProject,
  getProjectClientsLabel,
}: HeroSectionProps) {
  const [primaryHero, secondaryHero] = heroProjects;

  return (
    <section className="grain-overlay relative isolate overflow-hidden bg-[#efe7d8] px-4 pb-12 pt-24 text-foreground sm:px-6 sm:pb-14 sm:pt-28 dark:bg-[#111417] dark:text-stone-100 lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-32">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-[-14%] right-[-4%] h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="min-w-0 max-w-xl lg:pb-8">
          <Eyebrow className="animate-fade-in">{content.eyebrow}</Eyebrow>
          <h1 className="font-display animate-rise animate-delay-1 mt-4 max-w-full text-pretty text-[clamp(2.35rem,10vw,5.35rem)] uppercase leading-[1.05] text-slate-950 dark:text-white sm:mt-5 lg:leading-[1.02]">
            {content.title}
          </h1>
          <p className="animate-fade-in animate-delay-2 mt-5 max-w-lg text-[1.03rem] leading-7 text-slate-700 dark:text-stone-300 sm:mt-6 sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <div className="animate-fade-in animate-delay-2 mt-8">
            <ActionButtons
              primary={content.primaryCta}
              secondary={content.secondaryCta}
            />
          </div>

          <LabelValueGrid
            items={content.highlights}
            className="animate-fade-in animate-delay-3 mt-10 grid gap-5 border-t border-black/10 pt-7 sm:mt-12 sm:pt-8 sm:grid-cols-3 sm:gap-6 dark:border-white/10"
          />
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:gap-5 lg:ml-auto lg:max-w-[44rem]">
            <a
              href={primaryHero.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-hero-card animate-delay-2 relative overflow-hidden rounded-[2rem] bg-[#101418] shadow-[0_24px_60px_rgba(15,23,42,0.18)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem]"
            >
              <div className="relative aspect-[1.02] sm:aspect-[1.06]">
                <Image
                  src={primaryHero.image}
                  alt={primaryHero.alt}
                  fill
                  priority
                  className="object-cover object-center brightness-110 transition-[filter] duration-500 group-hover:brightness-125"
                />
                <div className="absolute inset-0 bg-black/18" />
              </div>

              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/80 backdrop-blur sm:left-6 sm:top-6 sm:text-[0.68rem]">
                {content.cards.featuredBadge}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                <div className="max-w-[20rem] rounded-[1.35rem] bg-[#111417]/88 p-4 backdrop-blur sm:rounded-[1.5rem] sm:p-5">
                  <p className="font-display text-[2.05rem] uppercase leading-none text-white sm:text-4xl">
                    {primaryHero.title}
                  </p>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-stone-300">
                    {getProjectClientsLabel(primaryHero.clients)}
                  </p>
                  <p className="mt-3 hidden text-sm leading-6 text-stone-200 sm:block">
                    {primaryHero.description}
                  </p>
                </div>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={secondaryHero.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-hero-card-soft animate-delay-3 overflow-hidden rounded-[1.7rem] bg-[#12161b] shadow-[0_18px_40px_rgba(15,23,42,0.14)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:rounded-[2rem]"
              >
                <div className="relative aspect-[1.16] overflow-hidden">
                  <Image
                    src={secondaryHero.image}
                    alt={secondaryHero.alt}
                    fill
                    className="object-cover transition-[filter] duration-500 group-hover:brightness-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-[#12161b]" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-200 sm:text-[0.64rem] sm:tracking-[0.22em] sm:text-stone-300">
                    {content.cards.supportingBadge}
                  </p>
                  <p className="mt-2 font-display text-[1.85rem] uppercase leading-none text-white sm:text-2xl">
                    {secondaryHero.title}
                  </p>
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-stone-200 sm:text-[0.66rem] sm:tracking-[0.2em] sm:text-stone-300">
                    {getProjectClientsLabel(secondaryHero.clients)}
                  </p>
                  <p className="mt-3 hidden text-sm leading-6 text-stone-300 sm:block">
                    {secondaryHero.description}
                  </p>
                </div>
              </a>

              <a
                href={supportProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-hero-card-soft animate-delay-4 overflow-hidden rounded-[1.7rem] bg-[#101418] shadow-[0_18px_40px_rgba(15,23,42,0.14)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:rounded-[2rem]"
              >
                <div className="relative aspect-[1.16] overflow-hidden">
                  <Image
                    src={supportProject.image}
                    alt={supportProject.alt}
                    fill
                    className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
                  />
                  <div className="absolute inset-x-0 top-0 h-2 bg-[#eef2f4]" />
                </div>

                <div className="border-t border-white/10 p-4 sm:p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-200 sm:text-[0.64rem] sm:tracking-[0.22em] sm:text-stone-300">
                    {content.cards.platformBadge}
                  </p>
                  <p className="mt-2 font-display text-[1.85rem] uppercase leading-none text-white sm:text-2xl">
                    {supportProject.title}
                  </p>
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-stone-200 sm:text-[0.66rem] sm:tracking-[0.2em] sm:text-stone-300">
                    {getProjectClientsLabel(supportProject.clients)}
                  </p>
                  <p className="mt-3 hidden text-sm leading-6 text-stone-300 sm:block">
                    {supportProject.description}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

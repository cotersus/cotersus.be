import Image from 'next/image';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Reveal } from './components/ui/Reveal';
import { projects } from './data/projects';
import { clients as clientsData } from './data/clients';
import {
  technologies as technologiesData,
  type TechnologyKey,
} from './data/technologies';

const capabilityPillars = [
  {
    title: 'Senior engineering',
    body: 'Hands-on delivery for teams that need experienced developers who can move work forward without heavy oversight.',
  },
  {
    title: 'Maintainable systems',
    body: 'Architecture and codebases designed to stay clear as products, teams, and requirements grow.',
  },
  {
    title: 'Embedded coaching',
    body: 'Technical guidance, code review, and team support built into the delivery process.',
  },
];

const process = [
  {
    label: '01',
    title: 'Clarify the scope',
    body: 'We align on goals, constraints, and priorities before implementation starts, so the work stays focused.',
  },
  {
    label: '02',
    title: 'Build what matters first',
    body: 'We focus on the product paths that carry the most business value and shape the technical foundation around them.',
  },
  {
    label: '03',
    title: 'Strengthen the team',
    body: 'Delivery includes documentation, coaching, and code quality practices that keep the product healthy after launch.',
  },
];

const selectedProjectTitles = [
  'Ward Pellegrims Coaching',
  'VS Mediation',
  'Van Steenbrugge Advocaten',
  'Jazz&Mo',
];

const heroProjectTitles = ['Zwem Coach', 'Exceptional Kids'];
const supportProjectTitle = 'Manage My Business';

const getProjectClientsLabel = (clientKeys: (typeof projects)[number]['clients']) =>
  clientKeys.map((clientKey) => clientsData[clientKey].name).join(' / ');

export default function Index() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  const heroProjectTitleSet = new Set([...heroProjectTitles, supportProjectTitle]);
  const heroProjects = heroProjectTitles
    .map((title) => sortedProjects.find((project) => project.title === title))
    .filter((project): project is (typeof projects)[number] => Boolean(project));
  const supportProject =
    sortedProjects.find((project) => project.title === supportProjectTitle) ??
    sortedProjects[2];
  const selectedProjects = [
    ...sortedProjects.filter(
      (project) =>
        selectedProjectTitles.includes(project.title) &&
        !heroProjectTitleSet.has(project.title),
    ),
    ...sortedProjects.filter(
      (project) =>
        !selectedProjectTitles.includes(project.title) &&
        !heroProjectTitleSet.has(project.title),
    ),
  ];
  const featuredProjects = selectedProjects.slice(0, 4);
  const additionalSelectedProjects = selectedProjects.slice(4);
  const listedSelectedProjects = [
    ...featuredProjects.slice(1),
    ...additionalSelectedProjects,
  ];

  const displayTechnologies = Object.keys(technologiesData)
    .map((key) => ({ key, tech: technologiesData[key] }))
    .filter(
      (
        item,
      ): item is {
        key: TechnologyKey;
        tech: { name: string; url: string; icon: React.ReactElement };
      } =>
        item.tech.isCoreTechnology === true &&
        'icon' in item.tech &&
        'url' in item.tech &&
        !!item.tech.icon &&
        !!item.tech.url,
    );

  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="grain-overlay relative isolate overflow-hidden bg-[#efe7d8] px-4 pb-12 pt-24 text-foreground sm:px-6 sm:pb-14 sm:pt-28 dark:bg-[#111417] dark:text-stone-100 lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-32">
          <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-[-14%] right-[-4%] h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
            <div className="max-w-xl lg:pb-8">
              <p className="eyebrow animate-fade-in">Cotersus / IT consulting / Belgium</p>
              <h1 className="font-display animate-rise animate-delay-1 mt-4 max-w-3xl text-balance text-[clamp(2.35rem,11.5vw,5.8rem)] uppercase leading-[0.9] text-slate-950 dark:text-white sm:mt-5">
                Senior software delivery without the usual drag.
              </h1>
              <p className="animate-fade-in animate-delay-2 mt-5 max-w-lg text-[1.03rem] leading-7 text-slate-700 dark:text-stone-300 sm:mt-6 sm:text-lg sm:leading-8">
                Cotersus helps teams build products, modernize platforms, and
                raise engineering quality with hands-on development and clear
                technical direction.
              </p>

              <div className="animate-fade-in animate-delay-2 mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:info@cotersus.be"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111417] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                >
                  Book an intro call
                </a>
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/35 hover:bg-foreground/5 dark:border-white/15 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5"
                >
                  See recent work
                </a>
              </div>

              <div className="animate-fade-in animate-delay-3 mt-10 grid gap-5 border-t border-black/10 pt-7 sm:mt-12 sm:pt-8 sm:grid-cols-3 sm:gap-6 dark:border-white/10">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-slate-500 dark:text-stone-500">
                    Focus
                  </p>
                  <p className="mt-2 text-sm text-slate-800 dark:text-stone-200">
                    Product delivery, consulting, coaching
                  </p>
                </div>
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-slate-500 dark:text-stone-500">
                    Stack
                  </p>
                  <p className="mt-2 text-sm text-slate-800 dark:text-stone-200">
                    Next.js, Angular, TypeScript, Nx
                  </p>
                </div>
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-slate-500 dark:text-stone-500">
                    Approach
                  </p>
                  <p className="mt-2 text-sm text-slate-800 dark:text-stone-200">
                    Clear scope. Clean code. Practical delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4 sm:gap-5 lg:ml-auto lg:max-w-[44rem]">
                <a
                  href={heroProjects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group animate-hero-card animate-delay-2 relative overflow-hidden rounded-[2rem] bg-[#101418] shadow-[0_24px_60px_rgba(15,23,42,0.18)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem]"
                >
                  <div className="relative aspect-[1.02] sm:aspect-[1.06]">
                    <Image
                      src={heroProjects[0].image}
                      alt={heroProjects[0].alt}
                      fill
                      priority
                      className="object-cover object-center brightness-110 transition-[filter] duration-500 group-hover:brightness-125"
                    />
                    <div className="absolute inset-0 bg-black/18" />
                  </div>

                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/80 backdrop-blur sm:left-6 sm:top-6 sm:text-[0.68rem]">
                    Featured project
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                    <div className="max-w-[20rem] rounded-[1.35rem] bg-[#111417]/88 p-4 backdrop-blur sm:rounded-[1.5rem] sm:p-5">
                      <p className="font-display text-[2.05rem] uppercase leading-none text-white sm:text-4xl">
                        {heroProjects[0].title}
                      </p>
                      <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-stone-300">
                        {getProjectClientsLabel(heroProjects[0].clients)}
                      </p>
                      <p className="mt-3 hidden text-sm leading-6 text-stone-200 sm:block">
                        {heroProjects[0].description}
                      </p>
                    </div>
                  </div>
                </a>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={heroProjects[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group animate-hero-card-soft animate-delay-3 overflow-hidden rounded-[1.7rem] bg-[#12161b] shadow-[0_18px_40px_rgba(15,23,42,0.14)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:rounded-[2rem]"
                  >
                    <div className="relative aspect-[1.16] overflow-hidden">
                      <Image
                        src={heroProjects[1].image}
                        alt={heroProjects[1].alt}
                        fill
                        className="object-cover transition-[filter] duration-500 group-hover:brightness-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/18 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-[#12161b]" />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-200 sm:text-[0.64rem] sm:tracking-[0.22em] sm:text-stone-300">
                        Supporting project
                      </p>
                      <p className="mt-2 font-display text-[1.85rem] uppercase leading-none text-white sm:text-2xl">
                        {heroProjects[1].title}
                      </p>
                      <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-stone-200 sm:text-[0.66rem] sm:tracking-[0.2em] sm:text-stone-300">
                        {getProjectClientsLabel(heroProjects[1].clients)}
                      </p>
                      <p className="mt-3 hidden text-sm leading-6 text-stone-300 sm:block">
                        {heroProjects[1].description}
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
                        Platform work
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

        <section className="section-divider px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="max-w-md">
              <p className="eyebrow">How Cotersus helps</p>
              <h2 className="font-display mt-4 text-4xl uppercase leading-none text-foreground sm:text-5xl">
                The support you need to ship with confidence.
              </h2>
            </div>
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
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {pillar.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects" className="section-divider px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Selected work</p>
              <h2 className="font-display mt-4 text-3xl uppercase leading-none text-foreground sm:text-6xl">
                Recent projects across product, platform, and frontend work.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                A few examples of the work Cotersus has delivered for clients
                who needed reliable implementation, stronger frontend systems,
                or a modern web presence.
              </p>
            </div>

            <div className="mt-10 grid gap-7 border-t border-border/70 pt-7 sm:mt-12 sm:gap-10 sm:pt-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <a
                href={featuredProjects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2.4rem] bg-[#161a1f] shadow-[0_28px_60px_rgba(15,23,42,0.16)] dark:shadow-[0_28px_60px_rgba(0,0,0,0.28)]">
                  <div className="relative aspect-[1.08]">
                    <Image
                      src={featuredProjects[0].image}
                      alt={featuredProjects[0].alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/24" />
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-5 lg:pt-2">
                <div>
                  <p className="eyebrow">Featured project</p>
                  <h3 className="font-display mt-3 text-3xl uppercase leading-none text-foreground sm:mt-4 sm:text-5xl">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="mt-5 text-[0.72rem] uppercase tracking-[0.26em] text-muted-foreground">
                    {featuredProjects[0].role}
                  </p>
                  <p className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {getProjectClientsLabel(featuredProjects[0].clients)}
                  </p>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground sm:mt-5 sm:leading-8">
                    {featuredProjects[0].description}
                  </p>
                  <a
                    href={featuredProjects[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow mt-5 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
                  >
                    View project
                  </a>
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
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      <p className="text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.72rem] sm:tracking-[0.24em]">
                        {project.role}
                      </p>
                      <h3 className="font-display mt-2 text-[2rem] uppercase leading-[0.94] text-foreground sm:mt-3 sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground sm:mt-3 sm:text-[0.72rem] sm:tracking-[0.22em]">
                        {getProjectClientsLabel(project.clients)}
                      </p>
                      <p className="mt-3 hidden text-sm leading-7 text-muted-foreground sm:block">
                        {project.description}
                      </p>
                      <span className="link-arrow mt-3 inline-block text-xs font-semibold uppercase tracking-[0.17em] text-foreground md:hidden">
                        View project
                      </span>
                    </div>
                    <div className="hidden md:block md:pt-1">
                      <span className="link-arrow text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                        View project
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section-divider px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Method</p>
              <h2 className="font-display mt-4 text-3xl uppercase leading-none text-foreground sm:text-6xl">
                A delivery process built to reduce uncertainty.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">
                The goal is simple: understand the work quickly, build the
                right thing first, and leave behind a codebase your team can
                keep moving forward.
              </p>
            </div>

            <div className="grid gap-6">
              {process.map((step, index) => (
                <Reveal
                  key={step.label}
                  delayMs={90 + index * 90}
                  className={`grid gap-4 pt-6 md:grid-cols-[auto_1fr_auto] md:items-start ${
                    index === 0 ? '' : 'border-t border-border/70'
                  }`}
                >
                  <p className="font-display text-3xl uppercase text-primary">
                    {step.label}
                  </p>
                  <div className="max-w-xl">
                    <h3 className="font-display text-3xl uppercase text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {index === 0 ? 'Strategy' : index === 1 ? 'Delivery' : 'Handoff'}
                  </p>
                </Reveal>
              ))}

            </div>
          </Reveal>
        </section>

        <section className="section-divider px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Technology baseline</p>
                <h2 className="font-display mt-4 text-4xl uppercase leading-none text-foreground sm:text-5xl">
                  Technologies chosen for real product work.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                Cotersus works with proven frontend and full-stack tools that
                support fast delivery, maintainable code, and teams that need
                to keep building after launch.
              </p>
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
        </section>

        <section className="section-divider px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl rounded-[2rem] bg-[#ebe2d1] px-6 py-10 text-foreground sm:px-10 sm:py-14 dark:bg-[#161a1f] dark:text-stone-100">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="eyebrow text-slate-500 dark:text-stone-400">Next step</p>
                <h2 className="font-display mt-4 max-w-3xl text-4xl uppercase leading-none text-slate-950 dark:text-white sm:text-6xl">
                  Need an experienced team to move your project forward?
                </h2>
              </div>
              <div>
                <p className="text-base leading-8 text-slate-700 dark:text-stone-300">
                  Tell us what you are building and where delivery is blocked.
                  We can support implementation, architecture, and technical
                  coaching from kickoff to launch.
                </p>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:info@cotersus.be"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111417] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                  >
                    Book an intro call
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/35 hover:bg-foreground/5 dark:border-white/15 dark:text-white dark:hover:border-white/35 dark:hover:bg-white/5"
                  >
                    See selected work
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

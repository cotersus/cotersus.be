import { HomePage } from '@/features/home/HomePage';
import { homePage } from '@/data/pages';
import { clients } from '@/data/clients';
import { projectIds, projects } from '@/data/projects';
import { technologies as technologiesData, type TechnologyKey } from '@/data/technologies';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { isValidLocale, locales } from '@/i18n/config';
import type { LocalizedProject } from '@/features/home/types';
import { notFound } from 'next/navigation';
import type { ReactElement } from 'react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  const getProjectClientsLabel = (clientKeys: (typeof projects)[number]['clients']) =>
    clientKeys.map((clientKey) => clients[clientKey].name).join(' / ');

  const localizedProjects: LocalizedProject[] = projects.map((project) => ({
    ...project,
    ...dictionary.projectCopies[project.id],
  }));

  const {
    heroProjectIds,
    supportProjectId,
    selectedProjectIds,
  } = homePage.blocks.projects;

  const sortedProjects = [...localizedProjects].sort((a, b) => b.year - a.year);
  const projectById = new Map(sortedProjects.map((project) => [project.id, project]));

  const heroProjectIdSet = new Set([...heroProjectIds, supportProjectId]);

  const heroProjects = heroProjectIds
    .map((id) => projectById.get(id))
    .filter((project): project is LocalizedProject => Boolean(project));

  const fallbackSupportProjectId = projectIds.manageMyBusiness;
  const supportProject =
    projectById.get(supportProjectId) ??
    projectById.get(fallbackSupportProjectId) ??
    sortedProjects[0];

  const selectedProjects = [
    ...sortedProjects.filter(
      (project) =>
        selectedProjectIds.includes(project.id) && !heroProjectIdSet.has(project.id),
    ),
    ...sortedProjects.filter(
      (project) =>
        !selectedProjectIds.includes(project.id) && !heroProjectIdSet.has(project.id),
    ),
  ];

  const featuredProjects = selectedProjects.slice(0, 4);
  const additionalSelectedProjects = selectedProjects.slice(4);
  const listedSelectedProjects = [
    ...featuredProjects.slice(1),
    ...additionalSelectedProjects,
  ];

  const displayTechnologies = (Object.keys(technologiesData) as TechnologyKey[])
    .map((key) => ({ key, tech: technologiesData[key] }))
    .filter(
      (
        item,
      ): item is {
        key: TechnologyKey;
        tech: { name: string; url: string; icon: ReactElement };
      } =>
        item.tech.isCoreTechnology === true &&
        'name' in item.tech &&
        'icon' in item.tech &&
        'url' in item.tech &&
        !!item.tech.name &&
        !!item.tech.icon &&
        !!item.tech.url,
    );

  return (
    <HomePage
      content={dictionary.home}
      heroProjects={heroProjects}
      supportProject={supportProject}
      featuredProject={featuredProjects[0] ?? supportProject}
      listedSelectedProjects={listedSelectedProjects}
      displayTechnologies={displayTechnologies}
      getProjectClientsLabel={getProjectClientsLabel}
    />
  );
}

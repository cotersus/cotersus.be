import { HomePage } from '@/features/home/HomePage';
import { clients as clientsData } from '@/data/clients';
import { homePage } from '@/data/pages';
import { projects } from '@/data/projects';
import { technologies as technologiesData, type TechnologyKey } from '@/data/technologies';

const getProjectClientsLabel = (clientKeys: (typeof projects)[number]['clients']) =>
  clientKeys.map((clientKey) => clientsData[clientKey].name).join(' / ');

export default function Page() {
  const {
    heroProjectIds,
    supportProjectId,
    selectedProjectIds,
  } = homePage.blocks.projects;

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  const projectById = new Map(sortedProjects.map((project) => [project.id, project]));

  const heroProjectIdSet = new Set([...heroProjectIds, supportProjectId]);

  const heroProjects = heroProjectIds
    .map((id) => projectById.get(id))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  const supportProject =
    projectById.get(supportProjectId) ?? sortedProjects[2];

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
    <HomePage
      heroProjects={heroProjects}
      supportProject={supportProject}
      featuredProject={featuredProjects[0]}
      listedSelectedProjects={listedSelectedProjects}
      displayTechnologies={displayTechnologies}
      getProjectClientsLabel={getProjectClientsLabel}
    />
  );
}

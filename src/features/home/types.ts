import type { Project } from '@/data/projects';
import type { Technology, TechnologyKey } from '@/data/technologies';

export interface DisplayTechnology {
  key: TechnologyKey;
  tech: Technology;
}

export interface HomePageViewModel {
  heroProjects: Project[];
  supportProject: Project;
  featuredProject: Project;
  listedSelectedProjects: Project[];
  displayTechnologies: DisplayTechnology[];
  getProjectClientsLabel: (clientKeys: Project['clients']) => string;
}

import type { Project } from '@/data/projects';
import type { Technology, TechnologyKey } from '@/data/technologies';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import type { ReactElement } from 'react';

export interface LocalizedProject extends Project {
  alt: string;
  role: string;
  title: string;
  description: string;
}

export interface LocalizedTechnology extends Technology {
  name: string;
  url: string;
  icon: ReactElement;
}

export interface DisplayTechnology {
  key: TechnologyKey;
  tech: LocalizedTechnology;
}

export interface HomePageViewModel {
  content: Dictionary['home'];
  heroProjects: LocalizedProject[];
  supportProject: LocalizedProject;
  featuredProject: LocalizedProject;
  listedSelectedProjects: LocalizedProject[];
  displayTechnologies: DisplayTechnology[];
  getProjectClientsLabel: (clientKeys: LocalizedProject['clients']) => string;
}

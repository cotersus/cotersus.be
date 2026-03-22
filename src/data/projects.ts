import type { ClientKey } from '@/data/clients';
import type { TechnologyKey } from '@/data/technologies';

export const projectIds = {
  zwemCoach: 'zwem-coach',
  wardPellegrimsCoaching: 'ward-pellegrims-coaching',
  exceptionalKids: 'exceptional-kids',
  vsMediation: 'vs-mediation',
  vanSteenbruggeAdvocaten: 'van-steenbrugge-advocaten',
  jazzAndMo: 'jazz-and-mo',
  banakin: 'banakin',
  manageMyBusiness: 'manage-my-business',
  statutenEnVertegenwoordigingsbevoegdheden: 'stapor',
  zvcGoldgetters: 'zvc-goldgetters',
} as const;

export type ProjectId = (typeof projectIds)[keyof typeof projectIds];

export interface Project {
  id: ProjectId;
  image: string;
  url: string;
  technologies: TechnologyKey[];
  clients: ClientKey[];
  year: number;
}

export const projects: Project[] = [
  {
    id: projectIds.zwemCoach,
    image: '/images/projects/zwem-coach-featured.png',
    url: 'https://www.zwem.coach/',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'stripe'],
    clients: ['wardPellegrims'],
    year: 2025,
  },
  {
    id: projectIds.wardPellegrimsCoaching,
    image: '/images/projects/pellegrims-coach-hero.png',
    url: 'https://www.pellegrims.coach/',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'stripe'],
    clients: ['wardPellegrims'],
    year: 2025,
  },
  {
    id: projectIds.exceptionalKids,
    image: '/images/projects/exceptional-kids-hero.png',
    url: 'https://www.exceptionalkids.be/',
    technologies: ['nextjs', 'prismicCms', 'typescript', 'tailwindcss'],
    clients: ['cmeKuleuven'],
    year: 2023,
  },
  {
    id: projectIds.vsMediation,
    image: '/images/projects/vs-mediation-hero.png',
    url: 'https://riff-agency.be/projecten/van-steenbrugge-mediation',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['riffAgency'],
    year: 2019,
  },
  {
    id: projectIds.vanSteenbruggeAdvocaten,
    image: '/images/projects/vsa-hero.jpg',
    url: 'https://riff-agency.be/projecten/van-steenbrugge-advocaten',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['riffAgency'],
    year: 2019,
  },
  {
    id: projectIds.jazzAndMo,
    image: '/images/projects/jazzandmo-hero.png',
    url: 'https://jazzandmo.be/',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['riffAgency'],
    year: 2017,
  },
  {
    id: projectIds.banakin,
    image: '/images/projects/banakin-hero.png',
    url: 'https://banakin.org/',
    technologies: ['angularjs'],
    clients: ['riffAgency'],
    year: 2016,
  },
  {
    id: projectIds.manageMyBusiness,
    image: '/images/projects/mmb.png',
    url: 'https://manage-my-business.be/',
    technologies: ['angular', 'typescript'],
    clients: ['fednot', 'irisIms'],
    year: 2023,
  },
  {
    id: projectIds.statutenEnVertegenwoordigingsbevoegdheden,
    image: '/images/projects/stapor.png',
    url: 'https://statuten.notaris.be/stapor_v1',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['fednot', 'irisIms'],
    year: 2019,
  },
  {
    id: projectIds.zvcGoldgetters,
    image: '/images/projects/goldgetters.png',
    url: 'https://goldgetters.be/',
    technologies: ['drupal'],
    clients: ['zvcGoldgetters'],
    year: 2012,
  },
];

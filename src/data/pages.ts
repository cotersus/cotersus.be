import { projectIds, type ProjectId } from '@/data/projects';

export interface HomePageProjectsBlock {
  heroProjectIds: [ProjectId, ProjectId];
  supportProjectId: ProjectId;
  selectedProjectIds: ProjectId[];
}

export interface HomePage {
  slug: '/';
  blocks: {
    projects: HomePageProjectsBlock;
  };
}

export const homePage: HomePage = {
  slug: '/',
  blocks: {
    projects: {
      heroProjectIds: [projectIds.zwemCoach, projectIds.exceptionalKids],
      supportProjectId: projectIds.manageMyBusiness,
      selectedProjectIds: [
        projectIds.wardPellegrimsCoaching,
        projectIds.vsMediation,
        projectIds.vanSteenbruggeAdvocaten,
        projectIds.jazzAndMo,
      ],
    },
  },
};

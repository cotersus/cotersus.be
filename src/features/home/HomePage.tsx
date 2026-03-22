import type { HomePageViewModel } from '@/features/home/types';
import { HeroSection } from '@/features/home/sections/HeroSection';
import { CapabilitiesSection } from '@/features/home/sections/CapabilitiesSection';
import { ProjectsSection } from '@/features/home/sections/ProjectsSection';
import { ProcessSection } from '@/features/home/sections/ProcessSection';
import { TechnologiesSection } from '@/features/home/sections/TechnologiesSection';
import { CallToActionSection } from '@/features/home/sections/CallToActionSection';

export function HomePage(viewModel: HomePageViewModel) {
  return (
    <div className="page-shell">
      <main>
        <HeroSection
          content={viewModel.content.hero}
          heroProjects={viewModel.heroProjects}
          supportProject={viewModel.supportProject}
          getProjectClientsLabel={viewModel.getProjectClientsLabel}
        />
        <CapabilitiesSection content={viewModel.content.capabilities} />
        <ProjectsSection
          content={viewModel.content.projects}
          featuredProject={viewModel.featuredProject}
          listedSelectedProjects={viewModel.listedSelectedProjects}
          getProjectClientsLabel={viewModel.getProjectClientsLabel}
        />
        <ProcessSection content={viewModel.content.process} />
        <TechnologiesSection
          content={viewModel.content.technologies}
          displayTechnologies={viewModel.displayTechnologies}
        />
        <CallToActionSection content={viewModel.content.cta} />
      </main>
    </div>
  );
}

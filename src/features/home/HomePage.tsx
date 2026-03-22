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
          heroProjects={viewModel.heroProjects}
          supportProject={viewModel.supportProject}
          getProjectClientsLabel={viewModel.getProjectClientsLabel}
        />
        <CapabilitiesSection />
        <ProjectsSection
          featuredProject={viewModel.featuredProject}
          listedSelectedProjects={viewModel.listedSelectedProjects}
          getProjectClientsLabel={viewModel.getProjectClientsLabel}
        />
        <ProcessSection />
        <TechnologiesSection displayTechnologies={viewModel.displayTechnologies} />
        <CallToActionSection />
      </main>
    </div>
  );
}

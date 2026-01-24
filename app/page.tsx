import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Section } from './components/ui/Section';
import { Container } from './components/ui/Container';
import { Heading, Text } from './components/ui/Typography';
import { Button } from './components/ui/Button';
import { ProjectCard } from './components/features/ProjectCard';
import { ServiceCard } from './components/features/ServiceCard';
import { ProcessStep } from './components/features/ProcessStep';
import { projects } from './data/projects';
import {
  technologies as technologiesData,
  type TechnologyKey,
} from './data/technologies';

export default async function Index() {
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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section
        id="hero"
        className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Heading variant="h1" as="h1">
              Your Partner for
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Quality Software Development
              </span>
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              Your reliable partner for full-stack development, strategy, and
              digital innovation—built on clean code and quality.
            </Text>
            <Text variant="tiny" italic>
              Cotersus = Code + Tersus (Latin: clean) — Clean code is our
              foundation
            </Text>
            <div className="pt-4">
              <Button href="mailto:info@cotersus.be">Get in Touch</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-white dark:bg-zinc-800">
        <Container>
          <div className="text-center mb-16">
            <Heading className="mb-4">How We Help You</Heading>
            <Text variant="lead">
              Quality-driven solutions built on clean code principles
            </Text>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ServiceCard
              icon="🎯"
              title="IT Consulting & Developer Coaching"
              description="We embed within your organization as senior developers and technical coaches—building scalable solutions while mentoring your teams and establishing best practices."
              features={[
                'Frontend architecture guidance and technical mentorship',
                'Hands-on development within Nx monorepos and enterprise applications',
                'Mentoring developers and promoting best practices across agile teams',
                'Establishing clean code standards and maintainable practices',
              ]}
            />
            <ServiceCard
              icon="💻"
              title="Website & Web Application Development"
              description="We design and build professional websites and web applications that help your business grow—delivering fast, modern, and user-friendly solutions that make the right impression."
              features={[
                'Modern, responsive design that works perfectly on all devices',
                'Fast performance and excellent user experience',
                'Accessible and SEO-optimized for maximum reach',
                'Built with clean, maintainable code for long-term value',
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section
        id="process"
        className="bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800"
      >
        <Container>
          <div className="text-center mb-16">
            <Heading className="mb-4">A Clear Plan, No Surprises</Heading>
            <Text variant="lead">
              Our proven process ensures quality results
            </Text>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number={1}
              title="Strategy & Analysis"
              description="We listen to your goals and analyze the requirements."
              showConnector
            />
            <ProcessStep
              number={2}
              title="Design & Development"
              description="We design and build the solution with a focus on quality and feedback."
              showConnector
            />
            <ProcessStep
              number={3}
              title="Delivery & Support"
              description="After a thorough testing phase, we launch the project and remain available for support."
            />
          </div>
        </Container>
      </Section>

      {/* Technologies Section */}
      <Section id="technologies" className="bg-white dark:bg-zinc-800">
        <Container>
          <div className="text-center mb-16">
            <Heading className="mb-4">Our Core Technologies</Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              We use modern, robust, and scalable technologies to guarantee the
              quality of your project.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {displayTechnologies.map((item) => (
              <a
                key={item.key}
                href={item.tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-700 dark:to-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-zinc-600 w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(16.666%-1.25rem)] min-w-[140px]"
              >
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300">
                  {item.tech.icon}
                </div>
                <p className="font-semibold text-center text-sm">
                  {item.tech.name}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects Showcase Section */}
      <Section
        id="projects"
        className="bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800"
      >
        <Container>
          <div className="text-center mb-16">
            <Heading className="mb-4">Featured Projects</Heading>
            <Text variant="lead">
              A selection of projects we&apos;ve worked on and helped realize
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[...projects]
              .sort((a, b) => b.year - a.year)
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

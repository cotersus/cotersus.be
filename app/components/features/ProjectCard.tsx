import Image from 'next/image';
import type { Project } from '../../data/projects';
import { clients as clientsData, type Client } from '../../data/clients';
import {
  technologies as technologiesData,
  type Technology,
} from '../../data/technologies';
import { HoverCard } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Text } from '../ui/Typography';

type ProjectCardProps = Project;

export function ProjectCard({
  image,
  alt,
  role,
  title,
  url,
  description,
  technologies: technologyKeys,
  clients: clientKeys,
  year,
}: ProjectCardProps) {
  return (
    <HoverCard className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] lg:max-w-sm flex flex-col group/card relative">
      <div className="h-48 relative overflow-hidden flex-shrink-0">
        <Image src={image} alt={alt} fill className="object-cover transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 relative z-10">
          <Text variant="tiny" className="mb-2">
            {clientKeys.map((clientKey, index) => {
              const client = clientsData[clientKey] as Client;
              return (
                <span key={clientKey}>
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-orange transition-colors"
                    >
                      {client.name}
                    </a>
                  ) : (
                    client.name
                  )}
                  {index < clientKeys.length - 1 && ', '}
                </span>
              );
            })}{' '}
            • {year}
          </Text>
        </div>
        <div className="mb-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-brand-orange hover:text-brand-red transition-colors inline-flex items-center gap-1 after:absolute after:inset-0 after:z-0"
          >
            {title}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        <div className="mb-4">
          <Text
            variant="tiny"
            className="uppercase tracking-wide"
          >
            {role}
          </Text>
        </div>
        <Text variant="small" className="mb-4 flex-grow">
          {description}
        </Text>
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {technologyKeys.map((techKey) => {
            const tech = technologiesData[techKey] as Technology;
            return (
              <Badge key={techKey} href={tech.url}>
                <span className="flex items-center gap-1.5">
                  {tech.icon && (
                    <span className="inline-block w-4 h-4 flex-shrink-0 [&>svg]:!w-4 [&>svg]:!h-4">
                      {tech.icon}
                    </span>
                  )}
                  <span>{tech.name}</span>
                </span>
              </Badge>
            );
          })}
        </div>
      </div>
    </HoverCard>
  );
}

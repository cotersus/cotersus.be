import { HoverCard } from '../ui/Card';
import { Heading, Text } from '../ui/Typography';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <HoverCard className="p-8 group h-full">
      <div className="w-16 h-16 bg-gradient-brand rounded-xl mb-6 flex items-center justify-center text-3xl shadow-lg">
        {icon}
      </div>
      <Heading
        variant="h3"
        className="mb-4 group-hover:bg-gradient-brand group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
      >
        {title}
      </Heading>
      <Text className="mb-4">{description}</Text>
      <ul className="text-muted-foreground text-sm space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-brand-orange mt-0.5">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </HoverCard>
  );
}

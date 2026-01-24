import { Heading, Text } from '../ui/Typography';

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  showConnector?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  showConnector,
}: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
          {number}
        </div>
        <Heading variant="h3" as="h3">
          {title}
        </Heading>
        <Text>{description}</Text>
      </div>
      {showConnector && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-red to-brand-orange" />
      )}
    </div>
  );
}

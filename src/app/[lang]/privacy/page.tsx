import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { isValidLocale } from '@/i18n/config';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';

interface PrivacyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return dictionary.privacy.metadata;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);
  const content = dictionary.privacy;

  return (
    <main className="pt-24">
      <Section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <header className="mb-12">
            <Heading variant="h1" as="h1" className="mb-4">
              {content.title}
            </Heading>
            <Text variant="tiny">
              {content.lastUpdatedLabel}{' '}
              {new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </header>

          <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-fjalla prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-600 dark:prose-p:text-zinc-300 prose-li:text-gray-600 dark:prose-li:text-zinc-300">
            <p className="lead">{content.intro}</p>

            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraph ? <p>{section.paragraph}</p> : null}
                {'list' in section && section.list ? (
                  <ul>
                    {section.list.map((item: string | { label: string; text: string }) => (
                      <li key={typeof item === 'string' ? item : `${item.label}-${item.text}`}>
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          <>
                            <strong>{item.label}:</strong> {item.text}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 dark:bg-zinc-700/50 p-8 rounded-2xl border border-gray-200 dark:border-zinc-600 shadow-sm not-prose">
            <Text className="font-bold text-gray-900 dark:text-white mb-2">{content.contact.company}</Text>
            <Text variant="small">{content.contact.addressLine1}</Text>
            <Text variant="small">{content.contact.addressLine2}</Text>
            <Text variant="small" className="mb-4">
              {content.contact.vat}
            </Text>
            <div className="pt-4 border-t border-gray-200 dark:border-zinc-600">
              <Text variant="small">
                {content.contact.emailLabel}{' '}
                <a
                  href="mailto:info@cotersus.be"
                  className="text-brand-orange hover:text-brand-red font-medium transition-colors"
                >
                  info@cotersus.be
                </a>
              </Text>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200 dark:border-zinc-700">
            <Button variant="link" href={`/${lang}`} className="group gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>{' '}
              {content.backToHomeLabel}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

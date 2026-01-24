import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/ui/Container';
import { Heading, Text } from '../components/ui/Typography';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export const metadata = {
  title: 'Privacy Policy | Cotersus IT Consulting',
  description: 'Privacy policy for Cotersus IT Consulting.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <Section className="py-12 sm:py-16">
          <Container className="max-w-4xl">
            {/* Page Header */}
            <header className="mb-12">
              <Heading variant="h1" as="h1" className="mb-4">
                Privacy Policy
              </Heading>
              <Text variant="tiny">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
            </header>

            {/* Legal Content with Typography Plugin */}
            <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-fjalla prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-600 dark:prose-p:text-zinc-300 prose-li:text-gray-600 dark:prose-li:text-zinc-300">
              <p className="lead">
                At Cotersus BV, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, and protect your personal
                information.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  Contact information (name, email address, company name) when
                  you contact us through our social channels
                </li>
                <li>
                  Usage data through analytics (page visits, browser type,
                  device information)
                </li>
                <li>
                  Technical data (IP address, browser type, operating system)
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries and provide our services</li>
                <li>To improve our website and services</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2>3. Cookies and Tracking</h2>
              <p>We use minimal tracking on our website:</p>
              <ul>
                <li>
                  <strong>Analytics:</strong> We use Vercel Analytics and Speed
                  Insights for privacy-friendly performance monitoring
                </li>
                <li>
                  <strong>Theme Preference:</strong> We store your dark/light
                  mode preference locally in your browser
                </li>
              </ul>

              <h2>4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>
                  To comply with legal obligations or respond to legal requests
                </li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2>6. Your Rights (GDPR)</h2>
              <p>
                Under the General Data Protection Regulation (GDPR), you have
                the following rights:
              </p>
              <ul>
                <li>
                  <strong>Right to access:</strong> Request a copy of your
                  personal data
                </li>
                <li>
                  <strong>Right to rectification:</strong> Request correction of
                  inaccurate data
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your
                  personal data
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> Request
                  limitation of data processing
                </li>
                <li>
                  <strong>Right to data portability:</strong> Request transfer
                  of your data
                </li>
                <li>
                  <strong>Right to object:</strong> Object to processing of your
                  data
                </li>
              </ul>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law.
              </p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in
                countries other than Belgium. We ensure appropriate safeguards
                are in place to protect your data in accordance with GDPR
                requirements.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
            </div>

            {/* Contact Box - Styled as a Feature Card */}
            <div className="mt-8 bg-gray-50 dark:bg-zinc-700/50 p-8 rounded-2xl border border-gray-200 dark:border-zinc-600 shadow-sm not-prose">
              <Text className="font-bold text-gray-900 dark:text-white mb-2">
                Cotersus BV
              </Text>
              <Text variant="small">Beigemsesteenweg 387</Text>
              <Text variant="small">1852 Beigem, Belgium</Text>
              <Text variant="small" className="mb-4">
                VAT: BE 0791.547.318
              </Text>
              <div className="pt-4 border-t border-gray-200 dark:border-zinc-600">
                <Text variant="small">
                  Email:{' '}
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
              <Button variant="link" href="/" className="group gap-2">
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>{' '}
                Back to Home
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import { Container } from '@/components/ui/Container';
import { BlueskyIcon, LinkedInIcon, XIcon } from '@/components/icons/SocialIcons';
import { IconCircleLink } from '@/components/ui/IconCircleLink';
import { OverlineHeading } from '@/components/ui/OverlineHeading';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/88920103',
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
  {
    href: 'https://x.com/CotersusIT',
    label: 'X (Twitter)',
    icon: <XIcon />,
  },
  {
    href: 'https://bsky.app/profile/cotersus.be',
    label: 'Bluesky',
    icon: <BlueskyIcon />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[#111417] text-stone-200">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div className="max-w-md">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Image src={logo} alt="Cotersus Logo" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white">Cotersus</h3>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-stone-400">
                  IT Consulting
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-stone-400">
              Senior software development, technical direction, and team
              coaching for organizations that want to ship and keep their codebase healthy.
            </p>
          </div>

          <div>
            <OverlineHeading>Contact</OverlineHeading>
            <div className="space-y-2 text-sm text-stone-300">
              <p>Cotersus BV</p>
              <p>Beigemsesteenweg 387, 1852 Beigem, Belgium</p>
              <p>VAT: BE 0791.547.318</p>
              <p>
                <a
                  href="mailto:info@cotersus.be"
                  className="text-primary transition-colors hover:text-white"
                >
                  info@cotersus.be
                </a>
              </p>
            </div>
          </div>

          <div>
            <OverlineHeading>Connect</OverlineHeading>
            <div className="mb-5 flex gap-3">
              {socialLinks.map((social) => (
                <IconCircleLink key={social.label} href={social.href} aria-label={social.label}>
                  {social.icon}
                </IconCircleLink>
              ))}
            </div>
            <div className="space-y-2 text-sm text-stone-400">
              <Link
                href="/privacy"
                className="block transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Cotersus BV. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

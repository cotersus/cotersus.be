import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import { Container } from '@/components/ui/Container';
import { BlueskyIcon, LinkedInIcon, XIcon } from '@/components/icons/SocialIcons';
import { IconCircleLink } from '@/components/ui/IconCircleLink';
import { OverlineHeading } from '@/components/ui/OverlineHeading';

interface FooterProps {
  lang: string;
  content: {
    logoAlt: string;
    companyName: string;
    companyTagline: string;
    blurb: string;
    contactHeading: string;
    contactCompany: string;
    contactAddress: string;
    contactVat: string;
    connectHeading: string;
    privacyLabel: string;
    copyrightSuffix: string;
    socialLinks: {
      linkedin: string;
      x: string;
      bluesky: string;
    };
  };
}

export function Footer({ lang, content }: FooterProps) {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/88920103',
      label: content.socialLinks.linkedin,
      icon: <LinkedInIcon />,
    },
    {
      href: 'https://x.com/CotersusIT',
      label: content.socialLinks.x,
      icon: <XIcon />,
    },
    {
      href: 'https://bsky.app/profile/cotersus.be',
      label: content.socialLinks.bluesky,
      icon: <BlueskyIcon />,
    },
  ];

  return (
    <footer className="border-t border-border/70 bg-[#111417] text-stone-200">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div className="max-w-md">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Image src={logo} alt={content.logoAlt} className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white">{content.companyName}</h3>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-stone-400">
                  {content.companyTagline}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-stone-400">
              {content.blurb}
            </p>
          </div>

          <div>
            <OverlineHeading>{content.contactHeading}</OverlineHeading>
            <div className="space-y-2 text-sm text-stone-300">
              <p>{content.contactCompany}</p>
              <p>{content.contactAddress}</p>
              <p>{content.contactVat}</p>
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
            <OverlineHeading>{content.connectHeading}</OverlineHeading>
            <div className="mb-5 flex gap-3">
              {socialLinks.map((social) => (
                <IconCircleLink key={social.label} href={social.href} aria-label={social.label}>
                  {social.icon}
                </IconCircleLink>
              ))}
            </div>
            <div className="space-y-2 text-sm text-stone-400">
              <Link
                href={`/${lang}/privacy`}
                className="block transition-colors hover:text-white"
              >
                {content.privacyLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {content.contactCompany}. {content.copyrightSuffix}
          </p>
        </div>
      </Container>
    </footer>
  );
}
